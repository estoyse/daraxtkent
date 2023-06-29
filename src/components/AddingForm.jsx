import { useContext, useRef, useState } from 'react';
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';
import { useDocumentData } from 'react-firebase-hooks/firestore';
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
      createdAt: serverTimestamp(),
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
    <form onSubmit={handleSubmit} className='p-4 overflow-auto'>
      <p className='text-slate-400 mb-2'>
        Daraxt Joylashuvi&nbsp;
        <span
          onClick={() => setModalOpen(false)}
          className='underline cursor-pointer text-slate-100 md:hidden'
        >
          xaritadan tanlash
        </span>
      </p>
      <div className='grid md:grid-cols-2 md:gap-6'>
        <div className='relative z-0 w-full mb-6 group'>
          <input
            value={placemarkCoords[0]}
            onChange={e =>
              setPlacemarkCoords(prevState => [e.target.value, prevState[1]])
            }
            type='number'
            step='any'
            name='floating_latitude'
            id='floating_latitude'
            className='block py-2.5 px-0 w-full text-sm text-slate-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            required
          />
          <label
            htmlFor='floating_latitude'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Kenglik
          </label>
        </div>
        <div className='relative z-0 w-full mb-6 group'>
          <input
            value={placemarkCoords[1]}
            onChange={e =>
              setPlacemarkCoords(prevState => [prevState[0], e.target.value])
            }
            type='number'
            step='any'
            name='floating-longtitude'
            id='floating-longtitude'
            className='block py-2.5 px-0 w-full text-sm text-slate-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            required
          />
          <label
            htmlFor='floating-longtitude'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Uzunlik
          </label>
        </div>
      </div>
      <div className='relative z-0 w-full mb-6 group'>
        <input
          ref={nameRef}
          type='text'
          name='floating_name'
          id='floating_name'
          className='block py-2.5 px-0 w-full text-sm text-slate-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          placeholder=' '
          required
        />
        <label
          htmlFor='floating_name'
          className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          Daraxt Nomi
        </label>
      </div>
      <div className='relative z-0 w-full mb-6 group'>
        <input
          ref={scientificNameRef}
          type='text'
          name='floating_scientific_name'
          id='floating_scientific_name'
          className='block py-2.5 px-0 w-full text-sm text-slate-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          placeholder=' '
          required
        />
        <label
          htmlFor='floating_scientific_name'
          className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          Ilmiy Nomi
        </label>
      </div>
      <div className='relative z-0 w-full mb-6 group'>
        <input
          type='text'
          name='floating_tree_id'
          id='floating_tree_id'
          className='cursor-not-allowed block py-2.5 px-0 w-full text-sm text-slate-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none peer'
          placeholder=' '
          value={`TSUE-${id?.count}`}
          readOnly
          required
        />
        <label
          htmlFor='floating_tree_id'
          className='peer-focus:font-medium absolute text-sm text-gray-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          Daraxt ID
        </label>
      </div>
      <div className='relative z-0 w-full mb-6 group'>
        <input
          ref={maintainedByRef}
          type='text'
          name='floating_maintainer'
          id='floating_maintainer'
          className='block py-2.5 px-0 w-full text-sm text-slate-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          placeholder=' '
          required
        />
        <label
          htmlFor='floating_maintainer'
          className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          Mas&apos;ul
        </label>
      </div>
      <div className='grid md:grid-cols-2 md:gap-6'>
        <div className='relative z-0 w-full mb-6 group'>
          <input
            ref={yearOfPlantRef}
            type='number'
            step={1}
            name='floating_year'
            id='floating_year'
            className='block py-2.5 px-0 w-full text-sm text-slate-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            required
          />
          <label
            htmlFor='floating_year'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Ekilgan Yil
          </label>
        </div>
        <div className='relative z-0 w-full mb-6 group'>
          <input
            type='number'
            ref={diameterRef}
            step='0.1'
            name='floating_diameter'
            id='floating_diameter'
            className='block py-2.5 px-0 w-full text-sm text-slate-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            required
          />
          <label
            htmlFor='floating_diameter'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Tana Diametr
          </label>
        </div>
      </div>
      <div className='grid md:grid-cols-2 md:gap-6 gap-y-4'>
        <button
          disabled={adding}
          type='submit'
          className='relative flex h-9 items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 cursor-pointer '
        >
          <span className='relative text-sm  text-white disabled:cursor-not-allowed'>
            Qo&apos;shish
          </span>
        </button>
        <button
          onClick={() => signOut(getAuth())}
          type='submit'
          className='relative flex h-9 items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 cursor-pointer '
        >
          <span className='relative text-sm text-white'>Googledan chiqish</span>
        </button>
      </div>
    </form>
  );
};

export default AddingForm;
