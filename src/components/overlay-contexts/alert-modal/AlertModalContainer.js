import React from 'react';
import { connect } from 'react-redux';
import Modal from '../default-modal';
/**
 * 현재 이 모달을 사용하는 경우는 단일 버튼에 의한 단순 정보전달.
 * 로그인 실패, 회원가입 성공/실패, 회원찾기 성공/실패, 회원정보 수정 성공/실패
 */
const AlertModalContainer = (props) => {
  if (props.argument === undefined) return <div />;
  const buttons = [
    {
      name: 'OK',
      onClickHandelr: () => {
        if (props.argument.callback) props.argument.callback();
        props.changeHandler();
      },
    },
  ];
  return (
    <Modal
      show={props.visible}
      changeHandler={props.changeHandler}
      title={props.argument.title}
      body={props.argument.body}
      buttons={buttons}
    />
  );
};

const mapStateToProps = ({ modal }) => ({
  argument: modal.argument,
});

export default connect(mapStateToProps, null)(AlertModalContainer);
