import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestSignOut } from 'store/modules/action/account';

import Modal from '../default-modal';
/**
 * 현재 이 모달을 사용하는 경우는 단일 버튼에 의한 단순 정보전달.
 * 로그인 실패, 회원가입 성공/실패, 회원찾기 성공/실패, 회원정보 수정 성공/실패
 */

const title = 'OPPS!\nSOMETHING WRONG...';
const message =
  '\nThe request was rejected by the PACEMAKER server!\nIf the same problem persists, please contact us.';
const ErrorModalContainer = (props) => {
  useEffect(() => {
    if (props.message === 'Token is not exist') props.requestSignOut();
  }, [props.message]);

  if (props.message === undefined) return <div />;
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
      title={title}
      body={props.message + message}
      buttons={buttons}
    />
  );
};

const mapStateToProps = ({ modal }) => ({
  message: modal.argument.message,
  callbackHandler: modal.argument.callbackHandler,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ requestSignOut }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorModalContainer);
