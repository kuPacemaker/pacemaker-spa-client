import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { LocalMainPage } from 'common/local-path';
import peedImage_1 from 'resources/images/peeds/peed-image-1.png';
import peedImage_2 from 'resources/images/peeds/peed-image-2.png';
import peedImage_3 from 'resources/images/peeds/peed-image-3.png';
import peedImage_4 from 'resources/images/peeds/peed-image-4.png';

import './Peed.scss';

const types = {
  SYSTEM_NOTICE: ['SYSTEM', 'RightImagePeed', peedImage_1, '', ''],
  QUESTION_GENERATION: [
    'FOR LEADER',
    'RightImagePeed',
    peedImage_2,
    {
      to: 'unit',
      tab: 'upload',
      type: 'leader',
    },
  ],
  PAPER_RECEIVE: [
    'FOR RUNNER',
    'LeftImagePeed',
    peedImage_3,
    {
      to: 'unit',
      tab: 'paper',
      type: 'runner',
    },
  ],
  PAPER_FINISH: [
    'FOR LEADER',
    'LeftImagePeed',
    peedImage_4,
    {
      to: 'channel',
      tab: '',
      type: 'leader',
    },
  ],
};
/**
 *
 * channl : `${LocalMainPage.channel.root}${type}?id=${channelId}`
 * unit :   `${LocalMainPage.unit.root}${type}?channel=${channel}&id=${id}&tab=root`;
 */
const Peed = ({ type, title, body, arg }) => {
  const to =
    types[type][3].to === 'unit'
      ? `${LocalMainPage.unit.root}${types[type][3].type}?channel=${arg.channel}&id=${arg.unit}&tab=${types[type][3].tab}`
      : `${LocalMainPage.channel.root}${types[type][3].type}?id=${arg.channel}`;
  return (
    <div className={classNames('Peed', types[type][1])}>
      <img
        draggable="false"
        className="PeedImage"
        src={types[type][2]}
        alt=""
      />
      <div className="MessageBox">
        <div className="Source">{types[type][0]}</div>
        <Link draggable="false" to={to}>
          <div className="Title">{title}</div>
        </Link>
        <div className="Body">{body}</div>
      </div>
    </div>
  );
};

export default Peed;
