import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import Peed from 'components/peed';
import background from 'resources/images/background/background-right.png';
import arrow from 'resources/images/icon/arrow-down.png';

// import background from '../../../resources/images/background-up.png';
import './Newspeed.scss';

const scrollToRef = (ref, to) =>
  ref.current.scrollTo({ top: to, left: 0, behavior: 'smooth' });

const Newspeed = ({ peeds }) => {
  const container = useRef(null);
  const [state, setState] = useState({
    isBottom: false,
  });
  const onScrollObserver = (e) => {
    const target = e.target;
    const height = target.scrollHeight - target.offsetHeight;
    if (target.scrollTop < height) setState({ isBottom: false });
    else setState({ isBottom: true });
  };
  const arrowClickHandler = () => {
    if (state.isBottom) {
      scrollToRef(container, 0);
    } else {
      const bottom =
        container.current.scrollHeight - container.current.offsetHeight;
      scrollToRef(container, bottom);
    }
  };
  return (
    <div
      className="Newspeed"
      style={{ backgroundImage: 'url(' + background + ')' }}
    >
      <div className="ArrowFrame">
        <img
          className={classNames('Arrow', {
            Down: !state.isBottom,
            Up: state.isBottom,
          })}
          src={arrow}
          onClick={arrowClickHandler}
          alt=""
        />
      </div>

      <div className="Container" onScroll={onScrollObserver} ref={container}>
        <div>
          {peeds.map((peed, index) => (
            <div className="PeedBox" key={index}>
              <Peed
                key={index}
                type={peed.type}
                title={peed.title}
                body={peed.body}
                to={peed.to}
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
