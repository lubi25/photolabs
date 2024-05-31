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

  return (
    <div className="App">
      <HomeRoute 
        photoData={photoData} 
        topicData={topicData} 
        openModal={handleOpenModal} 
        closeModal={handleCloseModal}
      />
      {openModal && 
      <PhotoDetailsModal
        onClose={handleCloseModal}
        photoData={selectedPhoto} />}
    </div>
  );
};

export default App;
