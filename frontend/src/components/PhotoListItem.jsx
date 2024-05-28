import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { id, location: { city, country }, imageSource, username, profile } = props.photo;
  
  return (
    <div className="photo-list__item">
      <img src={imageSource} alt={`${username}'s photo`} className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={profile} alt={`${username}'s profile`}  className="photo-list__user-profile" />
        <section className="photo-list__user-info">
          <div>{username}</div>
          <div className="photo-list__user-location">{city}, {country}</div>
        </section>
      </div>
    </div>
  )
};

export default PhotoListItem;
