import { useReducer, useState } from "react";
import photos from '../mocks/photos';
import topics from '../mocks/topics';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

const initialState = {
  photoData: photos,
  topicData: topics,
  openModal: false,
  selectedPhoto: null,
  favorites: []
}

function reducer(state, action) {
  switch (action.type) {
    case FAV_PHOTO_ADDED:
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    case FAV_PHOTO_REMOVED:
      return {
        ...state,
        favorites: state.favorites.filter(id => id !== action.payload)
      };
    case SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload
      };
    case SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload
      };
    case SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload
      }
    case DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        openModal: action.payload
      };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

function useApplicationData() {
  // const [photoData, setPhotoData] = useState(photos);
  // const [topicData, setTopicData] = useState(topics);
  // const [openModal, setOpenModal] = useState(false);
  // const [selectedPhoto, setSelectedPhoto] = useState(null);
  // const [favorites, setFavorites] = useState([]);

  // const updateToFavPhotoIds = (photoId) => {
  //   setFavorites(prevFavorites =>
  //     prevFavorites.includes(photoId)
  //       ? prevFavorites.filter(id => id !== photoId)
  //       : [...prevFavorites, photoId]
  //   );
  // };

  // const setPhotoSelected = (photo) => {
  //   setSelectedPhoto(photo);
  //   setOpenModal(true);
  // };

  // const onClosePhotoDetailsModal = () => {
  //   setOpenModal(false);
  // };

  // return { 
  //   state: { photoData, topicData, openModal, selectedPhoto, favorites },
  //   updateToFavPhotoIds,
  //   setPhotoSelected,
  //   onClosePhotoDetailsModal,  
  // }

  const [state, dispatch] = useReducer(reducer, initialState);

  const updateToFavPhotoIds = (photoId) => {
    if (state.favorites.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoId });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId });
    }
  };

  const setPhotoData = (photos) => {
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photos });
  };

  const setTopicData = (topics) => {
    dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topics });
  };

  const setOpenModal = (isOpen) => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: isOpen });
  };

  const setSelectedPhoto = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoData,
    setTopicData,
    setOpenModal,
    setSelectedPhoto,
  }
}

export default useApplicationData;