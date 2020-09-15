import React from 'react';
import peedImage_1 from 'resources/images/peeds/peed-image-1.jpg';
import peedImage_2 from 'resources/images/peeds/peed-image-1.jpg';
import peedImage_3 from 'resources/images/peeds/peed-image-1.jpg';
import peedImage_4 from 'resources/images/peeds/peed-image-1.jpg';
import './Peed.scss';

const types = {
  SYSTEM_NOTICE: 'r',
  QUESTION_GENERATION: 'r',
  PAPER_RECEIVE: 'l',
  PAPER_FINISH: 'l',
};

const Peed = ({ type, title, body }) => (
  <div className="Peed">
    <img></img>
  </div>
);

export default Peed;
