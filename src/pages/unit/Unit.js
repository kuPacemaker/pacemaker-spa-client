import React from 'react';
import queryString from 'query-string';
import Unit from 'components/unit';

const UnitPage = ({ location, match }) => {
  console.log(location);
  const query = queryString.parse(location.search);
  return <Unit type={match.params.type} id={query.id} />;
};

export default UnitPage;
