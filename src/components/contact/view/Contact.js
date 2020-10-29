import React, { useState } from 'react';
import classNames from 'classnames';
import Ticker from 'react-ticker';
import arrow_right from 'resources/images/icon/arrow-right.png';
import './Contact.scss';

import Person from './sub-components/Person';

const arrow = Array.from('>'.repeat(20));

const Contact = ({ title, collaborators, contributors, visible }) => {
  const [speed, setSpeed] = useState(6);
  const onHoverHandler = (enter) => () => {
    if (enter) setSpeed(2);
    else setSpeed(6);
  };
  return (
    <div className={classNames('Contact', { Invisible: !visible })}>
      <div className="TopBar">
        {title.split('\n').map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </div>
      <div className="Context">
        <div className="ArrowBar">
          <Ticker speed={speed} direction="toRight">
            {() => (
              <>
                {arrow.map((_, index) => (
                  <img key={index} className="Arrow" src={arrow_right} alt="" />
                ))}
              </>
            )}
          </Ticker>
        </div>
        <Ticker speed={speed} direction="toLeft">
          {() => (
            <div
              style={{ whiteSpace: 'nowrap' }}
              onMouseEnter={onHoverHandler(true)}
              onMouseLeave={onHoverHandler(false)}
            >
              <Person
                isTag={true}
                name="NAME"
                type="TYPE"
                position={['POSITION', '', '']}
                email="E-MAIL"
                page="PAGE"
              />
              {collaborators.map((collaborator, i) => (
                <Person
                  key={i}
                  type="Collaborator"
                  name={collaborator.name}
                  position={collaborator.position}
                  email={collaborator.email}
                  page={collaborator.github}
                />
              ))}
              {contributors.map((contributor, i) => (
                <Person
                  key={i}
                  type="Contributor"
                  name={contributor.name}
                  position={contributor.position}
                  email={contributor.email}
                  page={contributor.github}
                />
              ))}
            </div>
          )}
        </Ticker>
      </div>
    </div>
  );
};

export default Contact;
