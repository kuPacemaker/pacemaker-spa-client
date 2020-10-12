import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';

import ChannelThumbnail from 'components/channel-thumbnail';
import plus from 'resources/images/icon/plus.png';
import arrow from 'resources/images/icon/arrow-right.png';
import './Board.scss';

const scrollToRef = (ref, to, behavior) =>
  ref.current.scrollTo({ top: 0, left: to, behavior: behavior });

const Board = ({ type, title, channels, createChannelHandler }) => {
  const scroll = useRef(null);
  const [state, setState] = useState({
    isEnd: false,
  });

  useEffect(() => {
    if (!scroll) return;
    scrollToRef(scroll, 0, 'auto');
  }, [type]);

  const onScrollHandler = (ref) => (e) => {
    let value = Number(ref.current.scrollLeft) + Number(e.deltaY);
    scrollToRef(ref, value, 'auto');
    if (ref.current.scrollWidth - ref.current.offsetWidth > value)
      setState({ isEnd: false });
    else setState({ isEnd: true });
  };

  const onArrowClickHandler = (ref) => () => {
    let to = 0;
    if (!state.isEnd) to = ref.current.scrollWidth - ref.current.offsetWidth;
    scrollToRef(ref, to, 'smooth');
    setState({ isEnd: !state.isEnd });
  };

  return (
    <div className="Board">
      <div className="Title">{title}</div>
      <div className="Context">
        <div className="ScrollContainer">
          <div
            className="Scroll"
            onWheel={onScrollHandler(scroll)}
            ref={scroll}
          >
            {channels.map((channel, index) => (
              <div key={index} className="ChannelContainer">
                <ChannelThumbnail
                  type={type}
                  id={channel.id}
                  title={channel.title}
                  detail={channel.detail}
                  image={channel.image}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="IconSet">
          <div className="Icon">
            <img
              draggable="false"
              className={classNames('Arrow', {
                Right: state.isEnd,
                Left: !state.isEnd,
              })}
              src={arrow}
              alt=""
              onClick={onArrowClickHandler(scroll)}
            />
          </div>
          <div className="Icon">
            <img
              draggable="false"
              className="Plus"
              src={plus}
              alt=""
              onClick={createChannelHandler(type)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
