import React from 'react';

import Unit from './view/Unit';

const unitData = {
  id: 'D',
  channel: {
    id: 0,
    title: 'Reviews of Student News',
    detail: 'Wed. 15:00~18:00',
    code: 'XDWQAS221',
  },
  unit: {
    id: 2,
    title: 'Mosquitoes',
    document: {
      id: 'asd/mosquitoes',
      title: 'How to reduce harmful mosquitoes.',
      body:
        'A controversial plan is moving ahead to release genetically modified mosquitoes into the Florida Keys. More than 750,000 of the insects are set to be introduced there. Why? The aedes aegypti mosquito can carry dangerous diseases like the Zika virus, Dengue fever and yellow fever. Officials are looking for new ways to kill of these insects without using pesticides and genetically modified mosquitoes might be a way to do this. Only female mosquitoes bite people. The altered insects that are set to be released in Florida are male. They`ve been modified so that the female offspring they produce will die before they hatch from their eggs and grow big enough to bite people. And the company that developed these GMO mosquitoes say they`ve been very successful in controlling mosquito populations in Panama, Brazil and the Cayman Islands.',
      questions: [
        {
          id: 0,
          quiz:
            'What is being put into place to release genetically modified mosquitoes into the Florida Keys?',
          answer: 'AA',
          answer_set: 'AA/BB/CC/DD',
          verified: true,
        },
        {
          id: 1,
          quiz: 'Who can only female mosquitoes bite ?',
          answer: 'AA',
          answer_set: 'AA/BB/CC/DD',
          verified: true,
        },
        {
          id: 2,
          quiz:
            'What type of mosquitoes were developed to control the mosquito population in Panama?',
          answer: 'GMO mosquitoes',
          answer_set: 'Zika virus/GMO mosquitoes/Florida/Dengue fever',
          verified: true,
        },
        {
          id: 3,
          quiz: 'What kind of insects are being released in Florida?',
          answer: 'AA',
          answer_set: 'AA/BB/CC/DD',
          verified: true,
        },
        {
          id: 4,
          quiz:
            'Where have the company that developed GMO mosquitoes been successful in controlling mosquito populations?',
          answer: 'AA',
          answer_set: 'AA/BB/CC/DD',
          verified: true,
        },
      ],
    },
  },
};

const UnitContainer = ({ type, channel, id }) => {
  return <Unit type={type} channel={unitData.channel} unit={unitData.unit} />;
};

// const mapStateToProps = ({ counter }) => ({
//   color: counter.color,
//   number: counter.number,
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({ incrementAsync, decrement, getPost }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
export default UnitContainer;
