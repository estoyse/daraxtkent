import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavbarStyles } from './styles/styles';

const Navbar = () => {
  const auth = getAuth();
  const [user] = useAuthState(auth);
  return (
    <NavbarStyles>
      <Link to='/' className='link'>
        Daraxtkent
      </Link>
      <div className='nav-links'>
        {user ? (
          <Link className='link' to='/admin'>
            Daraxt Qo'shish
          </Link>
        ) : (
          <Link to={'/login'} className='link'>
            Login
          </Link>
        )}
      </div>
    </NavbarStyles>
  );
};

export default Navbar;
