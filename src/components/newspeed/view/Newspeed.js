import React from 'react';
import Peed from 'components/peed';
import background from 'resources/images/background/background-right.png';
import arrow from 'resources/images/icon/arrow-down.png';

// import background from '../../../resources/images/background-up.png';
import './Newspeed.scss';

const testPeeds = [
  {
    type: 'SYSTEM_NOTICE',
    title: 'NEW FUNCTION IS AVAILABLE',
    body: 'Your Running Mate, Pacemaker Team',
    to: '',
    arg: '',
  },
  {
    type: 'PAPER_RECEIVE',
    title: 'NEW QUIZ IS OPENED',
    body: 'Basic Computer Programming, Kelvin, Tue. 15:00~18:00',
    to: '',
    arg: '',
  },
  {
    type: 'QUESTION_GENERATION',
    title: 'NEW QUESTIONS WERE RECEIVED',
    body: 'Basic Computer Programming, Kelvin, Tue. 15:00~18:00',
    to: '',
    arg: '',
  },
  {
    type: 'PAPER_FINISH',
    title: 'EVERYONE FINISHED THE QUIZE',
    body: 'Basic Computer Programming, Kelvin, Tue. 15:00~18:00',
    to: '',
    arg: '',
  },
  {
    type: 'QUESTION_GENERATION',
    title: 'NEW QUESTIONS WERE RECEIVED',
    body: 'Basic Computer Programming, Kelvin, Tue. 15:00~18:00',
    to: '',
    arg: '',
  },
  {
    type: 'SYSTEM_NOTICE',
    title: 'NEW FUNCTION IS AVAILABLE',
    body: 'Your Running Mate, Pacemaker Team',
    to: '',
    arg: '',
  },
  {
    type: 'PAPER_RECEIVE',
    title: 'NEW QUIZ IS OPENED',
    body: 'Basic Computer Programming, Kelvin, Tue. 15:00~18:00',
    to: '',
    arg: '',
  },
  {
    type: 'PAPER_FINISH',
    title: 'EVERYONE FINISHED THE QUIZE',
    body: 'Basic Computer Programming, Kelvin, Tue. 15:00~18:00',
    to: '',
    arg: '',
  },
  {
    type: 'QUESTION_GENERATION',
    title: 'NEW QUESTIONS WERE RECEIVED',
    body: 'Basic Computer Programming, Kelvin, Tue. 15:00~18:00',
    to: '',
    arg: '',
  },
];

const Newspeed = () => (
  <div
    className="Newspeed"
    style={{ backgroundImage: 'url(' + background + ')' }}
  >
    <img className="Arrow" src={arrow} alt="" />
    <div className="Container">
      <div>
        {testPeeds.map((peed, index) => (
          <div className="PeedBox" key={index}>
            <Peed
              key={index}
              type={peed.type}
              title={peed.title}
              body={peed.body}
              to={peed.to}
              arg={peed.arg}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Newspeed;
