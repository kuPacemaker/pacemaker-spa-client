import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { LocalMainPage } from 'common/local-path';
import feedImage_1 from 'resources/images/feeds/feed-image-1.png';
import feedImage_2 from 'resources/images/feeds/feed-image-2.png';
import feedImage_3 from 'resources/images/feeds/feed-image-3.png';
import feedImage_4 from 'resources/images/feeds/feed-image-4.png';

import './Feed.scss';

const types = {
  SYSTEM_NOTICE: ['SYSTEM', 'RightImageFeed', feedImage_1, '', ''],
  QUESTION_GENERATION: [
    'FOR LEADER',
    'RightImageFeed',
    feedImage_2,
    {
      to: 'unit',
      tab: 'upload',
      type: 'leader',
    },
  ],
  PAPER_RECEIVE: [
    'FOR RUNNER',
    'LeftImageFeed',
    feedImage_3,
    {
      to: 'unit',
      tab: 'paper',
      type: 'runner',
    },
  ],
  PAPER_FINISH: [
    'FOR LEADER',
    'LeftImageFeed',
    feedImage_4,
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
const Feed = ({ type, title, body, arg }) => {
  const to =
    types[type][3].to === 'unit'
      ? `${LocalMainPage.unit.root}${types[type][3].type}?channel=${arg.channel_id}&id=${arg.unit_id}&tab=${types[type][3].tab}`
      : `${LocalMainPage.channel.root}${types[type][3].type}?id=${arg.channel_id}`;
  return (
    <div className={classNames('Feed', types[type][1])}>
      <img
        draggable="false"
        className="FeedImage"
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

export default Feed;
