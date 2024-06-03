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



  const onClosePhotoDetailsModal = () => {
    setOpenModal(false);
  };

  const setPhotoSelected = (photo) => {
    setSelectedPhoto(photo);
    setOpenModal(true);
  };

  return (
    <div className="App">
      <HomeRoute 
        photoData={state.photoData} 
        topicData={state.topicData} 
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
          toggleFavorite={updateToFavPhotoIds}
          favorites={favorites}
        /> 
      }
    </div>
  );
};

export default App;
