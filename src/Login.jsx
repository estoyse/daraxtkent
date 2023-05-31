import React from 'react';
import { signInWithPopup, GoogleAuthProvider, getAuth } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { LoginStyles } from './styles/styles';

const Login = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const [user] = useAuthState(auth);

  const handleClick = () => {
    signInWithPopup(auth, provider).catch(error => {
      console.error(error);
    });
  };

  return (
    <LoginStyles className='login'>
      <button onClick={handleClick}>Continue With Google</button>
      {user && <Navigate to='/' />}
    </LoginStyles>
  );
};

export default Login;
