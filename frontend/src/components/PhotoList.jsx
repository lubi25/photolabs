import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photoData, toggleFavorite, favorites, openModal }) => {
  return (
    <ul className="photo-list">
      {photoData.map(photo => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          toggleFavorite={toggleFavorite}
          isFavorite={favorites.includes(photo.id)}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
