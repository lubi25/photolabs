import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from './PhotoFavButton';
import PhotoList from './PhotoList';

const PhotoDetailsModal = ({ photoInfo, toggleFavorite, isFavorite, onClose, similarPhotos }) => {
  const { id, location: { city, country }, urls: { regular }, user: { username, name, profile }, similar_photos } = photoInfo;
  
  const similarPhotosArray = Object.values(similar_photos || {});

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
      </article>

      <article className='photo-details-modal__images'>
        <div className="photo-details-modal__header">Similar Photos</div>

        {similarPhotosArray.map((photo, index) => (
          <div key={index} className="photo-details-modal__similar-item"> 
            <img src={photo.urls.regular} alt={`Similar to ${username}`} className="photo-details-modal__similar-image" />
            

            {/* <div className="photo-list__item" onClick={() => openModal(photo)}>
      <PhotoFavButton
        photoId={id}
        isFavorite={isFavorite} // Use the isFavorite prop directly
        toggleFavorite={() => toggleFavorite(id)} // Ensure you're calling toggleFavorite correctly
      />
      
      <img src={regular} alt={`${username}'s photo`} className="photo-list__image" />
      
      <div className="photo-list__user-details">
        <img src={profile} alt={`${username}'s profile`} className="photo-list__user-profile" />
        <section className="photo-list__user-info">
          <div>{name}</div>
          <div className="photo-list__user-location">{city}, {country}</div>
        </section>
      </div>
    </div> */}
          </div>
        ))}

      </article>
    </div>
  );
};

export default PhotoDetailsModal;
