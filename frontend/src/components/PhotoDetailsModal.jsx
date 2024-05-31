import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from './PhotoFavButton';

const PhotoDetailsModal = ({ photoData, toggleFavorite, isFavorite, onClose }) => {
  const { id, location: { city, country }, urls: { regular }, user: { username, name, profile } } = photoData;
  
  return (
    <div className="photo-details-modal">
      <button onClick={onClose} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <article className='photo-details-modal__images'>
      <PhotoFavButton
        photoId={id}
        isFavorite={isFavorite}
        toggleFavorite={() => toggleFavorite(id)}
      />
      
      <img src={regular} alt={`${username}'s photo`} className="photo-details-modal__image" />
      
      <div className="photo-details-modal__photographer-details">
        <img src={profile} alt={`${username}'s profile`} className="photo-details-modal__photographer-profile" />
        <section className="photo-details-modal__photographer-info">
          <div>{name}</div>
          <div className="photo-details-modal__photographer-location">{city}, {country}</div>
        </section>
      </div>

      <div className="photo-details-modal__header">Similar Photos</div>
      </article>
    </div>
  );
};

export default PhotoDetailsModal;
