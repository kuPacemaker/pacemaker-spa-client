import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { update } from 'store/modules/creators/unit';
import { show } from 'store/modules/creators/modal';
import document from 'store/modules/action/document';

import Unit from './view/Unit';

const documentHandler = (state, setState) => (type) => (data) => {
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
    questions: state.questions.map((question, i) =>
      i === index ? { ...question, user_answer: answer } : question
    ),
  });
};

const onVerifyHandler = (state, setState) => (id) => () => {
  setState({
    ...state,
    questions: state.questions.map((question) =>
      question.id === id
        ? { ...question, verified: !question.verified }
        : question
    ),
  });
};

const updateDocument = (updateHandler) => (state, action) => () => {
  updateHandler({
    ...state,
    unit: {
      ...state.unit,
      document: action,
    },
  });
};

const updatePaper = (updateHandler) => (state, action) => () => {
  updateHandler({
    ...state,
    unit: {
      ...state.unit,
      paper: action,
    },
  });
};

const createDocument = (token, channel, unit) => () => {};

const editDocument = (token, document) => () => {};

const verifyPaper = (updateHandler) => (
  state,
  local,
  updateLocalState
) => () => {
  const questions = local.questions.filter((question) => question.verified);

  updateLocalState({
    ...local,
    questions: questions,
  });

  updateHandler({
    ...state,
    unit: {
      ...state.unit,
      paper: {
        ...local,
        questions: questions,
      },
    },
  });
};

const UnitContainer = ({
  type,
  channelId,
  unitId,
  tab,
  data,
  update: updateHandler,
  show: showModalHandler,
}) => {
  const history = useHistory();
  if (!data.unit.isOpened) history.goBack();
  const [docs, setDocument] = useState(data.unit.document);
  const [paper, setPaper] = useState(data.unit.paper);
  return (
    <Unit
      type={type}
      channel={data.channel}
      unit={data.unit}
      tab={tab}
      document={docs}
      paper={paper}
      showModalHandler={showModalHandler}
      createDocument={createDocument()()}
      updateDocument={updateDocument(updateHandler)(data, docs)}
      documentHandler={documentHandler(docs, setDocument)}
      updatePaper={updatePaper(updateHandler)(data, paper)}
      verifyPaper={verifyPaper(updateHandler)(data, paper, setPaper)}
      onVerifyHandler={onVerifyHandler(paper, setPaper)}
      onAnswerHandler={onAnswerHandler(paper, setPaper)}
    />
  );
};

const mapStateToProps = ({ account, unit }) => ({
  token: account.token,
  data: unit,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ show, update }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UnitContainer);
