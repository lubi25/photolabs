import React from "react";
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
  setSelectedTopic, 
}) => {

  // Handles the click behaviour when selecting a topic:
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
      />
    </div>
  );
};

export default HomeRoute;