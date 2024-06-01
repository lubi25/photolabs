import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from './PhotoList';
import PhotoListItem from './PhotoListItem';

const PhotoDetailsModal = ({ favorites, selectedPhoto, toggleFavorite, onClose }) => {
  const { id, location: { city, country }, urls: { regular }, user: { username, name, profile }, similar_photos } = selectedPhoto;
  
  const similarPhotosEntries = Object.values(similar_photos || {});

  const isFavorite = favorites.includes(id);
  console.log(isFavorite);

  return (
    <div className="photo-details-modal">
      <button onClick={onClose} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>

    <div className="photo-details-modal__images">
      <article className='photo-details-modal__image'>
        <PhotoListItem 
          photo={selectedPhoto} 
          toggleFavorite={toggleFavorite} 
          isFavorite={isFavorite} 
          openModal={() => {}} 
        />
      </article>


      {/* <article className='photo-details-modal__images'>
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
      </article> */}

      <div className="photo-details-modal__header">Similar Photos</div>

      <PhotoList photoData={similarPhotosEntries} toggleFavorite={toggleFavorite} favorites={favorites} openModal={() => {}}  />
    </div>
    </div>
  );
};

export default PhotoDetailsModal;
