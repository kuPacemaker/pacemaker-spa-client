import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import plus from 'resources/images/icon/plus.png';
import arrow from 'resources/images/icon/arrow-right.png';

// import background from 'resources/images/background/background-right.png';
// import arrow from 'resources/images/icon/arrow-down.png';

// import background from '../../../resources/images/background-up.png';
import './Board.scss';

const scrollToRef = (ref, to, behavior) =>
  ref.current.scrollTo({ top: 0, left: to, behavior: behavior });

const Board = ({
  type,
  title,
  channels,
  clickChannelHandler,
  createChannelHandler,
}) => {
  const scroll = useRef(null);
  const [state, setState] = useState({
    isEnd: false,
  });

  const onScrollHandler = (ref) => (e) => {
    let value = Number(ref.current.scrollLeft) + Number(e.deltaY);
    scrollToRef(ref, value, 'auto');
    if (ref.current.scrollWidth - ref.current.offsetWidth > value)
      setState({ isEnd: false });
    else setState({ isEnd: true });
  };

  // const onScrollHandler = (e) => {
  //   const target = e.target;
  //   const height = target.scrollHeight - target.offsetHeight;
  //   if (target.scrollTop < height) setState({ isBottom: false });
  //   else setState({ isBottom: true });
  // };
  // const arrowClickHandler = () => {
  //   if (state.isBottom) {
  //     scrollToRef(container, 0);
  //   } else {
  //     const bottom =
  //       container.current.scrollHeight - container.current.offsetHeight;
  //     scrollToRef(container, bottom);
  //   }
  // };
  const onArrowClickHandler = (ref) => (e) => {};
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
              <div
                key={index}
                className="ChannelContainer"
                onClick={clickChannelHandler}
              >
                {channel.title + channel.subtitle + channel.imgType}
              </div>
            ))}
          </div>
        </div>
        <div className="IconSet">
          <div className="Icon">
            <img
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
              className="Plus"
              src={plus}
              alt=""
              onClick={createChannelHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
