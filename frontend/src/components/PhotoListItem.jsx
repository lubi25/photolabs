import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photo, toggleFavorite, isFavorite, openModal }) => {
  const { id, location: { city, country }, urls: { regular }, user: { username, name, profile } } = photo;
  
  return (
    <div className="photo-list__item">
      <PhotoFavButton
        photoId={id}
        isFavorite={isFavorite}
        toggleFavorite={() => toggleFavorite(id)} 
      />
      
      <img src={regular} alt={`${username}'s photo`} className="photo-list__image" onClick={() => openModal(photo)}/>
      
      <div className="photo-list__user-details">
        <img src={profile} alt={`${username}'s profile`} className="photo-list__user-profile" />
        <section className="photo-list__user-info">
          <div>{name}</div>
          <div className="photo-list__user-location">{city}, {country}</div>
        </section>
      </div>
    </div>
  );
};

export default PhotoListItem;
