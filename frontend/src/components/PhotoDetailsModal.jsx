import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from './PhotoFavButton';
import PhotoList from './PhotoList';

const PhotoDetailsModal = ({ selectedPhoto, toggleFavorite, isFavorite, onClose }) => {
  const { id, location: { city, country }, urls: { regular }, user: { username, name, profile }, similar_photos } = selectedPhoto;
  
  const similarPhotosEntries = Object.entries(similar_photos || {});

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

      <div className="photo-details-modal__header">Similar Photos</div>

      <article className='photo-details-modal__images'>
        <div className="photo-details-modal__similar-photos">
          {similarPhotosEntries.map(([key, photo]) => (
            <div key={key} className="photo-details-modal__similar-item">
              <div className="photo-list__item">
                <PhotoFavButton
                  photoId={photo.id}
                  isFavorite={isFavorite}
                  toggleFavorite={() => toggleFavorite(photo.id)}
                />

                <img src={photo.urls.regular} alt={`Similar to ${username}`} className="photo-list__image" />


                {/* <div className="photo-list__user-details">
                  <img src={photo.user.profile_image.medium} alt={`${photo.user.username}'s profile`} className="photo-list__user-profile" />
                  <section className="photo-list__user-info">
                    <div>{photo.user.name}</div>
                    <div className="photo-list__user-location">{photo.location.city}, {photo.location.country}</div>
                  </section>
                </div> */}
              </div>
            </div>
          ))}
        </div>

      </article>
    </div>
  );
};

export default PhotoDetailsModal;
