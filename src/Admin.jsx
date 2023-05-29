import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import React, { useContext, useRef } from 'react';
import { Context } from './main';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import Swal from 'sweetalert2';
import { getAuth, signOut } from 'firebase/auth';

const Admin = () => {
  const firestore = useContext(Context);
  const [id] = useDocumentData(doc(firestore, 'id/lastId'));

  const nameRef = useRef();
  const scientificNameRef = useRef();
  const latRef = useRef();
  const lngRef = useRef();
  const maintainedByRef = useRef();
  const yearOfPlantRef = useRef();
  const diameterRef = useRef();

  const handleSubmit = async e => {
    e.preventDefault();
    await addDoc(collection(firestore, 'trees'), {
      name: nameRef.current.value,
      scientificName: scientificNameRef.current.value,
      coordinates: [+latRef.current.value, +lngRef.current.value],
      maintainedBy: maintainedByRef.current.value,
      yearOfPlant: +yearOfPlantRef.current.value,
      diameter: +diameterRef.current.value,
      id: `TSUE-${id.count}`,
    });
    await setDoc(doc(firestore, 'id', 'lastId'), {
      count: id.count + 1,
    });
    nameRef.current.value = '';
    scientificNameRef.current.value = '';
    latRef.current.value = '';
    lngRef.current.value = '';
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
  };
  const signOutUser = () => {
    signOut(getAuth());
  };
  return (
    <div className='admin' style={{ flexDirection: 'column' }}>
      <form className='form' onSubmit={handleSubmit}>
        <p className='title'>Daraxt qo'shish </p>
        <span>Daraxt joylashuvi</span>
        <div className='flex'>
          <label>
            <input className='input' ref={latRef} type='text' required />
            <span>kenglik</span>
          </label>

          <label>
            <input className='input' ref={lngRef} type='text' required />
            <span>uzunlik</span>
          </label>
        </div>
        <label>
          <input className='input' ref={nameRef} type='text' required />
          <span>Nomi</span>
        </label>
        <label>
          <input
            className='input'
            ref={scientificNameRef}
            type='text'
            required
          />
          <span>Ilmiy nomi</span>
        </label>
        <label>
          <input
            className='input'
            placeholder={id?.count}
            type='text'
            disabled
          />
          <span>Daraxt ID</span>
        </label>

        <label>
          <input className='input' ref={maintainedByRef} type='text' required />
          <span>Mas`ul</span>
        </label>
        <label>
          <input className='input' ref={yearOfPlantRef} type='text' required />
          <span>Daraxt ekilgan yili</span>
        </label>
        <label>
          <input className='input' ref={diameterRef} type='text' required />
          <span>Tana diametri</span>
        </label>
        <button type='submit' className='submit'>
          Submit
        </button>
      </form>
      <button className='submit' onClick={signOutUser}>
        Google hisobdan chiqish
      </button>
    </div>
  );
};

export default Admin;
