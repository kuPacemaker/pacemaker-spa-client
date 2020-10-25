import React from 'react';
import edit from 'resources/images/icon/edit.png';

const Document = ({ type, title, body, changeTab }) => (
  <>
    <div className="DocumentTitle">
      <div>{title}</div>
      {type === 'leader' && (
        <img draggable="false" src={edit} alt="" onClick={changeTab('edit')} />
      )}
    </div>
    <div className="DocumentBody">
      {body.split('\n').map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </div>
  </>
);

export default Document;
