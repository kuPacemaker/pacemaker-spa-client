import React from 'react';
import Peed from 'components/peed';
import background from 'resources/images/background/background-right.png';
// import background from '../../../resources/images/background-up.png';
import './Newspeed.scss';

const Newspeed = () => (
  <div
    className="Newspeed"
    style={{ backgroundImage: 'url(' + background + ')' }}
  >
    <div className="Container">
      <div>
        <Peed />
        <Peed />
        <Peed />
        <Peed />
        <Peed />
        <Peed />
        <Peed />
      </div>
    </div>
    {/* <img src= */}
  </div>
);

export default Newspeed;
