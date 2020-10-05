import React from 'react';

import './ChannelThumbnail.scss';

const ChannelThumbnail = ({ title, detail, image, onClickHandler }) => {
  return (
    <div className="ChannelThumbnail" onClick={onClickHandler}>
      <img className="ChannelImage" src={image} alt="" />
      <div className="ChannelContext">
        <div className="ChannelTitle">{title}</div>
        <div className="ChannelDetail">{detail}</div>
      </div>
    </div>
  );
};

export default ChannelThumbnail;
