import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import Peed from 'components/peed';
import background from 'resources/images/background/background-right.png';
import arrow from 'resources/images/icon/arrow-down.png';

// import background from '../../../resources/images/background-up.png';
import './Newspeed.scss';

const scrollToRef = (ref, to) =>
  ref.current.scrollTo({ top: to, left: 0, behavior: 'smooth' });

const Newspeed = ({ peeds, fetchNewspeed }) => {
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

  useEffect(() => {
    // initialize newspeed
    if (!peeds) fetchNewspeed();
  }, []);

  return (
    <div
      className="Newspeed"
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
          {peeds &&
            peeds.map((peed, index) => (
              <div className="PeedBox" key={index}>
                <Peed
                  key={index}
                  type={peed.type}
                  title={peed.title}
                  body={peed.body}
                  arg={peed.arg}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Newspeed;
