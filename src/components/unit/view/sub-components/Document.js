import React from 'react';
import edit from 'resources/images/icon/edit.png';

const Document = ({ type, title, body, spans, changeTab }) => {
  return (
    <>
      <div className="DocumentTitle">
        <div>{title}</div>
        {type === 'leader' && (
          <img
            draggable="false"
            src={edit}
            alt=""
            onClick={changeTab('edit')}
          />
        )}
      </div>
      <div className="DocumentBody">
        {body.split('\n').map((l, i) => {
          let line = l;
          spans.forEach((span) => {
            line = line.replaceAll(span, `<b>${span}</b>`);
          });
          return <p key={i} dangerouslySetInnerHTML={{ __html: line }} />;
        })}
        )
      </div>
    </>
  );
};

export default Document;
