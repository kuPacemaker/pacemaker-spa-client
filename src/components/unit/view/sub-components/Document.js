import React from 'react';
import edit from 'resources/images/icon/edit.png';
import { startUpperCase } from 'common/utility/string';

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
          if (l.length > 0) {
            let line = l;
            spans.forEach((span) => {
              const regExp = new RegExp(span, 'gi');
              line = line.replace(regExp, `<b>${startUpperCase(span)}</b>`);
            });
            return <p key={i} dangerouslySetInnerHTML={{ __html: line }} />;
          } else return null;
        })}
      </div>
    </>
  );
};

export default Document;
