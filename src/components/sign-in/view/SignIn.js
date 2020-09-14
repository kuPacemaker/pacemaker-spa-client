import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.scss';
import Input from 'components/custom-input';
import image from 'resources/images/signin-image.png';
import arrow from './resources/images/arrow.png';
import LocalPath from 'local-path';

const SignIn = ({ signinApi }) => {
  const signInHandler = () => {};
  const handleCreate = (data) => {
    console.log(data);
  };
  const imageText = 'START A PERFECT MARATHON WITH PACEMAKER';
  const goSignUp = 'I’M NOT A MEMBER YET';
  const goFindAccount = 'I FORGOT MY ACCOUNT';
  const state = {
    id: '',
    pw: '',
  };
  return (
    <div className="SignIn">
      <div className="ContextBox">
        <div className="LoginBox">
          <div className="Title">LOGIN</div>
          <div className="InputFiled">
            <div className="Decoration">
              <div className="InputLine">
                <div className="Input">
                  <Input title="E-MAIL" size="1.25em" />
                </div>
              </div>
              <div className="InputLine">
                <div className="Input">
                  <Input title="PASSWORD" size="1.25em" />
                </div>
              </div>
              <img
                className="Arrow"
                src={arrow}
                alt=""
                onClick={signInHandler}
              />
              <div className="InputLine"></div>
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

        {/* <Input
          title="E-MAIL"
          placeHolder=""
          value={state.id}
          type="text"
          onCreate={handleCreate}
        />
        <Input
          title="PASSWORD"
          placeHolder=""
          value={state.pw}
          type="password"
        /> */}
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

export default SignIn;
