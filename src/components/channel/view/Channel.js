import React from 'react';

import arrow_left from 'resources/images/icon/arrow-left.png';
import arrow_down from 'resources/images/icon/arrow-down.png';
import plus from 'resources/images/icon/plus.png';

import './Channel.scss';

const Channel = ({
  title,
  detail,
  owner,
  image,
  channelCode,
  units,
  runners,
  channelId,
}) => {
  return (
    <div className="ChannelContext">
      <div className="TopBar">
        <img className="ArrowLeft" src={arrow_left} alt="" />
      </div>
      <div className="ChannelInformationBar">
        <div className="ChannelTitle">{title}</div>
        <div className="ChannelDetail">{detail}</div>
        <div className="ChannelOwner">owner</div>
      </div>
      <div className="ChannelTabBar">
        <div className="Tab ShowChannelCode">CHANNEL CODE</div>
        <div className="Tab ShowUnit">UNIT</div>
        <div className="Tab ShowRunnerList">RUNNER LIST</div>
        <div className="Tab ShowStatistics">STATISTICS</div>
      </div>
      <div className="Context"></div>
      <div className="FloatingIconSet">
        <img className="Icon Plus" src={plus} alt="" />
        <img className="Icon ArrowDown" src={arrow_down} alt="" />
      </div>
      <img className="ChannelImage" src={image} alt="" />
    </div>
  );
};

export default Channel;
