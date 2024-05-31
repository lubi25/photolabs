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

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <div className="App">
      <HomeRoute 
        photoData={photoData} 
        topicData={topicData} 
        openModal={handleOpenModal} 
      />
      {openModal && <PhotoDetailsModal />}
    </div>
  );
};

export default App;
