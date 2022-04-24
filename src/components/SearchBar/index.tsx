import { ChangeEvent } from 'react';
import classes from './style.module.scss';
import searchIcon from 'src/assets/icons/search-icon.svg';

interface IProps {
  queryText: string;
  setQueryText: (value: string) => void;
}

const SearchBar: React.FC<IProps> = ({ queryText, setQueryText }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setQueryText(value);
  };

  return (
    <div className={classes.input_box}>
      <img src={searchIcon} alt='' className={classes.search_icon} />
      <input
        type='text'
        placeholder='Search...'
        value={queryText}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
