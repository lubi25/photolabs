import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ photoId, toggleFavorite, isFavorite }) => { 

  // Handles the click behaviour when favoriting a photo:
  const handleClick = () => {
    toggleFavorite(photoId);
  };
  
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <button onClick={handleClick}>
          <FavIcon selected={isFavorite}
          />
        </button>
      </div>
    </div>
  );
}

export default PhotoFavButton;