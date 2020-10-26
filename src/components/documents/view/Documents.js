import React from 'react';
import classNames from 'classnames';

import FloatingIcons from 'components/floating-icons';
import Modal from 'components/overlay-contexts/default-modal';
import arrow_left from 'resources/images/icon/arrow-left.png';
import background from 'resources/images/background/background-up.png';

import './Documents.scss';

const Documents = ({ email, visible, goBackHandler }) => {
  const title = 'OOPS..!\nNOT READY YET...';
  const body = `The feature is not ready yet!\nWe'll update the feature soon...\nWe will notify you when an update is available!`;
  const buttons = [
    {
      name: 'OK',
      onClickHandelr: goBackHandler,
    },
  ];

  const iconMap = {
    document: [
      {
        type: 'plus',
      },
      {
        type: 'arrow-down',
      },
    ],
  };

  return (
    <div
      className={classNames('Documents', { Invisible: !visible })}
      style={{ backgroundImage: 'url(' + background + ')' }}
    >
      <div className="Context">
        <div className="TopBar">
          <img className="GoBack" src={arrow_left} alt="" />
        </div>
        <div className="TitleBar">
          <div className="Title">MY DOCUMENTS</div>
        </div>
        <div className="PathBar">
          <div className="Path">/{email}/</div>
        </div>
        <div className="IconContainer">
          <FloatingIcons icons={iconMap['document']} />
        </div>
      </div>
      <div className="Cover" onClick={goBackHandler}>
        <Modal show={true} title={title} body={body} buttons={buttons} />
      </div>
    </div>
  );
};

export default Documents;
