import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

const Login = ({ user }) => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const handleClick = () => {
    signInWithPopup(auth, provider).catch(error => {
      console.error(error);
    });
  };
  return (
    <div
      className={`w-full h-[100vh] flex items-center justify-center flex-col absolute bg-white dark:bg-gray-900 z-10 ${
        user ? 'hidden' : ''
      }`}
    >
      <button
        onClick={handleClick}
        className='relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max'
      >
        <span className='relative text-lg text-white'>
          Continue With Google
        </span>
      </button>
    </div>
  );
};

export default Login;
