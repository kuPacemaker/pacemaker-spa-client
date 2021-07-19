import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import './Homepage.scss';
import concepts from 'resources/images/concept/home-image.jpg';
import background from 'resources/images/background/background-up.png';
import arrow from 'resources/images/icon/arrow-right.png';

import LocalPath from 'common/local-path';

const Homepage = ({ preface, token }) => {
  return (
    <div
      className={classNames('Homepage')}
      style={{ backgroundImage: 'url(' + background + ')' }}
    >
      <div className="Context">
        <img
          draggable="false"
          className="ConceptsImage"
          src={concepts}
          alt=""
        />
        <div className="MessageBox">
          {preface.map((message) => (
            <div key={message}>{message}</div>
          ))}
          <Link
            draggable="false"
            className="ArrowLink"
            to={token ? LocalPath.main.root : LocalPath.admission.root}
          >
            <img draggable="false" className="Arrow" src={arrow} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
