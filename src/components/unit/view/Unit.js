import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';

import arrow_left from 'resources/images/icon/arrow-left.png';
import arrow_down from 'resources/images/icon/arrow-down.png';

import edit from 'resources/images/icon/edit.png';
import document from 'resources/images/icon/document.png';
import upload from 'resources/images/icon/upload.png';
import remove from 'resources/images/icon/remove.png';
import quiz from 'resources/images/icon/quiz.png';
import answer from 'resources/images/icon/answer.png';

import plus from 'resources/images/icon/plus.png';

import './Unit.scss';

const Unit = ({ type, channel, unit }) => {
  const [state, setState] = useState({ tab: 'units', isBottom: false });
  const history = useHistory();
  const context = useRef(null);

  const onScrollObserver = (ref) => () => {
    const target = ref.current;
    const height = target.scrollHeight - target.offsetHeight;
    if (target.scrollTop < height) setState({ ...state, isBottom: false });
    else setState({ ...state, isBottom: true });
  };

  const goBack = () => {
    history.goBack();
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
            <img className="Icon" src={document} alt="" />
            <img className="Icon" src={upload} alt="" />
            <img className="Icon" src={remove} alt="" />
          </div>
        </div>
      </div>
      <div className="ContextContainer">
        <div className="Context"></div>
      </div>
      <div
        className="Context"
        onWheel={onScrollObserver(context)}
        ref={context}
      ></div>
      <div className="FloatingIconSet">
        <img className="Icon Plus" src={plus} alt="" />
        <img
          className={classNames('Icon', 'ArrowDown', {
            Up: state.isBottom,
            Down: !state.isBottom,
          })}
          src={arrow_down}
          alt=""
        />
      </div>
    </div>
  );
};

export default Unit;
