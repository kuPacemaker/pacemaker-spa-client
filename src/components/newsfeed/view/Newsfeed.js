import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import Feed from 'components/feed';
import background from 'resources/images/background/background-right.png';
import arrow from 'resources/images/icon/arrow-down.png';

import './Newsfeed.scss';

const scrollToRef = (ref, to) =>
  ref.current.scrollTo({ top: to, left: 0, behavior: 'smooth' });

const Newsfeed = ({ feeds, visible }) => {
  const container = useRef(null);
  const [state, setState] = useState({
    isBottom: false,
  });

  const onScrollObserver = (ref) => () => {
    const target = ref.current;
    const height = target.scrollHeight - target.offsetHeight;
    if (target.scrollTop < height) setState({ isBottom: false });
    else setState({ isBottom: true });
  };

  const arrowClickHandler = (ref) => () => {
    if (state.isBottom) {
      scrollToRef(ref, 0);
    } else {
      const bottom = ref.current.scrollHeight - ref.current.offsetHeight;
      scrollToRef(ref, bottom);
    }
    setState({ ...state, isBottom: !state.isBottom });
  };

  return (
    <div
      className={classNames('Newsfeed', { Invisible: !visible })}
      style={{ backgroundImage: 'url(' + background + ')' }}
    >
      <div className="ArrowFrame">
        <img
          draggable="false"
          className={classNames('Arrow', {
            Down: !state.isBottom,
            Up: state.isBottom,
          })}
          src={arrow}
          onClick={arrowClickHandler(container)}
          alt=""
        />
      </div>

      <div
        className="Container"
        onWheel={onScrollObserver(container)}
        ref={container}
      >
        <div>
          {feeds &&
            feeds.map((feed, index) => (
              <div className="FeedBox" key={index}>
                <Feed
                  key={index}
                  type={feed.type}
                  title={feed.title}
                  body={feed.body}
                  arg={feed.arg}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Newsfeed;
