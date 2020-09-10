import React from 'react';
import concepts from 'resources/images/aboutus-image.png';
import './About.scss';

const About = ({ articles }) => {
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
