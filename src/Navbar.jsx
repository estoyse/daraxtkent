import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from './main';
import { getAuth } from 'firebase/auth';

const Navbar = () => {
  const auth = getAuth();
  return (
    <div className='navbar'>
      <div className='logo'>Urban Tree Managment</div>
      <div className='nav-links'>
        {auth ? (
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
