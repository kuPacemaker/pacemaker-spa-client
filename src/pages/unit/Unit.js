import React from 'react';
import queryString from 'query-string';
import Unit from 'components/unit';

const UnitPage = ({ location, match }) => {
  const query = queryString.parse(location.search);
  return (
    <Unit
      type={match.params.type}
      channelId={query.channel}
      unitId={query.id}
      tab={query.tab}
    />
  );
};

export default UnitPage;
