import React from 'react';
import queryString from 'query-string';
import Unit from 'components/unit';

const UnitPage = ({ location, match }) => {
  const query = queryString.parse(location.search);
  console.log(query);
  return (
    <Unit type={match.params.type} channel={query.channel} id={query.id} />
  );
};

export default UnitPage;
