import React from 'react';

import './Person.scss';

const Person = ({ type, name, position, email, page, isTag = false }) => {
  return (
    <div className={'Person' + (isTag ? ' Tag' : '')}>
      <div className="Name">
        <span>{name}</span>
      </div>
      <div className="Type">
        <span>{type}</span>
      </div>
      <div className="Position">
        {position.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
      <div className="EMail">
        <span>{email}</span>
      </div>
      <div className="Page">
        <span>{page}</span>
      </div>
    </div>
  );
};

export default Person;
