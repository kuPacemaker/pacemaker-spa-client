import React from 'react';
import Input from 'components/custom-input';
import arrow from './resources/images/arrow.png';
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
                      onChangeHandler={onChangeHandler(input.title)}
                    />
                  </div>
                </div>
              ))}
              {/* <div className="InputLine">
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
              </div> */}
              <div className="InputLine">
                <img
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
        <img className="Image" src={image} alt="" />
      </div>
    </div>
  );
};

export default RightImageForm;
