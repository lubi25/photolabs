import React from 'react';
import './App.scss';
import PhotoList from './components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

const App = () => {
  return (
    <div className="App">
      <TopNavigation />
      <PhotoList />
    </div>
  );
};

export default App;
