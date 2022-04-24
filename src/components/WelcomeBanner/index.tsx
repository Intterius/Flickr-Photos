import happyIcon from 'src/assets/icons/happy-icon.svg';
import 'src/scss/searchStatus.scss';

const WelcomeBanner = () => {
  return (
    <div className='search_status_container'>
      <img src={happyIcon} alt='error-icon' height={100} width='auto' />
      <h1>Hello there!</h1>
      <p>To start searching images, please insert a keyword.</p>
    </div>
  );
};

export default WelcomeBanner;
