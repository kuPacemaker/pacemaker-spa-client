import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.scss';
import concepts from './resources/images/concept_image.png';
import arrow from './resources/images/arrow.png';

import { account } from 'shared/test-data';

const messages = [
  'FOR A PERFECT REMOTE CLASS',
  'YOU NEED A PERFECT PACEMAKER',
  'TO RUN WITH YOU',
];

const Homepage = () => {
  return (
    <div className="Homepage">
      <div className="context">
        <img className="ConceptsImage" src={concepts} alt="" />
        <div className="MessageBox">
          {messages.map((message) => (
            <div key={message}>{message}</div>
          ))}
        </div>
        <Link to={account.token ? '/main' : '/sign-in'}>
          <img className="Arrow" src={arrow} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
