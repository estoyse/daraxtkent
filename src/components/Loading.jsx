import { StyledLoader } from '../styles/styles';

const Loading = ({ isLoading }) => {
  return (
    <StyledLoader className={isLoading ? 'loader' : 'hidden loader'}>
      <div className='square'></div>
    </StyledLoader>
  );
};

export default Loading;
