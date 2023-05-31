import React, { useContext, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { getAuth, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
import { Context } from './main';
import Map from './Map';
import DraggableMarker from './Draggable';
import config from './config.json';
import { ContainerStyles, StyledAdmin } from './styles/styles';

const Admin = () => {
  const firestore = useContext(Context);
  const [id] = useDocumentData(doc(firestore, 'id/lastId'));
  const [user, loading] = useAuthState(getAuth());

  const [adding, setAdding] = useState(false);
  const [mapHidded, setMapHidded] = useState(true);

  const [lng, setLng] = useState(config.center[0]);
  const [lat, setLat] = useState(config.center[1]);
  const nameRef = useRef();
  const scientificNameRef = useRef();
  const maintainedByRef = useRef();
  const yearOfPlantRef = useRef();
  const diameterRef = useRef();

  const handleSubmit = async e => {
    e.preventDefault();
    Swal.fire({
      title: "Qo'shilmoqda...",
      timer: 3000,
      position: 'bottom',
      icon: 'info',
      showConfirmButton: false,
      timerProgressBar: true,
      toast: true,
    });
    setAdding(true);
    await addDoc(collection(firestore, 'trees'), {
      name: nameRef.current.value,
      scientificName: scientificNameRef.current.value,
      coordinates: [+lat, +lng],
      maintainedBy: maintainedByRef.current.value,
      yearOfPlant: +yearOfPlantRef.current.value,
      diameter: +diameterRef.current.value,
      id: `TSUE-${id.count}`,
    });
    await setDoc(doc(firestore, 'id', 'lastId'), {
      count: id.count + 1,
    });

    setLat('');
    setLng('');
    nameRef.current.value = '';
    scientificNameRef.current.value = '';
    maintainedByRef.current.value = '';
    yearOfPlantRef.current.value = '';
    diameterRef.current.value = '';

    Swal.fire({
      title: "Muvaffaqiyatli qo'shildi",
      timer: 4000,
      position: 'bottom',
      icon: 'success',
      showConfirmButton: false,
      timerProgressBar: true,
      toast: true,
    });
    setAdding(false);
  };
  const signOutUser = async () => {
    await signOut(getAuth());
    Swal.fire({
      title: 'Google Hisobdan chiqildi',
      timer: 4000,
      position: 'bottom',
      icon: 'info',
      showConfirmButton: false,
      timerProgressBar: true,
      toast: true,
    });
  };

  return (
    <StyledAdmin>
      {!user && !loading && <Navigate to='/' />}
      <form className='form' onSubmit={handleSubmit}>
        <p className='title'>Daraxt qo'shish </p>
        <span>
          Daraxt joylashuvi{' '}
          <span className='choose' onClick={() => setMapHidded(false)}>
            xaritadan tanlash
          </span>
        </span>
        <div className='flex'>
          <label>
            <input
              className='input'
              value={lat}
              type='number'
              step='any'
              required
              onChange={e => setLat(e.target.value)}
            />
            <span className='input-name'>kenglik</span>
          </label>

          <label>
            <input
              className='input'
              value={lng}
              type='number'
              step='any'
              required
              onChange={e => setLng(e.target.value)}
            />
            <span className='input-name'>uzunlik</span>
          </label>
        </div>
        <label>
          <input className='input' ref={nameRef} type='text' required />
          <span className='input-name'>Nomi</span>
        </label>
        <label>
          <input
            className='input'
            ref={scientificNameRef}
            type='text'
            required
          />
          <span className='input-name'>Ilmiy nomi</span>
        </label>
        <label>
          <input
            className='input'
            placeholder={`TSUE-${id?.count}`}
            type='text'
            readOnly
          />
          <span className='input-name'>Daraxt ID</span>
        </label>

        <label>
          <input className='input' ref={maintainedByRef} type='text' required />
          <span className='input-name'>Mas`ul</span>
        </label>
        <label>
          <input className='input' ref={yearOfPlantRef} type='text' required />
          <span className='input-name'>Daraxt ekilgan yili</span>
        </label>
        <label>
          <input className='input' ref={diameterRef} type='text' required />
          <span className='input-name'>Tana diametri</span>
        </label>
        <button type='submit' className='button submit' disabled={adding}>
          Submit
        </button>
        <button
          className='button signout'
          onClick={signOutUser}
          disabled={!user}
        >
          Google hisobdan chiqish
        </button>
      </form>

      <ContainerStyles
        className={mapHidded ? 'map-container hidden' : 'map-container'}
      >
        <Map>
          <DraggableMarker setLat={setLat} setLng={setLng} />
        </Map>
        <div className='control'>
          <button
            className='button ok'
            onClick={() => setMapHidded(!mapHidded)}
          >
            OK
          </button>
        </div>
      </ContainerStyles>
    </StyledAdmin>
  );
};

export default Admin;
