import { ThreeDots } from 'react-loader-spinner';
import { LoaderSpinner } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderSpinner>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#3f51b5"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderSpinner>
  );
};
