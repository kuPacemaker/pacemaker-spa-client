import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import Images from 'resources/images';

import { requestSignIn } from 'store/modules/action/account';
import { getBoard } from 'store/modules/action/board';
import { decode } from 'common/security/common';
import RootPage from './RootPage';

const preload = (images) => {
  for (const key in images) {
    if (images.hasOwnProperty(key)) {
      const element = images[key];
      let image = new Image();
      image.src = element;
    }
  }
};

const RootPageContainer = (props) => {
  useEffect(() => {
    if (localStorage.hasOwnProperty('account')) {
      try {
        props.requestSignIn(decode(localStorage.getItem('account')), () => {
          props.getBoard(props.token);
        });
      } catch (e) {
        console.log(e);
      }
    }
  }, []);
  if (props.token === null) return <Redirect to="/" />;
  return <RootPage />;
};

const mapStateToProps = ({ account }) => ({
  token: account.token,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ requestSignIn, getBoard }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RootPageContainer);
