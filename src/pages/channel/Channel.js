import React from 'react';
import Channel from 'components/channel';

const ChannelPage = ({ match }) => {
  const id = match.params.id;
  return <Channel id={id} />;
};

export default ChannelPage;
