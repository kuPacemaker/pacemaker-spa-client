import React from 'react';
import UnitThumbnail from 'components/unit-thumbnail';
import arrow_left from 'resources/images/icon/arrow-left.png';
import arrow_down from 'resources/images/icon/arrow-down.png';

import plus from 'resources/images/icon/plus.png';

import './Channel.scss';

const Channel = ({
  channelId,
  type,
  title,
  detail,
  owner,
  image,
  units,
  channelCode,
  runners,
}) => {
  return (
    <div className="Channel">
      <div className="TopBar">
        <img className="ArrowLeft" src={arrow_left} alt="" />
      </div>
      <div className="ChannelInformationBar">
        <div className="ChannelTitle">{title}</div>
        <div className="ChannelDetail">{detail}</div>
        <div className="ChannelOwner">{owner}</div>
      </div>
      <div className="ChannelTabBar">
        <div className="Tab ShowChannelCode">CHANNEL CODE</div>
        <div className="Tab ShowUnit">UNIT</div>
        <div className="Tab ShowRunnerList">RUNNER LIST</div>
        <div className="Tab ShowStatistics">STATISTICS</div>
      </div>
      <div className="Context">
        {units.map((unit, index) => (
          <div key={index} className="UnitLine">
            <UnitThumbnail
              channel={channelId}
              id={unit.id}
              type={type}
              title={unit.title}
              state={unit.state}
            />
          </div>
        ))}
      </div>
      <div className="FloatingIconSet">
        <img className="Icon Plus" src={plus} alt="" />
        <img className="Icon ArrowDown" src={arrow_down} alt="" />
      </div>
      <div className="ImageContainer">
        <img className="ChannelImage" src={image} alt="" />
      </div>
    </div>
  );
};

export default Channel;
