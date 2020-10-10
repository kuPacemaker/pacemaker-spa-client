import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import peedImage_1 from 'resources/images/peeds/peed-image-1.png';
import peedImage_2 from 'resources/images/peeds/peed-image-2.png';
import peedImage_3 from 'resources/images/peeds/peed-image-3.png';
import peedImage_4 from 'resources/images/peeds/peed-image-4.png';

import './Peed.scss';

const types = {
  SYSTEM_NOTICE: ['SYSTEM', 'RightImagePeed', peedImage_1],
  QUESTION_GENERATION: ['FOR LEADER', 'RightImagePeed', peedImage_2],
  PAPER_RECEIVE: ['FOR RUNNER', 'LeftImagePeed', peedImage_3],
  PAPER_FINISH: ['FOR LEADER', 'LeftImagePeed', peedImage_4],
};

const Peed = ({ type, title, body, to, arg }) => {
  return (
    <Link draggable="false" to={to}>
      <div className={classNames('Peed', types[type][1])}>
        <img
          draggable="false"
          className="PeedImage"
          src={types[type][2]}
          alt=""
        />
        <div className="MessageBox">
          <div className="Source">{types[type][0]}</div>
          <div className="Title">{title}</div>
          <div className="Body">{body}</div>
        </div>
      </div>
    </Link>
  );
};

export default Peed;
