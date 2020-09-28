import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Unit from './view/Unit';

const unitData = {
  id: 'D',
  channel: {
    id: 0,
    title: 'Reviews of Student News',
    detail: 'Wed. 15:00~18:00',
    code: 'XDWQAS1',
  },
  unit_leader: {
    id: 0,
    index: 2,
    title: 'Mosquitoes',
    isOpened: true,
    document: {
      id: 'asd/mosquitoes',
      visible: true,
      title: 'How to reduce harmful mosquitoes.',
      body:
        'A controversial plan is moving ahead to release genetically modified mosquitoes into the Florida Keys. More than 750,000 of the insects are set to be introduced there. Why? The aedes aegypti mosquito can carry dangerous diseases like the Zika virus, Dengue fever and yellow fever. Officials are looking for new ways to kill of these insects without using pesticides and genetically modified mosquitoes might be a way to do this. Only female mosquitoes bite people. The altered insects that are set to be released in Florida are male. They`ve been modified so that the female offspring they produce will die before they hatch from their eggs and grow big enough to bite people. And the company that developed these GMO mosquitoes say they`ve been very successful in controlling mosquito populations in Panama, Brazil and the Cayman Islands.',
    },
    paper: {
      isStart: false,
      isEnd: false,
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
  unit_runner: {
    id: 0,
    index: 2,
    title: 'Mosquitoes',
    isOpened: true,
    document: {
      id: 'asd/mosquitoes',
      visible: false,
      title: 'How to reduce harmful mosquitoes.',
      body:
        'A controversial plan is moving ahead to release genetically modified mosquitoes into the Florida Keys. More than 750,000 of the insects are set to be introduced there. Why? The aedes aegypti mosquito can carry dangerous diseases like the Zika virus, Dengue fever and yellow fever. Officials are looking for new ways to kill of these insects without using pesticides and genetically modified mosquitoes might be a way to do this. Only female mosquitoes bite people. The altered insects that are set to be released in Florida are male. They`ve been modified so that the female offspring they produce will die before they hatch from their eggs and grow big enough to bite people. And the company that developed these GMO mosquitoes say they`ve been very successful in controlling mosquito populations in Panama, Brazil and the Cayman Islands.',
    },
    paper: {
      isStart: true,
      isEnd: false,
      questions: [
        {
          id: 0,
          quiz:
            'What is being put into place to release genetically modified mosquitoes into the Florida Keys?',
          answer: '',
          answer_set: 'AA/BB/CC/DD',
          verified: true,
        },
        {
          id: 1,
          quiz: 'Who can only female mosquitoes bite ?',
          answer: '',
          answer_set: 'AA/BB/CC/DD',
          verified: true,
        },
        {
          id: 2,
          quiz:
            'What type of mosquitoes were developed to control the mosquito population in Panama?',
          answer: '',
          answer_set: 'Zika virus/GMO mosquitoes/Florida/Dengue fever',
          verified: true,
        },
        {
          id: 3,
          quiz: 'What kind of insects are being released in Florida?',
          answer: '',
          answer_set: 'AA/BB/CC/DD',
          verified: true,
        },
        {
          id: 4,
          quiz:
            'Where have the company that developed GMO mosquitoes been successful in controlling mosquito populations?',
          answer: '',
          answer_set: 'AA/BB/CC/DD',
          verified: true,
        },
      ],
    },
  },
};

const documentHandler = (state, setState) => (type) => (data) => {
  console.log(type, data);
  switch (type) {
    case 'title':
      setState({
        ...state,
        unit_leader: {
          ...state.unit_leader,
          document: {
            ...state.unit_leader.document,
            title: data,
          },
        },
      });
      return;
    case 'body':
      setState({
        ...state,
        unit_leader: {
          ...state.unit_leader,
          document: {
            ...state.unit_leader.document,
            body: data,
          },
        },
      });
      return;
    default:
      return;
  }
};

const onAnswerHandler = (state, setState) => (index, answer) => () => {
  const { questions } = state.unit_runner.paper;
  setState({
    ...state,
    unit_runner: {
      ...state.unit_runner,
      paper: {
        ...state.unit_runner.paper,
        questions: questions.map((q, i) =>
          i === index ? { ...q, answer: answer } : q
        ),
      },
    },
  });
};

const UnitContainer = ({ type, channel, id }) => {
  const [state, setState] = useState(unitData);
  const history = useHistory();
  const unit = type === 'leader' ? state.unit_leader : state.unit_runner;
  if (!unit.isOpened) history.goBack();

  return (
    <Unit
      type={type}
      channel={unitData.channel}
      unit={unit}
      documentHandler={documentHandler(state, setState)}
      onAnswerHandler={onAnswerHandler(state, setState)}
    />
  );
};

// const mapStateToProps = ({ counter }) => ({
//   color: counter.color,
//   number: counter.number,
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({ incrementAsync, decrement, getPost }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
export default UnitContainer;
