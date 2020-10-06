import React from 'react';
import classNames from 'classnames';

import Input from 'components/custom-input';
import arrow from 'resources/images/icon/arrow-right.png';
import { orderedImage } from 'resources/images/channel';

import './CreateChannel.scss';

const CreateChannel = ({
  show,
  title,
  inputForms,
  channelImage,
  onChangeHandler,
  changeImageHandler,
}) => {
  return (
    <div className="CreateChannel">
      <div className="Title">{title}</div>
      <div className="InputForms">
        {inputForms.map((input, index) => (
          <div key={index} className="InputLine">
            <div
              key={index}
              className={classNames('Input', {
                Show: show,
                Hide: !show,
              })}
            >
              <Input
                title={input.title}
                type={input.type}
                size={input.fontSize}
                maxLength={input.max}
                onChangeHandler={onChangeHandler(input.title)}
              />
            </div>
          </div>
        ))}
        <div className="InputLine">
          <div className="Start">
            <div className="Padding" />
            <div
              className={classNames('Button', { Show: show, Hide: !show })}
              onClick={() => console.log('Create Channel!')}
            >
              <img className="Arrow" src={arrow} alt="" />
              <span>START</span>
            </div>
          </div>
        </div>
      </div>
      <div className="ImageContainer">
        <img className="ChannelImage" src={orderedImage[channelImage]} alt="" />
        <div
          className={classNames('ChangeImage', { Show: show, Hide: !show })}
          onClick={changeImageHandler}
        >
          WANT OTHER PICS
        </div>
      </div>
    </div>
  );
};

export default CreateChannel;
