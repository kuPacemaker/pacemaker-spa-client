import React from 'react';
import About from 'components/about-us';

const articles = [
  ['Title', 'ABOUT US'],
  [
    'MainArticle',
    `FOR A PERFECT REMOTE CLASS, 
    YOU NEED A PERFET PACEMAKER 
    TO RUN WITH YOU`,
  ],
  [
    'SubArticle',
    `These days, when I have to lead a class that I never had 
  before, I realize that finishing the semester safely is like a 
  marathon. There’s more to worry about than before, but this 
  also means that our education is getting closer to the essence 
  than it is now.`,
  ],
  [
    'SubArticle',
    `Focus on the essence. PACEMAKER will help you finish your 
  class safely and easily and conveniently. The AI-based 
  automatic generation quiz allows attendance and diagnostic 
  trouble management.`,
  ],
];

const AboutUs = () => <About articles={articles} />;

export default AboutUs;
