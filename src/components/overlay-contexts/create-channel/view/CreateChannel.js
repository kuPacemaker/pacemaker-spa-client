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
  requestCreateChannel,
}) => {
  return (
    <div className="CreateChannel">
      <div className="Title">{title}</div>
      <div className="InputForms">
        {inputForms.map((input, index) => (
          <div key={index} className="InputLine">
            <div
              draggable="false"
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
              onClick={requestCreateChannel}
            >
              <img draggable="false" className="Arrow" src={arrow} alt="" />
              <span>START</span>
            </div>
          </div>
        </div>
      </div>
      <div className="ImageContainer">
        <img
          draggable="false"
          className="ChannelImage"
          src={orderedImage[channelImage]}
          alt=""
        />
        <div
          draggable="false"
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
