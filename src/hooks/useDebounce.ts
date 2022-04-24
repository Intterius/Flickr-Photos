import { checkEmptySpaces } from './../utils/checkEmptySpaces';
import { IFlickrPhoto, IFlickrResponse } from './../Models/flickrResponse';
import { useEffect, useState, useCallback } from 'react';
import { removeDuplicates } from 'src/utils/removeDuplicates';
import http from 'src/api/http';

export const useDebounce = (searchText: string, page: number) => {
  const [fetchedData, setFetchedData] = useState<IFlickrPhoto[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [availablePages, setAvailablePages] = useState(1);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const {
        data: {
          photos: { photo, pages },
        },
      }: { data: { photos: IFlickrResponse } } = await http.get(
        searchText,
        page
      );

      photo.length === 0
        ? setErrorMessage(
            'It looks like there aren’t many great matches for your search'
          )
        : setErrorMessage('');

      setAvailablePages(pages);
      setFetchedData((prevState) => removeDuplicates([...prevState, ...photo]));
      setIsLoading(false);
    } catch (error) {
      const { message } = error as Error;
      setAvailablePages(0);
      setIsLoading(false);
      setErrorMessage(message);
    }
  }, [page, searchText]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (checkEmptySpaces(searchText)) {
        fetchData();
      }
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchText, page, fetchData]);

  useEffect(() => {
    if (checkEmptySpaces(searchText)) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }

    setFetchedData([]);
    setErrorMessage('');
  }, [searchText]);

  return { fetchedData, isLoading, errorMessage, availablePages };
};
