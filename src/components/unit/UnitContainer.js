import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { update } from 'store/modules/creators/unit';
import Unit from './view/Unit';

// const unitData = {
//   id: 'D',
//   channel: {
//     id: 0,
//     title: 'Reviews of Student News',
//     detail: 'Wed. 15:00~18:00',
//     code: 'XDWQAS1',
//   },
//   unit: {
//     id: 0,
//     index: 2,
//     title: 'Mosquitoes',
//     isOpened: true,
//     document: {
//       id: 'asd/mosquitoes',
//       visible: true,
//       title: 'How to reduce harmful mosquitoes.',
//       body:
//         'A controversial plan is moving ahead to release genetically modified mosquitoes into the Florida Keys. More than 750,000 of the insects are set to be introduced there. Why? The aedes aegypti mosquito can carry dangerous diseases like the Zika virus, Dengue fever and yellow fever. Officials are looking for new ways to kill of these insects without using pesticides and genetically modified mosquitoes might be a way to do this. Only female mosquitoes bite people. The altered insects that are set to be released in Florida are male. They`ve been modified so that the female offspring they produce will die before they hatch from their eggs and grow big enough to bite people. And the company that developed these GMO mosquitoes say they`ve been very successful in controlling mosquito populations in Panama, Brazil and the Cayman Islands.',
//     },
//     paper: {
//       isStart: true,
//       isEnd: false,
//       questions: [
//         {
//           id: 0,
//           quiz:
//             'What is being put into place to release genetically modified mosquitoes into the Florida Keys?',
//           answer: 'AA',
//           user_answer: '',
//           answer_set: 'AA/BB/CC/DD',
//           verified: true,
//         },
//         {
//           id: 1,
//           quiz: 'Who can only female mosquitoes bite ?',
//           answer: 'AA',
//           user_answer: '',
//           answer_set: 'AA/BB/CC/DD',
//           verified: true,
//         },
//         {
//           id: 2,
//           quiz:
//             'What type of mosquitoes were developed to control the mosquito population in Panama?',
//           answer: 'GMO mosquitoes',
//           user_answer: '',
//           answer_set: 'Zika virus/GMO mosquitoes/Florida/Dengue fever',
//           verified: true,
//         },
//         {
//           id: 3,
//           quiz: 'What kind of insects are being released in Florida?',
//           answer: 'AA',
//           user_answer: '',
//           answer_set: 'AA/BB/CC/DD',
//           verified: true,
//         },
//         {
//           id: 4,
//           quiz:
//             'Where have the company that developed GMO mosquitoes been successful in controlling mosquito populations?',
//           answer: 'AA',
//           user_answer: '',
//           answer_set: 'AA/BB/CC/DD',
//           verified: true,
//         },
//         {
//           id: 0,
//           quiz:
//             'What is being put into place to release genetically modified mosquitoes into the Florida Keys?',
//           answer: 'AA',
//           user_answer: '',
//           answer_set: 'AA/BB/CC/DD',
//           verified: true,
//         },
//         {
//           id: 1,
//           quiz: 'Who can only female mosquitoes bite ?',
//           answer: 'AA',
//           user_answer: '',
//           answer_set: 'AA/BB/CC/DD',
//           verified: true,
//         },
//         {
//           id: 2,
//           quiz:
//             'What type of mosquitoes were developed to control the mosquito population in Panama?',
//           answer: 'GMO mosquitoes',
//           user_answer: '',
//           answer_set: 'Zika virus/GMO mosquitoes/Florida/Dengue fever',
//           verified: true,
//         },
//         {
//           id: 3,
//           quiz: 'What kind of insects are being released in Florida?',
//           answer: 'AA',
//           user_answer: '',
//           answer_set: 'AA/BB/CC/DD',
//           verified: true,
//         },
//         {
//           id: 4,
//           quiz:
//             'Where have the company that developed GMO mosquitoes been successful in controlling mosquito populations?',
//           answer: 'AA',
//           user_answer: '',
//           answer_set: 'AA/BB/CC/DD',
//           verified: true,
//         },
//       ],
//     },
//   },
// };

const documentHandler = (state, setState) => (type) => (data) => {
  console.log(type, data);
  switch (type) {
    case 'title':
      setState({
        ...state,
        title: data,
      });
      return;
    case 'body':
      setState({
        ...state,
        body: data,
      });
      return;
    default:
      return;
  }
};

const onAnswerHandler = (state, setState) => (index, answer) => () => {
  setState({
    ...state,
    questions: state.questions.map((q, i) =>
      i === index ? { ...q, user_answer: answer } : q
    ),
  });
};

const UnitContainer = ({
  type,
  channelId,
  unitId,
  tab,
  data,
  update: updateHandler,
}) => {
  const history = useHistory();
  if (!data.unit.isOpened) history.goBack();
  const [document, setDocument] = useState(data.unit.document);
  const [paper, setPaper] = useState(data.unit.paper);

  return (
    <Unit
      type={type}
      channel={data.channel}
      unit={data.unit}
      tab={tab}
      document={document}
      paper={paper}
      documentHandler={documentHandler(document, setDocument)}
      onAnswerHandler={onAnswerHandler(paper, setPaper)}
    />
  );
};

const mapStateToProps = ({ unit }) => ({
  data: unit,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ update }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UnitContainer);
