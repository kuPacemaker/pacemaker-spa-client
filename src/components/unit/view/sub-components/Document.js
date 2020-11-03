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
          if (l.length > 0) {
            let line = l;
            spans.forEach((span) => {
              const regExp = new RegExp(span, 'g');
              line = line.replace(regExp, `<b>${span}</b>`);
              //FIXME: 현재 대소문자 문제 발생. 위 방식으로 할 경우 강제로 소문자행
              // line = line.replaceAll(span, `<b>${span}</b>`);
            });
            return <p key={i} dangerouslySetInnerHTML={{ __html: line }} />;
          }
        })}
      </div>
    </>
  );
};

export default Document;
