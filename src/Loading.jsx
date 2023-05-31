import React from 'react';
import { LoaderStyles } from './styles/styles';

const Loading = ({ isLoading }) => {
  return (
    <LoaderStyles className={isLoading ? 'loader' : 'hidden loader'}>
      <div className='square'></div>
    </LoaderStyles>
  );
};

export default Loading;
