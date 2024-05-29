import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [favorite, setFavorite] = useState("inactive");
  const handleClick = () => setFavorite(favorite === "inactive" ? "active" : "inactive")
  
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <button onClick={handleClick} className='FavIcon'>
          <FavIcon selected={favorite === "active"} />
        </button>
      </div>
    </div>
  );
}

export default PhotoFavButton;