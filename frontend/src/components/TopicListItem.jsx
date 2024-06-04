import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { id, slug, title } = props.topic;

  return (
    <div className="topic-list__item" onClick={() => props.onClick(id)}>
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
