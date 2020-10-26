import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';

import arrow_right from 'resources/images/icon/arrow-right.png';
import './Contact.scss';

const arrow = Array.from('>'.repeat(16));

const scrollToRef = (ref, to, behavior = 'auto') =>
  ref.current.scrollTo({ top: 0, left: to, behavior: behavior });

const onScrollHandler = (right, left) => (e) => {
  const rightRef = right.current;
  const center = (rightRef.scrollWidth - rightRef.offsetWidth) / 2;
  const step = rightRef.offsetWidth / 100;
  const delta = e.deltaY > 0 ? +step : -step;
  const rightValue = Number(rightRef.scrollLeft) - delta;
  if (rightValue > center + step * 7 || rightValue < center - step * 7) {
    scrollToRef(right, center);
  } else scrollToRef(right, rightValue);
};

const Contact = ({ title, collaborators, contributors, visible }) => {
  const cardScroll = useRef(null);
  const arrowScroll = useRef(null);

  useEffect(() => {
    if (arrowScroll) {
      const center =
        (arrowScroll.current.scrollWidth - arrowScroll.current.offsetWidth) / 2;
      scrollToRef(arrowScroll, center);
    }
  }, []);
  return (
    <div className={classNames('Contact', { Invisible: !visible })}>
      <div className="TopBar">
        {title.split('\n').map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </div>
      <div
        className="Context"
        onWheel={onScrollHandler(arrowScroll, cardScroll)}
      >
        <div className="ArrowBar" ref={arrowScroll}>
          <div className="ArrowContainer">
            {arrow.map((_, index) => (
              <img key={index} className="Arrow" src={arrow_right} alt="" />
            ))}
          </div>
        </div>
        <div className="OurPeople">
          {collaborators.map((collaborator, index) => (
            <div key={index}>
              {collaborator.name}={collaborator.position}={collaborator.email}=
              {collaborator.github}
            </div>
          ))}
          {contributors.map((contributor, index) => (
            <div key={index}>
              {contributor.name}={contributor.position}={contributor.email}=
              {contributor.github}
            </div>
          ))}

          {/* {collaborators.map((article, index) => (
            <div key={index} className={article[0]}>
              {article[1].split('\n').map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
