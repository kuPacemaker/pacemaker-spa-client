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
    ready: true,
    reservation: false,
    rotate: false,
  });

  const [tab, setTab] = useState(props.tab);

  const history = useHistory();

  const quizContainer = useRef(null);

  useEffect(() => {
    const staging = props.paper.questions.filter(
      (question) => !question.verified
    );
    setState({
      ...state,
      ready: staging.length === 0,
    });
    setTab('upload');
  }, [props.paper.questions]);

  useEffect(() => {
    if (props.document.id && props.document.visible) {
      setTab('document');
    }
  }, []);

  const showReservation = () => {
    setState({ ...state, reservation: !state.reservation });
  };

  const changeTab = (name) => () => {
    setTab(name);
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
          type: 'qa',
          onClickHandler: () => props.showModalHandler('QA'),
        },
        {
          type: 'upload_line',
          onClickHandler: () => props.showModalHandler('SUBMIT DOCUMENT'),
        },
      ],
      edit: [
        {
          type: 'cross',
          onClickHandler: props.cancelDoceument(changeTab('document')),
        },
        {
          type: 'check',
          onClickHandler: props.updateDocument(changeTab('document')),
        },
      ],
      upload: [
        {
          type: 'check',
          onClickHandler: props.verifyPaper,
          disable: state.ready,
        },
        {
          type: 'arrow-down',
          onClickHandler: () => {},
          rotate: state.rotate,
        },
      ],
    },
    runner: {
      document: [
        {
          type: 'qa',
          onClickHandler: () => props.showModalHandler('QA'),
        },
      ],
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
        {tab === 'upload' && state.ready && (
          <Reservation
            onClickHandler={showReservation}
            hide={!state.reservation}
          />
        )}
      </div>

      <div className="Context">
        {tab === 'root' && (
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
        {tab === 'document' && (
          <div className="DocumentContainer">
            <Document
              type={props.type}
              title={props.document.title}
              body={props.document.body}
              changeTab={changeTab}
            />
          </div>
        )}
        {tab === 'edit' && (
          <div className="DocumentContainer">
            <EditDocument
              title={props.document.title}
              body={props.document.body}
              documentHandler={props.documentHandler}
            />
          </div>
        )}
        {tab === 'upload' && (
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
        {tab === 'paper' && (
          <Paper
            questions={props.paper.questions}
            onAnswerHandler={props.onAnswerHandler}
          />
        )}
      </div>

      <div className="IconContainer">
        <FloatingIcons icons={iconMap[props.type][tab]} />
      </div>
    </div>
  );
};

export default Unit;
