import React from "react";
import "../styles/HomeRoute.scss";
import PhotoList from './PhotoList';
import TopNavigation from './TopNavigationBar';

const HomeRoute = ({photoData, topicData}) => {
  return (
    <div className="HomeRoute">
      <TopNavigation topicData={topicData} />
      <PhotoList photoData={photoData} />
    </div>
  );
};

export default HomeRoute;