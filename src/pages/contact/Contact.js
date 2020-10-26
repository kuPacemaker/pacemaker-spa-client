import React from 'react';
import Contact from 'components/contact';

const collaborators = [
  {
    name: 'Kelvin Kwak',
    position: ['Project Manager', 'Service Architect', 'Frontend Developer'],
    email: 'lunox273@gmail.com',
    github: 'https://github.com/KLumy',
  },
  {
    name: 'binchoo',
    position: ['NLP Researcr', 'Server Infra', 'QA/QG Service Developer'],
    email: 'jbinchoo@gmail.com',
    github: 'https://github.com/binchoo',
  },
  {
    name: 'Andrew Chan',
    position: ['Backend Developer', 'Backend Designer', ''],
    email: 'lunox273@gmail.com',
    github: 'https://github.com/KLumy',
  },
  {
    name: 'Lumy Kelvin',
    position: ['Project Manager', '', ''],
    email: 'lunox273@gmail.com',
    github: 'https://github.com/KLumy',
  },
];

const contributors = [
  {
    name: 'Changhoon Lee',
    position: ['Brand Marketer', 'Web Designer', ''],
    email: 'lsgrt77@gmail.com',
    github: 'https://www.instagram.com/chhn_hoon/',
  },
  {
    name: 'Hanbum Lee',
    position: ['Frontend Developer', 'Fallback Developer', ''],
    email: 'lkanen16@gmail.com',
    github: 'https://github.com/Laki16',
  },
];

const ContactPage = () => (
  <Contact collaborators={collaborators} contributors={contributors} />
);

export default ContactPage;
