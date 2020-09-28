import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

import FloatingIcons from 'components/floating-icons';

import TopIconSet from './sub-components/TopIconSet';
import Document from './sub-components/Document';
import EditDocument from './sub-components/EditDocument';
import Quiz from './sub-components/Quiz';
import Reservation from './sub-components/Reservation';
import Paper from './sub-components/Paper';

import arrow_left from 'resources/images/icon/arrow-left.png';
import './Unit.scss';
// [{ type: 'arrow-down', onClickHandler: () => {} }];

const Unit = ({ type, channel, unit, documentHandler, onAnswerHandler }) => {
  const [state, setState] = useState({
    tab: 'document',
    reservation: false,
    rotate: false,
  });

  const history = useHistory();

  const quizContainer = useRef(null);

  const showReservation = () => {
    setState({ ...state, reservation: !state.reservation });
  };

  const changeTab = (name) => () => {
    setState({ ...state, tab: name });
  };

  const onScrollObserver = (ref) => () => {
    if (!ref) return;
    const target = ref.current;
    const height = target.scrollHeight - target.offsetHeight;
    if (target.scrollTop < height) setState({ ...state, rotate: false });
    else setState({ ...state, rotate: true });
  };

  const goBack = () => {
    history.goBack();
  };

  const iconMap = {
    leader: {
      document: [
        {
          type: 'upload_line',
          onClickHandler: () => {},
        },
      ],
      document_edit: [
        {
          type: 'check',
          onClickHandler: changeTab('document'),
        },
        {
          type: 'upload_line',
          onClickHandler: () => {},
        },
      ],
      upload: [
        {
          type: 'check',
          onClickHandler: () => console.log('Save Quizs'),
        },
        {
          type: 'arrow-down',
          onClickHandler: () => {},
          observer: state.rotate,
        },
      ],
    },
    runner: {
      document: [],
      paper: [
        {
          type: 'check',
          onClickHandler: () => {},
        },
      ],
    },
  };

  return (
    <div className="Unit">
      <div className="TopBar">
        <img className="ArrowLeft" src={arrow_left} alt="" onClick={goBack} />
      </div>

      <div className="ChannelInformationBar">
        <div className="ChannelTitle">{channel.title}</div>
        <div className="ChannelDetail">{channel.detail}</div>
      </div>

      <div className="UnitInformationBar">
        <div className="InformationContext">
          <div className="UnitIndex">Unit {unit.index}</div>
          <div className="UnitTitle">{unit.title}</div>
          <div className="UnitIconSet">
            <TopIconSet type={type} unit={unit} onClickHandler={changeTab} />
          </div>
        </div>
        {state.tab === 'upload' && (
          <Reservation
            onClickHandler={showReservation}
            hide={!state.reservation}
          />
        )}
      </div>

      <div className="Context">
        {state.tab === 'document' && (
          <div className="DocumentContainer">
            <Document
              type={type}
              title={unit.document.title}
              body={unit.document.body}
              changeTab={changeTab}
            />
          </div>
        )}
        {state.tab === 'document_edit' && (
          <div className="DocumentContainer">
            <EditDocument
              title={unit.document.title}
              body={unit.document.body}
              documentHandler={documentHandler}
            />
          </div>
        )}
        {state.tab === 'upload' && (
          <div className="QuizContext">
            <div className="TabTitle">QUIZ</div>
            <div
              className="QuizContainer"
              onWheel={onScrollObserver(quizContainer)}
              ref={quizContainer}
            >
              {unit.paper.questions.map((question, index) => (
                <Quiz key={index} data={question} />
              ))}
            </div>
          </div>
        )}
        {state.tab === 'paper' && (
          <Paper
            questions={unit.paper.questions}
            onAnswerHandler={onAnswerHandler}
          />
        )}
      </div>

      <div className="IconContainer">
        <FloatingIcons icons={iconMap[type][state.tab]} />
      </div>
    </div>
  );
};

export default Unit;
