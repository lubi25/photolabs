import { useState } from "react";
import photos from '../mocks/photos';
import topics from '../mocks/topics';

function useApplicationData() {
  const [photoData, setPhotoData] = useState(photos);
  const [topicData, setTopicData] = useState(topics);
  const [openModal, setOpenModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const updateToFavPhotoIds = (photoId) => {
    setFavorites(prevFavorites =>
      prevFavorites.includes(photoId)
        ? prevFavorites.filter(id => id !== photoId)
        : [...prevFavorites, photoId]
    );
  };

  const setPhotoSelected = (photo) => {
    setSelectedPhoto(photo);
    setOpenModal(true);
  };

  const onClosePhotoDetailsModal = () => {
    setOpenModal(false);
  };

  return { 
    state: { photoData, topicData, openModal, selectedPhoto, favorites },
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,  
  }
}

export default useApplicationData;