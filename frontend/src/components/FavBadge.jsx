import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

// Displays a notification on the top navigation bar when any image is favorited

const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={isFavPhotoExist} />
    </div>
  ) 
};

export default FavBadge;