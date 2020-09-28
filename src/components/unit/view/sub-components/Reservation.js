import React from 'react';
import classNames from 'classnames';
import './Reservation.scss';

import upload from 'resources/images/icon/upload_line.png';
import remove from 'resources/images/icon/cross.png';

const Reservation = ({ onReservationHandler, onClickHandler, hide }) => {
  return (
    <div className="Reservation">
      <div className="TitleButton" onClick={onClickHandler}>
        MAKE RESERVATION
      </div>
      <div
        className={classNames('ReservationTable', {
          Hide: hide,
        })}
      >
        <div className="Time Option">
          <div className="Title">TIME</div>
          <div className="Context">
            <span>A.</span>
            <span>S.</span>
            <span>A.</span>
            <span>P.</span>
          </div>
        </div>
        <div className="Number Option">
          <div className="Title">NUMBER</div>
          <div className="Context">
            <span>MAX</span>
          </div>
        </div>
        <div className="Duration Option">
          <div className="Title">DURATION</div>
          <div className="Context">
            <span>INF.</span>
            HOURE
          </div>
        </div>
        <div className="IconSet">
          <img
            className="Icon"
            src={upload}
            alt=""
            onClick={onReservationHandler}
          />
          <img className="Icon" src={remove} alt="" onClick={onClickHandler} />
        </div>
      </div>
    </div>
  );
};

export default Reservation;
