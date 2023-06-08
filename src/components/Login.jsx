import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { StyledLogin } from '../styles/styles';

const Login = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const handleClick = () => {
    signInWithPopup(auth, provider).catch(error => {
      console.error(error);
    });
  };
  return (
    <StyledLogin>
      <button onClick={handleClick}>Continue With Google</button>
    </StyledLogin>
  );
};

export default Login;
