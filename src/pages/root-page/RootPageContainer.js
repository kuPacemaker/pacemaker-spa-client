import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Images from 'resources/images';

import { requestSignIn } from 'store/modules/action/account';
import { LocalMainPage } from 'common/local-path';
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
        props.requestSignIn(decode(localStorage.getItem('account')), () => {});
      } catch (e) {
        console.log(e);
      }
    }
  }, []);
  return <RootPage />;
};

const mapStateToProps = ({ account }) => ({
  token: account.token,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ requestSignIn }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RootPageContainer);
