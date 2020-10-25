import React from 'react';

import Contact from './view/Contact';

const ContactContainer = ({ collaborators, contributors }) => {
  return <Contact collaborators={collaborators} contributors={contributors} />;
};

export default ContactContainer;
