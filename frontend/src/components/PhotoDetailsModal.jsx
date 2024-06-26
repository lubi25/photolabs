import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from './PhotoList';
import PhotoListItem from './PhotoListItem';

const PhotoDetailsModal = ({ favorites, selectedPhoto, toggleFavorite, onClose }) => {
  // Destructure values of selected photo:
  const { id, location: { city, country }, urls: { regular }, user: { username, name, profile }, similar_photos } = selectedPhoto;
  
  // Access values of similar photos
  const similarPhotosEntries = Object.values(similar_photos);

  // Check if image is favorited
  const isFavorite = favorites.includes(id);

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
            openModal={() => {}}        // Empty function as another modal cannot be opened within the modal
          />
        </article>

        <div className="photo-details-modal__header">Similar Photos</div>

        <div className="photo-details-modal__similar-photos">
          <PhotoList 
            photoData={similarPhotosEntries} 
            toggleFavorite={toggleFavorite} 
            favorites={favorites} 
            openModal={() => {}}        // Empty function as another modal cannot be opened within the modal
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
