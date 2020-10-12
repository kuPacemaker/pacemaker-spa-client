import React, { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import FloatingIcons from 'components/floating-icons';

import TopIconSet from './sub-components/TopIconSet';
import Document from './sub-components/Document';
import EditDocument from './sub-components/EditDocument';
import Quiz from './sub-components/Quiz';
import Reservation from './sub-components/Reservation';
import Paper from './sub-components/Paper';

import create_document from 'resources/images/icon/create-document.png';
import close from 'resources/images/icon/close.png';

import arrow_left from 'resources/images/icon/arrow-left.png';
import './Unit.scss';

const Unit = (props) => {
  const [state, setState] = useState({
    tab: props.tab,
    reservation: false,
    rotate: false,
  });

  const [ready, setReady] = useState(true);

  const history = useHistory();

  const quizContainer = useRef(null);

  useEffect(() => {
    const staging = props.paper.questions.filter(
      (question) => !question.verified
    );
    setReady(staging.length === 0);
    changeTab('upload')();
  }, [props.paper.questions]);

  useEffect(() => {
    if (props.document.id && props.document.visible) {
      changeTab('document')();
    }
  }, []);

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
          onClickHandler: () => props.showModalHandler('SUBMIT DOCUMENT'),
        },
      ],
      edit: [
        {
          type: 'check',
          onClickHandler: props.updateDocument(changeTab('document')),
        },
      ],
      upload: [
        {
          type: 'check',
          onClickHandler: props.verifyPaper,
          disable: ready,
        },
        {
          type: 'arrow-down',
          onClickHandler: () => {},
          rotate: state.rotate,
        },
      ],
    },
    runner: {
      document: [],
      paper: [
        {
          type: 'check',
          onClickHandler: () => {
            props.updatePaper();
            props.showModalHandler('SUBMIT PAPER');
          },
        },
      ],
    },
  };

  return (
    <div className="Unit">
      <div className="TopBar">
        <img
          draggable="false"
          className="ArrowLeft"
          src={arrow_left}
          alt=""
          onClick={goBack}
        />
      </div>

      <div className="ChannelInformationBar">
        <div className="ChannelTitle">{props.channel.title}</div>
        <div className="ChannelDetail">{props.channel.detail}</div>
      </div>

      <div className="UnitInformationBar">
        <div className="InformationContext">
          <div className="UnitIndex">Unit {props.unit.index}</div>
          <div className="UnitTitle">{props.unit.title}</div>
          <div className="UnitIconSet">
            <TopIconSet
              type={props.type}
              unit={props.unit}
              onClickHandler={changeTab}
            />
          </div>
        </div>
        {state.tab === 'upload' && ready && (
          <Reservation
            onClickHandler={showReservation}
            hide={!state.reservation}
          />
        )}
      </div>

      <div className="Context">
        {state.tab === 'root' && (
          <div>
            <img
              draggable="false"
              className="RootImage"
              src={props.type === 'leader' ? create_document : close}
              alt=""
              onClick={
                props.type === 'leader'
                  ? props.createDocument(changeTab('edit'))
                  : goBack
              }
            />
          </div>
        )}
        {state.tab === 'document' && (
          <div className="DocumentContainer">
            <Document
              type={props.type}
              title={props.document.title}
              body={props.document.body}
              changeTab={changeTab}
            />
          </div>
        )}
        {state.tab === 'edit' && (
          <div className="DocumentContainer">
            <EditDocument
              title={props.document.title}
              body={props.document.body}
              documentHandler={props.documentHandler}
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
              {props.paper.questions.map((question, index) => (
                <Quiz
                  key={index}
                  data={question}
                  onVerifyHandler={props.onVerifyHandler}
                />
              ))}
            </div>
          </div>
        )}
        {state.tab === 'paper' && (
          <Paper
            questions={props.paper.questions}
            onAnswerHandler={props.onAnswerHandler}
          />
        )}
      </div>

      <div className="IconContainer">
        <FloatingIcons icons={iconMap[props.type][state.tab]} />
      </div>
    </div>
  );
};

export default Unit;
