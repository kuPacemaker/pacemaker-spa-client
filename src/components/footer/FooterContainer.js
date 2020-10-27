import React from 'react';

import Footer from './view/Footer';

const icons = ['Facebook', 'Instargram', 'Youtube'];

const clickEvent = (icon) => {
  let link = '';
  switch (icon) {
    case 'Facebook':
      link = 'https://www.facebook.com/';
      break;
    case 'Instargram':
      link = 'https://www.instagram.com/?hl=ko';
      break;
    case 'Youtube':
      link = 'https://www.youtube.com/';
      break;
    default:
      link = 'https://github.com/kuPacemaker';
      break;
  }
  window.open(link, '_blank').focus();
};

const FooterContainer = () => {
  return <Footer onClickHandler={clickEvent} icons={icons} />;
};

export default FooterContainer;
