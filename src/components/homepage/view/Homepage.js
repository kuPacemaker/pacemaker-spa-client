import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.scss';
import concepts from 'resources/images/home-image.png';
import arrow from './resources/images/arrow.png';

import LocalPath from 'local-path';
import { account } from 'shared/test-data';

const Homepage = ({ preface }) => {
  return (
    <div className="Homepage">
      <div className="context">
        <img className="ConceptsImage" src={concepts} alt="" />
        <div className="MessageBox">
          {preface.map((message) => (
            <div key={message}>{message}</div>
          ))}
          <Link
            to={account.token ? LocalPath.main.root : LocalPath.admission.root}
          >
            <img className="Arrow" src={arrow} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
