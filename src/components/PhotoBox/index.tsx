import { IFlickrPhoto } from 'src/Models/flickrResponse';
import { useState } from 'react';
import classes from './style.module.scss';
import noPhoto from 'src/assets/images/no-image.png';

type TPhotoInfo = {
  photo: IFlickrPhoto;
};

const PhotoBox: React.FC<TPhotoInfo> = ({
  photo: { secret, farm, server, id, title },
}) => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  const handleImageNewTabClick = () => {
    window.open(
      `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`,
      '_blank'
    );
  };

  return (
    <div
      className={classes.image_box}
      title={title}
      onClick={handleImageNewTabClick}
    >
      {isImageLoading && <img src={noPhoto} alt='' />}
      <img
        style={{ display: isImageLoading ? 'none' : 'block' }}
        src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`}
        onLoad={handleImageLoad}
        alt={title}
      />
    </div>
  );
};

export default PhotoBox;
