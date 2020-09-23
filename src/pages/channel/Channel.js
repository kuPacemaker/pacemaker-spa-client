import React from 'react';
import queryString from 'query-string';
import Channel from 'components/channel';

const ChannelPage = ({ location, match }) => {
  const query = queryString.parse(location.search);
  return <Channel type={match.params.type} id={query.id} />;
};

export default ChannelPage;
