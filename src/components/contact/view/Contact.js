import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';

import arrow_right from 'resources/images/icon/arrow-right.png';
import './Contact.scss';

const arrow = Array.from('>'.repeat(20));

const scrollToRef = (ref, to, behavior = 'auto') =>
  ref.current.scrollTo({ top: 0, left: to, behavior: behavior });

const onScrollHandler = (right, left) => (e) => {
  const rightRef = right.current;
  const center = (rightRef.scrollWidth - rightRef.offsetWidth) / 2;
  const step = rightRef.offsetWidth / 76;
  const delta = e.deltaY > 0 ? +step : -step;
  const rightValue = Number(rightRef.scrollLeft) - delta;
  const leftValue = Number(left.current.scrollLeft) + delta;
  if (rightValue > center + step * 5 || rightValue < center - step * 5) {
    scrollToRef(right, center);
  } else scrollToRef(right, rightValue);
  scrollToRef(left, leftValue);
};

const Person = ({ name, position, email, page, isTag = false }) => {
  return (
    <div className={'Person' + (isTag ? ' Tag' : '')}>
      <div className="Name">
        <span>{name}</span>
      </div>
      <div className="Position">
        {position.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
      <div className="EMail">
        <span>{email}</span>
      </div>
      <div className="Page">
        <span>{page}</span>
      </div>
    </div>
  );
};

const Contact = ({ title, collaborators, contributors, visible }) => {
  const peopleScroll = useRef(null);
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
        onWheel={onScrollHandler(arrowScroll, peopleScroll)}
      >
        <div className="ArrowBar" ref={arrowScroll}>
          <div className="ArrowContainer">
            {arrow.map((_, index) => (
              <img key={index} className="Arrow" src={arrow_right} alt="" />
            ))}
          </div>
        </div>
        <div className="OurPeople" ref={peopleScroll}>
          <div className="PeopleContainer">
            <Person
              isTag={true}
              name="NAME"
              position={['POSITION', '', '']}
              email="E-MAIL"
              page="PAGE"
            />

            {collaborators.map((collaborator, index) => (
              <Person
                key={index}
                name={collaborator.name}
                position={collaborator.position}
                email={collaborator.email}
                page={collaborator.github}
              />
            ))}

            {contributors.map((contributor, index) => (
              <Person
                key={index}
                name={contributor.name}
                position={contributor.position}
                email={contributor.email}
                page={contributor.github}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
