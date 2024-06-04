import { useReducer, useState, useEffect } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  SELECT_TOPIC: 'SELECT TOPIC',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
}

const initialState = {
  photoData: [],
  topicData: [],
  openModal: false,
  selectedPhoto: null,
  favorites: [],
  selectedTopic: null,
  photosByTopic: []
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favorites: state.favorites.filter(id => id !== action.payload)
      };
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload
      };
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload
      }
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        openModal: action.payload
      };
    case ACTIONS.SELECT_TOPIC:
      return {
        ...state,
        selectedTopic: action.payload
      };
    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return {          
        ...state,
        photosByTopic: action.payload
      };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

function useApplicationData() {

  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
      .then(res => res.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
    }, []
  );

  useEffect(() => {
    fetch('http://localhost:8001/api/topics')
      .then(res => res.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
    }, []
  );

  useEffect(() => {
    if (state.selectedTopicId) {
      fetchPhotosByTopic(state.selectedTopicId);
    }
  }, [state.selectedTopicId]);

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

  const setSelectedTopic = (topicId) => {
    dispatch({ type: ACTIONS.SET_SELECTED_TOPIC, payload: topicId });
  };

  const fetchPhotosByTopic = (topicId) => {
    fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
      .then(res => res.json())
      .then((data) => dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data }))
      .catch(error => {
        console.error('Error fetching photos by topic:', error);
      });
  };


  return {
    state,
    updateToFavPhotoIds,
    setPhotoData,
    setTopicData,
    setOpenModal,
    setSelectedPhoto,
    setSelectedTopic,
    fetchPhotosByTopic
  }
}

export default useApplicationData;