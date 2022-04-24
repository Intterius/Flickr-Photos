import sadIcon from 'src/assets/icons/sad-error-icon.png';
import 'src/scss/searchStatus.scss';

interface IProps {
  errorMsg: string;
}

const ErrorComponent: React.FC<IProps> = ({ errorMsg }) => {
  return (
    <div className='search_status_container'>
      <img src={sadIcon} alt='error-icon' height={100} width='auto' />
      <h1>Oops, something went wrong...</h1>
      <p>{errorMsg}</p>
    </div>
  );
};

export default ErrorComponent;
