import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.scss';
import concepts from './resources/images/concept_image.png';
import arrow from './resources/images/arrow.png';
const messages = [
  'FOR A PERFECT REMOTE CLASS',
  'YOU NEED A PERFECT PACEMAKER',
  'TO RUN WITH YOU',
];

const Homepage = () => {
  return (
    <div className="Homepage">
      <div className="context">
        <img id="ConceptsImage" src={concepts} alt="" />
        <div className="MessageBox">
          {messages.map((message) => (
            <div key={message}>{message}</div>
          ))}
        </div>
        <Link to={'/about-us'}>
          <img id="Arrow" src={arrow} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
