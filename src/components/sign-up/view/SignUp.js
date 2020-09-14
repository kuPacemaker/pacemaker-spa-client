import React from 'react';
import { Link } from 'react-router-dom';
import Input from 'components/custom-input';
import image from 'resources/images/signup-image.png';
import arrow from './resources/images/arrow.png';
import LocalPath from 'local-path';
import './SignUp.scss';

const SignUp = ({ title, subTitle, onChangeHandler, signUpHandler }) => {
  return (
    <div className="SignUp">
      <div className="ContextBox">
        <div className="LoginBox">
          <div className="Title">{title}</div>
          <div className="SubTitle">{subTitle}</div>
          <div className="InputFiled">
            <div className="Decoration">
              <div className="InputLine">
                <div className="Input">
                  <Input
                    title="NAME"
                    type="text"
                    size="1.35em"
                    onChangeHandler={onChangeHandler('NAME')}
                  />
                </div>
              </div>
              <div className="InputLine">
                <div className="Input">
                  <Input
                    title="E-MAIL"
                    type="email"
                    size="1.35em"
                    onChangeHandler={onChangeHandler('E-MAIL')}
                  />
                </div>
              </div>
              <div className="InputLine">
                <div className="Input">
                  <Input
                    title="PASSWORD"
                    type="password"
                    size="1.35em"
                    onChangeHandler={onChangeHandler('PASSWORD')}
                  />
                </div>
              </div>
              <div className="InputLine">
                <div className="Input">
                  <Input
                    title="CONFIRM PASSWORD"
                    type="password"
                    size="1.35em"
                    onChangeHandler={onChangeHandler('CONFIRM PASSWORD')}
                  />
                </div>
                <img
                  className="Arrow"
                  src={arrow}
                  alt=""
                  onClick={signUpHandler}
                />
              </div>

              <div className="InputLine"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="ImageBox">
        <img className="Image" src={image} alt="" />
      </div>
    </div>
  );
};

export default SignUp;
