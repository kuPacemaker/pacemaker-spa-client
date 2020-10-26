import React from 'react';
import classNames from 'classnames';

import concepts from 'resources/images/concept/aboutus-image.jpg';
import background from 'resources/images/background/background-right.png';

import './Contact.scss';

const Contact = ({ collaborators, contributors, visible }) => {
  return (
    <div
      className={classNames('About', { Invisible: !visible })}
      style={{ backgroundImage: 'url(' + background + ')' }}
    >
      <div className="context">
        <img
          draggable="false"
          className="ConceptsImage"
          src={concepts}
          alt=""
        />
        <div className="ArticleBox">
          {collaborators.map((collaborator, index) => (
            <div key={index}>
              {collaborator.name}={collaborator.position}={collaborator.email}=
              {collaborator.github}
            </div>
          ))}
          {contributors.map((contributor, index) => (
            <div key={index}>
              {contributor.name}={contributor.position}={contributor.email}=
              {contributor.github}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
