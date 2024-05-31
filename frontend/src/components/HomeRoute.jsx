import React, { useState } from "react";
import "../styles/HomeRoute.scss";
import PhotoList from './PhotoList';
import TopNavigation from './TopNavigationBar';

const HomeRoute = (props) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (photoId) => {
    setFavorites(prevFavorites =>
      prevFavorites.includes(photoId)
        ? prevFavorites.filter(id => id !== photoId)
        : [...prevFavorites, photoId]
    );
  };

  return (
    <div className="HomeRoute">
      <TopNavigation 
        topicData={props.topicData} 
        favorites={favorites} 
      />
      <PhotoList 
        photoData={props.photoData} 
        favorites={favorites}
        toggleFavorite={toggleFavorite} 
        openModal={props.openModal}
      />
    </div>
  );
};

export default HomeRoute;