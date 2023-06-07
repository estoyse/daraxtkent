import { useAuthState } from 'react-firebase-hooks/auth';
import { StyledModal } from './styles/styles';
import { getAuth } from 'firebase/auth';
import AddingForm from './components/AddingForm';
import Login from './components/Login';

const Modal = ({
  setModalOpen,
  modalOpen,
  placemarkCoords,
  setPlacemarkCoords,
}) => {
  const [user] = useAuthState(getAuth());

  return (
    <StyledModal className={modalOpen ? 'open' : ''}>
      {user ? (
        <AddingForm
          setModalOpen={setModalOpen}
          placemarkCoords={placemarkCoords}
          setPlacemarkCoords={setPlacemarkCoords}
        />
      ) : (
        <Login />
      )}
    </StyledModal>
  );
};

export default Modal;
