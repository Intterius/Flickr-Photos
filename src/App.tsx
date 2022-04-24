import { useState } from 'react';
import { checkEmptySpaces } from './utils/checkEmptySpaces';
import { useInfiniteScroll } from './hooks/useInfiniteSroll';
import PhotosContainer from './components/PhotosContainer';
import Layout from './layout';
import SearchBar from './components/SearchBar';
import ErrorComponent from './components/ErrorComponent';
import Spinner from './components/Spinner';
import WelcomeBanner from './components/WelcomeBanner';

const App = () => {
  const [queryText, setQueryText] = useState('');
  const { fetchedData, isLoading, errorMessage } = useInfiniteScroll(queryText);

  return (
    <Layout>
      <SearchBar queryText={queryText} setQueryText={setQueryText} />
      <PhotosContainer photos={fetchedData} />
      {!checkEmptySpaces(queryText) && <WelcomeBanner />}
      {isLoading && <Spinner />}
      {errorMessage && <ErrorComponent errorMsg={errorMessage} />}
    </Layout>
  );
};

export default App;
