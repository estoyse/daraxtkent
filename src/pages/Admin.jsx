import { useEffect, useState } from 'react';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  serverTimestamp,
} from 'firebase/firestore';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

import { firestore } from '../main';
import { decimalToDMS } from '../utils';
import Loading from '../components/Loading';
import Swal from 'sweetalert2';
import moment from 'moment';
import Login from '../components/Login';
import { useAuthState } from 'react-firebase-hooks/auth';

const Admin = () => {
  useEffect(
    () =>
      onSnapshot(collection(firestore, 'pending'), snapshot => {
        setPendingTrees(
          snapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      }),
    []
  );

  useEffect(() => {
    const checkAdminStatus = async userEmail => {
      try {
        // Get document reference containing admin emails
        const adminDocRef = doc(firestore, 'admins', 'adminEmails');

        // Get the document snapshot
        const adminDocSnapshot = await getDoc(adminDocRef);

        // Check if the document exists and user email is in the admin list
        if (
          adminDocSnapshot.exists() &&
          adminDocSnapshot.data().emailList.includes(userEmail)
        ) {
          setIsAdmin(true);
        }
      } catch (error) {
        console.error('Error checking admin status:', error);
      }
    };

    // Get the currently signed-in user
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        const userEmail = user.email;
        checkAdminStatus(userEmail);
      }
    });

    // Cleanup function
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const auth = getAuth();
  const [pendingTrees, setPendingTrees] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, loading] = useAuthState(auth);

  const handleInfo = tree => {
    const coordinates = decimalToDMS(tree.coordinates);
    const customPopup = Swal.mixin({
      customClass: {
        htmlContainer: 'alert',
      },
    });
    customPopup.fire({
      title: `<span className='span-block'><b>Daraxt nomi: </b>${tree.name}</span>`,
      showCloseButton: true,
      html: `<p>
        <span className='span-block'>
          <b>Ilmiy Nomi: </b>
          ${tree.scientificName}
        </span>
        <span className='span-block'>
          <b>Ekilgan yili: </b>
          ${tree.yearOfPlant}
        </span>
        <span className='span-block'>
          <b>Daraxt yoshi: </b>
          ${new Date().getFullYear() - tree.yearOfPlant}
        </span>
        <span className='span-block'>
          <b>Mas'ul: </b>
          ${tree.maintainedBy}
        </span>
        <span className='span-block'>
          <b>Daraxt IDsi: </b>
          ${tree.id}
        </span>
        <span className='span-block'>
          <b>Daraxt diametri: </b>
          ${tree.diameter}cm
        </span>
        <span className='span-block'>
          <b>Joylashuvi: </b>
          ${coordinates}
        </span>
        <span className='span-block'>
          <b>Qo'shilgan vaqti: </b>
          ${moment(tree.createdAt.toDate()).format('LLLL')}
        </span>
        <span className='span-block'>
          <b>Kim tomonidan qo'shildi: </b>
          ${tree.userInfo.name} (${tree.userInfo.email})
        </span>
      
      </p>`,
    });
  };
  const handleAction = async tree => {
    Swal.fire({
      title: 'Kerakli buyruqni tanlang: ',
      showDenyButton: true,
      showCancelButton: true,
      cancelButtonText: 'Ortga',
      confirmButtonText: "Xaritaga qo'shish",
      denyButtonText: `O'chirish`,
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Xaritaga Muvaffaqiyatli qo'shildi",
          timer: 3000,
          position: 'bottom',
          icon: 'success',
          showConfirmButton: false,
          timerProgressBar: true,
          toast: true,
        });
        addDoc(collection(firestore, 'trees'), {
          ...tree,
          acceptedTime: serverTimestamp(),
          acceptedBy: user.email,
        }).catch(e => console.log(e));
        deleteDoc(doc(firestore, 'pending', tree.id));
      } else if (result.isDenied) {
        deleteDoc(doc(firestore, 'pending', tree.id));
        Swal.fire({
          title: "Ro'yhatdan o'chirildi",
          timer: 3000,
          position: 'bottom',
          icon: 'info',
          showConfirmButton: false,
          timerProgressBar: true,
          toast: true,
        });
      }
    });
  };
  return (
    <div>
      <Loading isLoading={loading} />
      <Login user={user} />
      <div className='max-w-7xl mx-auto px-6 md:px-12 xl:px-6'>
        <div className='flex justify-between items-center'>
          <h2 className='my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl '>
            Dashboard
          </h2>
          <button
            onClick={() => {
              signOut(auth);
            }}
            className='relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max '
          >
            <span className='relative text-lg text-white'>Sign Out</span>
          </button>
        </div>
        {isAdmin ? (
          <div className='relative overflow-x-auto shadow-md sm:rounded-lg overflow-y-scroll h-[80vh]'>
            <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
              <thead className='sticky top-0 text-xs text-gray-300 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200 overflow-hidden  z-10'>
                <tr>
                  <th scope='col' className='px-6 py-3'>
                    #
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Daraxt nomi
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    ilmiy Nomi
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Joylashuvi
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Qo&apos;shuvchi
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    To&apos;liq ma`lumot
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Tasdiqlash
                  </th>
                </tr>
              </thead>
              <tbody className='overflow-y-scroll'>
                {pendingTrees.length > 0 ? (
                  pendingTrees.map((tree, index) => (
                    <tr
                      key={tree.createdAt}
                      className={`border-b dark:border-gray-700 ${
                        index % 2 === 0
                          ? 'bg-white dark:bg-gray-900'
                          : 'bg-gray-50 dark:bg-gray-800'
                      }`}
                    >
                      <td
                        scope='row'
                        className='px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center'
                      >
                        {index + 1}
                      </td>
                      <th
                        scope='row'
                        className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                      >
                        {tree.name}
                      </th>
                      <td className='px-6 py-4'>{tree.scientificName}</td>
                      <td className='px-6 py-4'>
                        <a
                          href={`https://maps.google.com/?q=${decimalToDMS(
                            tree.coordinates
                          )}&zoom=18`}
                        >
                          {decimalToDMS(tree.coordinates)}
                        </a>
                      </td>
                      <td className='px-6 py-4'>
                        {tree.userInfo.name} ({tree.userInfo.email})
                      </td>
                      <td className='px-6 py-4'>
                        <button
                          className='relative flex h-9 items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 cursor-pointer'
                          onClick={() => handleInfo(tree)}
                        >
                          <span className='relative text-sm  text-white disabled:cursor-not-allowed'>
                            Info
                          </span>
                        </button>
                      </td>
                      <td className='px-6 py-4'>
                        <button
                          className='relative flex h-9 items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 cursor-pointer '
                          onClick={() => handleAction(tree)}
                        >
                          <span className='relative text-sm  text-white   whitespace-nowrap'>
                            ✅|❌
                          </span>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className='text-4xl py-11 text-center' colSpan='7'>
                      Hozircha bo&apos;sh
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Admin;
