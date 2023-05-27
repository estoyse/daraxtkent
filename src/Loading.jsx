import React from 'react';

const Loading = ({ isLoading }) => {
  return (
    <div className={isLoading ? 'loader' : 'loader hidden'}>
      <div className='justify-content-center jimu-primary-loading'></div>
    </div>
  );
};

export default Loading;
