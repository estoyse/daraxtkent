import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import AddingForm from './AddingForm';
import Login from './Login';

const Modal = ({
  setModalOpen,
  modalOpen,
  placemarkCoords,
  setPlacemarkCoords,
}) => {
  const [user] = useAuthState(getAuth());

  return (
    <div
      className={`bg-[#fffe] dark:bg-[#0f172a] fixed top-0 right-0 z-10 mt-[52px] w-full px-12 md:pb-[50px] md:px-0 h-full md:w-[350px] transition-transform duration-200 ease-in md:mt-[68px] ${
        modalOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {user ? (
        <AddingForm
          setModalOpen={setModalOpen}
          placemarkCoords={placemarkCoords}
          setPlacemarkCoords={setPlacemarkCoords}
        />
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Modal;
