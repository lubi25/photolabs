import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { id, location: { city, country }, urls: { regular }, user: { username, name, profile } } = props.photo;
  
  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      
      <img src={regular} alt={`${username}'s photo`} className="photo-list__image" />
      
      <div className="photo-list__user-details">
        <img src={profile} alt={`${username}'s profile`}  className="photo-list__user-profile" />
        <section className="photo-list__user-info">
          <div>{name}</div>
          <div className="photo-list__user-location">{city}, {country}</div>
        </section>
      </div>
    </div>
  )
};

export default PhotoListItem;
