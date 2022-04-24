import React from 'react';
import { IFlickrPhoto } from 'src/Models/flickrResponse';
import PhotoBox from '../PhotoBox';
import classes from './style.module.scss';

interface IProps {
  photos: IFlickrPhoto[];
}

const PhotosContainer: React.FC<IProps> = ({ photos }) => {
  if (!photos.length) {
    return null;
  }
  return (
    <div className={classes.images_container}>
      <div className={classes.content}>
        {photos.map((photo, index) => (
          <PhotoBox key={`${photo.id}_${index}`} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default PhotosContainer;
