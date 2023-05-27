import React, { useContext } from 'react';
import { signInWithPopup, GoogleAuthProvider, getAuth } from 'firebase/auth';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const handleClick = () => {
    signInWithPopup(auth, provider).catch(error => {
      console.error(error);
    });
  };

  return (
    <div className='login'>
      <button className='btn' onClick={handleClick}>
        Continue With Google
      </button>
      {auth && <Navigate to='/' />}
    </div>
  );
};

export default Login;
