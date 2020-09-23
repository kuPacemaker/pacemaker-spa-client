import React from 'react';

import './ChannelThumbnail.scss';

const ChannelThumbnail = ({ title, detail, image }) => {
  return (
    <div className="ChannelThumbnail">
      <img className="ChannelImage" src={image} alt="" />
      <div className="ChannelContext">
        <div className="ChannelTitle">{title}</div>
        <div className="ChannelDetail">{detail}</div>
      </div>
    </div>
  );
};

export default ChannelThumbnail;
