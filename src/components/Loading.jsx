const Loading = ({ isLoading }) => {
  return (
    <div
      className={`absolute top-0 bottom-0 left-0 right-0 z-50 dark:bg-slate-900 bg-white transition-opacity duration-500 ease-in ${
        isLoading
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className='square -indent-[9999em] m-auto absolute right-1/2 top-1/2 animation-delay-80 bg-gray-200 w-4 h-8 animate-loading before:absolute before:top-0 before:bg-gray-200 before:animate-loading before:w-4 before:h-8 before:left-5 before:animation-delay-150 after:absolute after:top-0 after:bg-gray-200 after:animate-loading before: after:w-4 after:h-8 after:-left-5 after:animation-delay-300'></div>
    </div>
  );
};

export default Loading;
