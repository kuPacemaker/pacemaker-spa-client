import React from 'react';
import Homepage from 'components/homepage';
const preface = [
  'FOR A PERFECT REMOTE CLASS',
  'YOU NEED A PERFECT PACEMAKER',
  'TO RUN WITH YOU',
];

const Home = () => {
  return (
    <div>
      <Homepage preface={preface} />
    </div>
  );
};

export default Home;
