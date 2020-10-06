import React from 'react';
import { Link } from 'react-router-dom';
import './LeftImageFrom.scss';
import Input from 'components/custom-input';
import arrow from 'resources/images/icon/arrow-right.png';
import LocalPath from 'common/local-path';

const LeftImageFrom = ({
  title,
  imageText,
  goSignUp,
  goFindAccount,
  inputForms,
  onChangeHandler,
  signInHandler,
  image,
}) => {
  return (
    <div className="LeftImageFrom">
      <div className="ContextBox">
        <div className="LoginBox">
          <div className="Title">{title}</div>
          <div className="InputFiled">
            <div className="Decoration">
              {inputForms.map((input, index) => (
                <div key={index} className="InputLine">
                  <div key={index} className="Input">
                    <Input
                      title={input.title}
                      type={input.type}
                      size={input.fontSize}
                      maxLength={20}
                      onChangeHandler={onChangeHandler(input.title)}
                    />
                  </div>
                </div>
              ))}
              <div className="InputLine">
                <img
                  className="Arrow"
                  src={arrow}
                  alt=""
                  onClick={signInHandler}
                />
              </div>
            </div>
          </div>
          <div className="ActiveLink">
            <div>
              <Link to={LocalPath.admission.signup}>
                <span>{goSignUp}</span>
              </Link>
            </div>
            <div>
              <Link to={LocalPath.admission.findaccount}>
                <span>{goFindAccount}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="ImageBox">
        <img className="Image" src={image} alt="" />
        <div className="InnerText">
          <span>{imageText}</span>
          <img className="Arrow" src={arrow} alt="" onClick={signInHandler} />
        </div>
      </div>
    </div>
  );
};

export default LeftImageFrom;
