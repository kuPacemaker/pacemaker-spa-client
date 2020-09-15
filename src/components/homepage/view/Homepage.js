import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.scss';
import concepts from 'resources/images/concept/home-image.jpg';
import background from 'resources/images/background/background-up.png';
import arrow from 'resources/images/icon/arrow-right.png';

import LocalPath from 'local-path';
import { account } from 'shared/test-data';

const Homepage = ({ preface }) => {
  return (
    <div
      className="Homepage"
      style={{ backgroundImage: 'url(' + background + ')' }}
    >
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
