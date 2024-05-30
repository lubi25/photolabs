import React from "react";
import "../styles/HomeRoute.scss";
import PhotoList from './PhotoList';
import TopNavigation from './TopNavigationBar';

const HomeRoute = () => {
  return (
    <div className="HomeRoute">
      <TopNavigation />
      <PhotoList />
    </div>
  );
};

export default HomeRoute;