import React from 'react';
import Contact from 'components/contact';
const collaborators = [
  'FOR A PERFECT REMOTE CLASS',
  'YOU NEED A PERFECT PACEMAKER',
  'TO RUN WITH YOU',
];

const contributors = [
  'FOR A PERFECT REMOTE CLASS',
  'YOU NEED A PERFECT PACEMAKER',
  'TO RUN WITH YOU',
];

const ContactPage = () => (
  <Contact collaborators={collaborators} contributors={contributors} />
);

export default ContactPage;
