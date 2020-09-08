import React from 'react';
import classnames from 'classnames';
import concepts from './resources/images/main-image.png';
import './About.scss';

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

const About = () => {
  return (
    <div className="About">
      <div className="context">
        <img className="ConceptsImage" src={concepts} alt="" />
        <div className="ArticleBox">
          {articles.map((article, i) => (
            <div key={i} className={article[0]}>
              {article[1].split('\n').map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
