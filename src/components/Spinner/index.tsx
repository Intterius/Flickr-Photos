import classes from './style.module.scss';
import spinner from 'src/assets/icons/spinner.svg';

const Spinner = () => {
  return (
    <div className={classes.spinner_box}>
      <img src={spinner} height={100} width='auto' alt='spinner' />
    </div>
  );
};

export default Spinner;
