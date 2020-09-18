import React from 'react';

import edit from 'resources/images/icon/edit.png';
import document from 'resources/images/icon/document.png';
import upload from 'resources/images/icon/upload.png';
import remove from 'resources/images/icon/remove.png';

import './UnitThumbnail.scss';

const UnitThumbnail = ({ id, title, type, states }) => {
  return (
    <div className="UnitThumbnail">
      <div className="ContextSet">
        <div className="UnitIndex">Unit {id}</div>
        <div className="UnitName">{title}</div>
      </div>
      <div className="IconSet">
        <img className="Icon" src={edit} alt="" />
        <img className="Icon" src={document} alt="" />
        <img className="Icon" src={upload} alt="" />
        <img className="Icon" src={remove} alt="" />
      </div>
    </div>
  );
};

export default UnitThumbnail;
