import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { id, location: { city, country }, imageSource, username, profile } = props;
  
  return (
    <div className="photo-list-item">
      <img src={imageSource} alt={`${username}'s photo`} />
      <img src={profile} alt={`${username}'s profile`} />
      <p>{username}</p>
      <p>{city}, {country}</p>
    </div>
  )
};

export default PhotoListItem;
