import React from 'react';

import './Unit.scss';

const Unit = ({ type, channel, id }) => {
  return (
    <div className="Unit">
      <div className="type">{type}</div>
      <div className="channel">{channel}</div>
      <div className="id">{id}</div>
    </div>
  );
};

export default Unit;
