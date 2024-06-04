import React, { useState } from "react";
import "../styles/HomeRoute.scss";
import PhotoList from './PhotoList';
import TopNavigation from './TopNavigationBar';

const HomeRoute = ({ 
  topicData, 
  photoData,
  openModal, 
  closeModal, 
  favorites, 
  toggleFavorite, 
  photosByTopic, 
  setSelectedTopic,
}) => {

  const handleTopicClick = (topicId) => {
    setSelectedTopic(topicId);
  }

  return (
    <div className="home-route">
      <TopNavigation 
        topicData={topicData} 
        favorites={favorites}
        handleTopicClick={handleTopicClick}
      />
      <PhotoList 
        photoData={photoData} 
        favorites={favorites}
        toggleFavorite={toggleFavorite} 
        openModal={openModal}
        closeModal={closeModal}
        photosByTopic={photosByTopic}
      />
    </div>
  );
};

export default HomeRoute;