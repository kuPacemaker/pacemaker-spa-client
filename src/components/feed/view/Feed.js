import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { LocalMainPage } from 'common/local-path';
import feedImage_1 from 'resources/images/feeds/feed-image-1.png';
import feedImage_2 from 'resources/images/feeds/feed-image-2.png';
import feedImage_3 from 'resources/images/feeds/feed-image-3.png';
import feedImage_4 from 'resources/images/feeds/feed-image-4.png';

import './Feed.scss';

const types = {
  SYSTEM_NOTICE: ['SYSTEM', feedImage_1, '', ''],
  QUESTION_GENERATION: [
    'FOR LEADER',
    feedImage_2,
    {
      to: 'unit',
      tab: 'upload',
      type: 'leader',
    },
  ],
  PAPER_RECEIVE: [
    'FOR RUNNER',
    feedImage_3,
    {
      to: 'unit',
      tab: 'paper',
      type: 'runner',
    },
  ],
  PAPER_FINISH: [
    'FOR LEADER',
    feedImage_4,
    {
      to: 'channel',
      tab: '',
      type: 'leader',
    },
  ],
};

const makeRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
};

const Feed = ({ type, title, body, arg }) => {
  const to =
    types[type][2].to === 'unit'
      ? `${LocalMainPage.unit.root}${types[type][2].type}?channel=${arg.channel_id}&id=${arg.unit_id}&tab=${types[type][2].tab}`
      : `${LocalMainPage.channel.root}${types[type][2].type}?id=${arg.channel_id}`;
  const [index, setPosition] = useState(0);
  useEffect(() => {
    setPosition(makeRandomInt(0, 5));
  }, []);
  return (
    <div className={`Feed FeedType_${index}`}>
      <img
        draggable="false"
        className="FeedImage"
        src={types[type][1]}
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

export default Feed;
