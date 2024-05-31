import React, { useState } from "react";
import "../styles/HomeRoute.scss";
import PhotoList from './PhotoList';
import TopNavigation from './TopNavigationBar';

const HomeRoute = ({ topicData, photoData, openModal, favorites, toggleFavorite }) => {

  return (
    <div className="home-route">
      <TopNavigation 
        topicData={topicData} 
        favorites={favorites}
      />
      <PhotoList 
        photoData={photoData} 
        favorites={favorites}
        toggleFavorite={toggleFavorite} 
        openModal={openModal}
      />
    </div>
  );
};

export default HomeRoute;