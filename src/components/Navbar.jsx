import { Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavbarStyles } from '../styles/styles';

const Navbar = ({ modalOpen, setModalOpen }) => {
  const auth = getAuth();
  const [user] = useAuthState(auth);
  return (
    <NavbarStyles>
      <Link to='/' className='link'>
        Daraxtkent
      </Link>
      <div className='nav-links'>
        <Link onClick={() => setModalOpen(!modalOpen)} className='link'>
          {user ? "Daraxt Qo'shish" : 'Login'}
        </Link>
      </div>
    </NavbarStyles>
  );
};

export default Navbar;
