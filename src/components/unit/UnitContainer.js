import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { checkIsASCII } from 'common/utility/string';

import {
  getUnit,
  makeReservation,
  verifyQuestion,
} from 'store/modules/action/unit';

import { update, reset } from 'store/modules/creators/unit';
import { show } from 'store/modules/creators/modal';

import unitDocument, { searchSpans } from 'store/modules/action/document';

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

const createDocument = (createDocs) => (token, channel, unit) => (
  callbackHandler
) => () => {
  createDocs({ token, channel, unit }, (state, message) => {
    if (state) callbackHandler();
    else show('ERROR MODAL', { message });
  });
};

const updateDocument = (updateDocs, showModalHandler) => (token, document) => (
  callbackHandler
) => () => {
  if (checkIsASCII(document.title) && checkIsASCII(document.body)) {
    updateDocs({ token, document }, (state, message) => {
      if (state) callbackHandler();
      else show('ERROR MODAL', { message });
    });
  } else {
    showModalHandler('SUBMIT MODAL', {
      title: 'OOPS..!\nWATCH OUT!',
      body:
        'Non-English languages are mixed in this document!\nWe can only handle documents in English.\nIf you choose YES, all non-English languages will be gone.',
      callbackHandler: () => {
        updateDocs({ token, document }, (state, message) => {
          if (state) callbackHandler();
          else show('ERROR MODAL', { message });
        });
      },
    });
  }
};

const cancelDoceument = (updateHandler) => (state, action) => (
  callbackHandler
) => () => {
  updateHandler({
    ...state,
    title: action.title,
    body: action.body,
  });
  callbackHandler();
};

const updatePaper = (updateHandler) => (state, action) => () => {
  updateHandler({
    ...state,
    paper: action,
  });
};

const verifyPaper = (verifyHandler) => (
  token,
  unit,
  local,
  setLocalState
) => () => {
  const verified = [];
  const removed = [];
  local.questions.forEach((question) => {
    if (question.verified) verified.push(question);
    else removed.push({ pair_id: question.id });
  });
  setLocalState({
    ...local,
    questions: verified,
  });
  verifyHandler({ token, unit, removed }, (state, message) => {
    if (state);
    else show('ERROR MODAL', { message });
  });
};

const onReservationHandler = (reservation, showModalHandler) => (
  token,
  unit
) => () => {
  reservation({ token, unit }, (state, message) => {
    console.log(state, message);
    if (state)
      showModalHandler('ALERT MODAL', {
        title: 'MAKE RESERVATIN\nPAPER IS DELIVERED!',
        body: `The paper has now been delivered to Runner.\nYou can check the paper by going to this channel's runner page.`,
      });
    else showModalHandler('ERROR MODAL', { message });
  });
};

const onRemoveUnitHandler = (modal, history) => (
  token,
  channel,
  unit
) => () => {
  modal('REMOVE UNIT', {
    token,
    channel,
    unit,
    callbackHandler: () => {
      history.goBack();
    },
  });
};

const searchSpansHandler = (showModal, search, callbackHandler) => (
  document
) => () => {
  showModal('SEARCH NOUNS', {
    api: search,
    payload: document,
    callbackHandler,
  });
};

const updateSpans = (setSpans) => (response) => setSpans(response);

const UnitContainer = ({
  type,
  channelId,
  unitId,
  tab,
  data,
  token,
  isReady,
  getUnit: getUnitHandler,
  update: updateHandler,
  reset: resetHandler,
  show: showModalHandler,
  reservation,
  verifyQuestion: verifyHandler,
  createDocs,
  updateDocs,
  searchSpans,
}) => {
  const history = useHistory();

  const [document, setDocument] = useState('');
  const [paper, setPaper] = useState('');
  const [spans, setSpans] = useState([]);

  useEffect(() => {
    if (token === null) return;
    getUnitHandler({ token: token, channel: channelId, unit: unitId });
    return () => {
      resetHandler();
      setDocument('');
      setPaper('');
      setSpans([]);
    };
  }, []);

  useEffect(() => {
    setPaper(data.unit.paper);
  }, [data.unit.paper]);

  useEffect(() => {
    setDocument(data.unit.document);
  }, [data.unit.document]);

  if (!isReady || data.channel === null) return <div />;
  if (!data.unit.isOpened) history.goBack();

  return (
    <Unit
      type={type}
      channel={data.channel}
      unit={data.unit}
      tab={tab}
      document={document}
      spans={spans}
      paper={paper}
      onRemoveUnitHandler={onRemoveUnitHandler(showModalHandler, history)(
        token,
        channelId,
        unitId
      )}
      showModalHandler={showModalHandler}
      searchSpans={searchSpansHandler(
        showModalHandler,
        searchSpans,
        updateSpans(setSpans)
      )(data.unit.document)}
      createDocument={createDocument(createDocs)(token, channelId, unitId)}
      updateDocument={updateDocument(updateDocs, showModalHandler)(
        token,
        document
      )}
      cancelDoceument={cancelDoceument(setDocument)(
        document,
        data.unit.document
      )}
      documentHandler={documentHandler(document, setDocument)}
      updatePaper={updatePaper(updateHandler)(data, paper)}
      verifyPaper={verifyPaper(verifyHandler)(token, unitId, paper, setPaper)}
      onVerifyHandler={onVerifyHandler(paper, setPaper)}
      onAnswerHandler={onAnswerHandler(paper, setPaper)}
      onReservationHandler={onReservationHandler(reservation, showModalHandler)(
        token,
        unitId
      )}
    />
  );
};

const mapStateToProps = ({ account, unit }) => ({
  token: account.token,
  data: unit.data,
  isReady: unit.state.ready,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getUnit,
      show,
      update,
      reset,
      verifyQuestion,
      reservation: makeReservation,
      createDocs: unitDocument.create,
      updateDocs: unitDocument.update,
      searchSpans,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(UnitContainer);
