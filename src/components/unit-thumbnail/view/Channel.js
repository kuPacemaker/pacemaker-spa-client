import React from 'react';

import './Channel.scss';

const Channel = ({ title, detail, image }) => {
  return (
    <div className="Channel">
      <img className="ChannelImage" src={image} alt="" />
      <div className="ChannelContext">
        <div className="ChannelTitle">{title}</div>
        <div className="ChannelDetail">{detail}</div>
      </div>
    </div>
  );
};

export default Channel;
