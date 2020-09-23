import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';

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
  const [state, setState] = useState({ tab: 'units', isBottom: false });
  const history = useHistory();
  const context = useRef(null);

  const changeTab = (name) => () => {
    setState({ ...state, tab: name });
  };
  const onScrollObserver = (ref) => () => {
    const target = ref.current;
    const height = target.scrollHeight - target.offsetHeight;
    if (target.scrollTop < height) setState({ ...state, isBottom: false });
    else setState({ ...state, isBottom: true });
  };

  const goBack = () => {
    history.goBack();
  };
  return (
    <div className="Channel">
      <div className="TopBar">
        <img className="ArrowLeft" src={arrow_left} alt="" onClick={goBack} />
      </div>
      <div className="ChannelInformationBar">
        <div className="ChannelTitle">{title}</div>
        <div className="ChannelDetail">{detail}</div>
        <div className="ChannelOwner">{owner}</div>
      </div>
      <div className="ChannelTabBar">
        <div className="Tab ShowChannelCode">CHANNEL CODE</div>
        <div className="Tab ShowUnit" onClick={changeTab('units')}>
          UNIT
        </div>
        <div className="Tab ShowRunnerList" onClick={changeTab('runners')}>
          RUNNER LIST
        </div>
        <div className="Tab ShowStatistics">STATISTICS</div>
      </div>
      <div
        className="Context"
        onWheel={onScrollObserver(context)}
        ref={context}
      >
        {state.tab === 'units' && (
          <div className="Container">
            {units.map((unit, index) => (
              <div key={index} className="Line">
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
        )}
        {state.tab === 'runners' && (
          <div className="Container">
            {runners.map((runner, index) => (
              <div key={index} className="Line">
                <div key={index} className="Runner">
                  {runner}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="FloatingIconSet">
        <img className="Icon Plus" src={plus} alt="" />
        <img
          className={classNames('Icon', 'ArrowDown', {
            Up: state.isBottom,
            Down: !state.isBottom,
          })}
          src={arrow_down}
          alt=""
        />
      </div>
      <div className="ImageContainer">
        <img className="ChannelImage" src={image} alt="" />
      </div>
    </div>
  );
};

export default Channel;
