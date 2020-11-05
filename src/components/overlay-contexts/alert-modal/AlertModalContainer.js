import React from 'react';
import { connect } from 'react-redux';
import Modal from '../default-modal';
/**
 * 현재 이 모달을 사용하는 경우는 단일 버튼에 의한 단순 정보전달.
 * 로그인 실패, 회원가입 성공/실패, 회원찾기 성공/실패, 회원정보 수정 성공/실패
 */
const AlertModalContainer = (props) => {
  const buttons = [
    {
      name: 'OK',
      onClickHandelr: () => {
        if (props.callbackHandler) props.callbackHandler();
        props.changeHandler();
      },
    },
  ];
  return (
    <Modal
      show={props.visible}
      changeHandler={props.changeHandler}
      title={props.title}
      body={props.body}
      buttons={buttons}
    />
  );
};

const mapStateToProps = ({ modal }) => ({
  title: modal.argument.title,
  body: modal.argument.body,
  callbackHandler: modal.argument.callbackHandler,
});

export default connect(mapStateToProps, null)(AlertModalContainer);
