import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [isFavourite, setIsFavourite] = useState(false);
  const handleClick = () => setIsFavourite(prev => !prev);
  
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <button onClick={handleClick}>
          <FavIcon selected={isFavourite} />
        </button>
      </div>
    </div>
  );
}

export default PhotoFavButton;