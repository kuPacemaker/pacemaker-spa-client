import React from 'react';

const DocumentEdit = ({ title, body, documentHandler }) => (
  <div>
    <div className="DocumentTitle">
      <input
        maxLength={72}
        value={title}
        onChange={(e) => documentHandler('title')(e.target.value)}
      />
    </div>
    <textarea
      className="DocumentBody"
      value={body}
      onChange={(e) => documentHandler('body')(e.target.value)}
    />
  </div>
);

export default DocumentEdit;
