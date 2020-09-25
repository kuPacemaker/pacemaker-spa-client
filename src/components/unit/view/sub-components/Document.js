import React from 'react';
import edit from 'resources/images/icon/edit.png';

const Document = ({ type, title, body, changeTab }) => (
  <div>
    <div className="DocumentTitle">
      <div>{title}</div>
      {type === 'leader' && (
        <img src={edit} alt="" onClick={changeTab('document_edit')} />
      )}
    </div>
    <div className="DocumentBody">{body}</div>
  </div>
);

export default Document;
