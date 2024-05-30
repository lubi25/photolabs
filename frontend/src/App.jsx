import React, {useState} from 'react';
import './App.scss';
import HomeRoute from './components/HomeRoute';
import photos from './mocks/photos.js';
import topics from './mocks/topics';

const App = () => {
  const [photoData, setPhotoData] = useState(photos);
  const [topicData, setTopicData] = useState(topics);

  return (
    <div className="App">
      <HomeRoute photoData={photoData} topicData={topicData} />
    </div>
  );
};

export default App;
