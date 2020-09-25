import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

import FloatingIcons from 'components/floating-icons';
import TopIconSet from './sub-components/TopIconSet';
import Document from './sub-components/Document';
import EditDocument from './sub-components/EditDocument';

import arrow_left from 'resources/images/icon/arrow-left.png';

import plus from 'resources/images/icon/plus.png';

import './Unit.scss';
// [{ type: 'arrow-down', onClickHandler: () => {} }];

const Unit = ({ type, channel, unit, documentHandler }) => {
  const [state, setState] = useState({ tab: 'document', rotate: false });

  const history = useHistory();

  const context = useRef(null);

  const changeTab = (name) => () => {
    console.log(name);
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
        <div className="Context">
          <div className="UnitIndex">Unit {unit.id}</div>
          <div className="UnitTitle">{unit.title}</div>
          <div className="UnitIconSet">
            <TopIconSet type={type} unit={unit} onClickHandler={changeTab} />
          </div>
        </div>
      </div>

      <div className="ContextContainer">
        <div
          className="Context"
          onWheel={onScrollObserver(context)}
          ref={context}
        >
          {state.tab === 'document' && (
            <Document
              type={type}
              title={unit.document.title}
              body={unit.document.body}
              changeTab={changeTab}
            />
          )}
          {state.tab === 'document_edit' && (
            <EditDocument
              title={unit.document.title}
              body={unit.document.body}
              documentHandler={documentHandler}
            />
          )}
          {state.tab === 'upload' && (
            <div>
              {unit.paper.questions.map((question, index) => (
                <div>{question.quiz}</div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="IconContainer">
        <FloatingIcons icons={iconMap[type][state.tab]} />
      </div>
    </div>
  );
};

export default Unit;
