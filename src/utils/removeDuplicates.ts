import { IFlickrPhoto } from 'src/Models/flickrResponse';

export const removeDuplicates = (arr: IFlickrPhoto[]) => {
  return arr.filter(
    (photo, index, array) =>
      array.findIndex((wantedPhotot) => wantedPhotot.id === photo.id) === index
  );
};
