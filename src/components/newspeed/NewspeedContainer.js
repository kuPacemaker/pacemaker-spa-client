import React from 'react';

import Newspeed from './view/Newspeed';
// import image from 'resources/images/signin-image.png';
// import { account } from 'shared/test-data.js';

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

const NewspeedContainer = (prop) => {
  return <Newspeed peeds={testPeeds} />;
};

// const mapStateToProps = ({ counter }) => ({
//   color: counter.color,
//   number: counter.number,
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({ incrementAsync, decrement, getPost }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
export default NewspeedContainer;
