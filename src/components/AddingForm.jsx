import { useContext, useRef, useState } from 'react';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { StyledButton, StyledForm } from '../styles/styles';
import { Context } from '../main';
import Swal from 'sweetalert2';
import { getAuth, signOut } from 'firebase/auth';

const AddingForm = ({ setModalOpen, placemarkCoords, setPlacemarkCoords }) => {
  const firestore = useContext(Context);
  const [id] = useDocumentData(doc(firestore, 'id/lastId'));

  const [adding, setAdding] = useState(false);
  const nameRef = useRef();
  const scientificNameRef = useRef();
  const maintainedByRef = useRef();
  const yearOfPlantRef = useRef();
  const diameterRef = useRef();

  const handleSubmit = async e => {
    e.preventDefault();
    setAdding(true);
    Swal.fire({
      title: "Qo'shilmoqda...",
      timer: 3000,
      position: 'bottom',
      icon: 'info',
      showConfirmButton: false,
      timerProgressBar: true,
      toast: true,
    });
    await addDoc(collection(firestore, 'trees'), {
      name: nameRef.current.value,
      scientificName: scientificNameRef.current.value,
      coordinates: placemarkCoords,
      maintainedBy: maintainedByRef.current.value,
      yearOfPlant: +yearOfPlantRef.current.value,
      diameter: +diameterRef.current.value,
      id: `TSUE-${id.count}`,
    });
    await setDoc(doc(firestore, 'id', 'lastId'), {
      count: id.count + 1,
    });

    setPlacemarkCoords([41.309805, 69.248903]);
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
  return (
    <StyledForm onSubmit={handleSubmit}>
      <p className='title'>Daraxt qo&apos;shish </p>
      <span>
        Daraxt joylashuvi{' '}
        <span className='choose' onClick={() => setModalOpen(false)}>
          Xaritadan tanlash
        </span>
      </span>
      <div className='flex'>
        <label>
          <input
            className='input'
            type='number'
            step='any'
            required
            value={placemarkCoords[0]}
            onChange={e =>
              setPlacemarkCoords(prevState => [e.target.value, prevState[1]])
            }
          />
          <span className='input-name'>kenglik</span>
        </label>

        <label>
          <input
            className='input'
            type='number'
            step='any'
            required
            value={placemarkCoords[1]}
            onChange={e =>
              setPlacemarkCoords(prevState => [prevState[0], e.target.value])
            }
          />
          <span className='input-name'>uzunlik</span>
        </label>
      </div>
      <label>
        <input className='input' type='text' ref={nameRef} required />
        <span className='input-name'>Nomi</span>
      </label>
      <label>
        <input className='input' type='text' ref={scientificNameRef} required />
        <span className='input-name'>Ilmiy nomi</span>
      </label>
      <label>
        <input
          className='input'
          value={`TSUE-${id?.count}`}
          type='text'
          readOnly
        />
        <span className='input-name'>Daraxt ID</span>
      </label>

      <label>
        <input className='input' type='text' ref={maintainedByRef} required />

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
      <div className='flex'>
        <StyledButton type='submit' className='button submit' disabled={adding}>
          Submit
        </StyledButton>
        <StyledButton
          type='button'
          className='button signout'
          onClick={() => signOut(getAuth())}
        >
          Google hisobdan chiqish
        </StyledButton>
      </div>
    </StyledForm>
  );
};

export default AddingForm;
