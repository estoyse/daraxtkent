import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const Navbar = () => {
  const auth = getAuth();
  const [user] = useAuthState(auth);
  return (
    <div className='navbar'>
      <div className='logo'>Daraxtkent</div>
      <div className='nav-links'>
        {user ? (
          <Link className='nav-link' to='/admin'>
            Daraxt Qo'shish
          </Link>
        ) : (
          <Link to={'/login'} className='nav-link'>
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
