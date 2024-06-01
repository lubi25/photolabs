import React, { useState } from 'react';
import './App.scss';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './components/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const { 
    state,
    updateToFavPhotoIds,
    setPhotoData,
    setTopicData,
    setOpenModal,
    setSelectedPhoto,
  } = useApplicationData();

  const { photoData, topicData, openModal, selectedPhoto, favorites } = state;

  const isCurrentPhotoFavorited = selectedPhoto ? favorites.includes(selectedPhoto.id) : false;

  return (
    <div className="App">
      <HomeRoute 
        photoData={photoData} 
        topicData={topicData} 
        openModal={setPhotoSelected} 
        closeModal={onClosePhotoDetailsModal}
        favorites={favorites} 
        toggleFavorite={updateToFavPhotoIds} 
      />
      {openModal && 
        <PhotoDetailsModal
          onClose={onClosePhotoDetailsModal}
          selectedPhoto={selectedPhoto}
          similarPhotos={photoData} 
          isFavorite={isCurrentPhotoFavorited} 
          toggleFavorite={updateToFavPhotoIds}
        /> 
      }
    </div>
  );
};

export default App;
