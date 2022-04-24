import { useEffect, useState, useCallback } from 'react';
import { useDebounce } from './useDebounce';

export const useInfiniteScroll = (queryText: string) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { fetchedData, isLoading, errorMessage, availablePages } = useDebounce(
    queryText,
    currentPage
  );
  const scrollHandler = useCallback(
    (event: Event) => {
      const target = event.target as Document;
      if (
        target.documentElement.scrollHeight -
          target.documentElement.scrollTop ===
          target.documentElement.clientHeight &&
        currentPage < availablePages
      ) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    },
    [currentPage, availablePages]
  );

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [availablePages, currentPage, scrollHandler]);

  return { fetchedData, isLoading, errorMessage };
};
