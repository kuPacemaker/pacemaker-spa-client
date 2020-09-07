import React from 'react';
import queryString from 'query-string';
import PaletteContainer from 'components/samples/waiting/WaitingListContainer';

const About = ({ location, match }) => {
  const query = queryString.parse(location.search);
  console.log(query);
  const detail = query.detail === 'true';
  return (
    <div>
      <PaletteContainer />
      <div>{match.params.name}</div>
      <div>{detail && 'detail:' + match.params.toString()} </div>
    </div>
  );
};

export default About;
