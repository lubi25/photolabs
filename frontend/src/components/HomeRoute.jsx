import React from "react";
import "../styles/HomeRoute.scss";
import PhotoList from './PhotoList';
import TopNavigation from './TopNavigationBar';

const HomeRoute = (props) => {
  return (
    <div className="HomeRoute">
      <TopNavigation topicData={props.topicData} />
      <PhotoList photoData={props.photoData} />
    </div>
  );
};

export default HomeRoute;