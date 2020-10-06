import React from 'react';
import edit from 'resources/images/icon/edit.png';

const Document = ({ type, title, body, changeTab }) => (
  <>
    <div className="DocumentTitle">
      <div>{title}</div>
      {type === 'leader' && (
        <img src={edit} alt="" onClick={changeTab('edit')} />
      )}
    </div>
    <div className="DocumentBody">{body}</div>
  </>
);

export default Document;
