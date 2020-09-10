import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.scss';
import Input from 'components/custom-input';
import image from 'resources/images/signin-image';
import LocalPath from 'local-path';

const SignIn = ({ text, signinApi }) => {
  const signInHandler = () => {};
  return (
    <div className="SignIn">
      <div className="ContextBox">
        <div></div>
        <Input />
        <Input />
        <img
          className="Arrow"
          src="./resources/images/arrow.png"
          alt=""
          onClick={signInHandler}
        />
        <div className="ActiveLink"></div>
        <Link to={LocalPath.admission.signup}></Link>
        <div className="ActiveLink"></div>
        <Link to={LocalPath.admission.findaccount}></Link>
      </div>
      <div className="LeftImage">
        <img className="Image" src={image} alt="" />
        <div className="InnerText">{text}</div>
        <img
          className="Arrow"
          src="./resources/images/arrow.png"
          alt=""
          onClick={signInHandler}
        />
      </div>
    </div>
  );
};

export default SignIn;
