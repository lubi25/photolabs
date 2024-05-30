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
      <TopNavigation topicData={props.topicData} />
      <PhotoList 
        photoData={props.photoData} 
        favorites={favorites}
        onToggleFavorites={toggleFavorite} />
    </div>
  );
};

export default HomeRoute;