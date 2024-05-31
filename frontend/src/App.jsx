import React, { useState } from 'react';
import './App.scss';
import HomeRoute from './components/HomeRoute';
import photos from './mocks/photos.js';
import topics from './mocks/topics';
import PhotoDetailsModal from './components/PhotoDetailsModal';

const App = () => {
  const [photoData, setPhotoData] = useState(photos);
  const [topicData, setTopicData] = useState(topics);
  const [openModal, setOpenModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleOpenModal = (photo) => {
    setSelectedPhoto(photo);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (photoId) => {
    setFavorites(prevFavorites =>
      prevFavorites.includes(photoId)
        ? prevFavorites.filter(id => id !== photoId)
        : [...prevFavorites, photoId]
    );
  };

  const isCurrentPhotoFavorited = selectedPhoto ? favorites.includes(selectedPhoto.id) : false;

  return (
    <div className="App">
      <HomeRoute 
        photoData={photoData} 
        topicData={topicData} 
        openModal={handleOpenModal} 
        closeModal={handleCloseModal}
        favorites={favorites} 
        toggleFavorite={toggleFavorite} 
      />
      {openModal && 
        <PhotoDetailsModal
          onClose={handleCloseModal}
          selectedPhoto={selectedPhoto}
          similarPhotos={photoData} 
          isFavorite={isCurrentPhotoFavorited} 
          toggleFavorite={toggleFavorite}
        /> 
        }
    </div>
  );
};

export default App;
