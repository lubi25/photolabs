import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { id, title } = props.topic;

  return (
    <div className="topic-list__item" onClick={() => props.handleTopicClick(id)}>
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
