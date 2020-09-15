import React from 'react';
import peedImage_1 from 'resources/images/peeds/peed-image-1.jpg';
import peedImage_2 from 'resources/images/peeds/peed-image-1.jpg';
import peedImage_3 from 'resources/images/peeds/peed-image-1.jpg';
import peedImage_4 from 'resources/images/peeds/peed-image-1.jpg';
import './Peed.scss';

const types = {
  SYSTEM_NOTICE: ['r', peedImage_1],
  QUESTION_GENERATION: ['r', peedImage_2],
  PAPER_RECEIVE: ['l', peedImage_3],
  PAPER_FINISH: ['l', peedImage_4],
};

const Peed = ({ type, title, body }) => {
  return (
    <div className="Peed">
      {}
      <img></img>
    </div>
  );
};

export default Peed;
