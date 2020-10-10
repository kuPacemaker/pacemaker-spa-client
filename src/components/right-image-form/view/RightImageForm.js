import React from 'react';
import Input from 'components/custom-input';
import arrow from 'resources/images/icon/arrow-right.png';
import './RightImageForm.scss';

const RightImageForm = ({
  title,
  subTitle,
  inputForms,
  onChangeHandler,
  signUpHandler,
  image,
}) => {
  return (
    <div className="RightImageForm">
      <div className="ContextBox">
        <div className="LoginBox">
          <div className="Title">{title}</div>
          <div className="SubTitle">{subTitle}</div>
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
                  draggable="false"
                  className="Arrow"
                  src={arrow}
                  alt=""
                  onClick={signUpHandler}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ImageBox">
        <img draggable="false" className="Image" src={image} alt="" />
      </div>
    </div>
  );
};

export default RightImageForm;
