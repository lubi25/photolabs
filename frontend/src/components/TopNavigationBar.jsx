import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const isFavPhotoExist = () => {
    return props.favorites.length > 0;
  }

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topicData={props.topicData} onTopicClick={props.handleTopicClick} />
      <FavBadge isFavPhotoExist={isFavPhotoExist()} />
    </div>
  )
}

export default TopNavigation;