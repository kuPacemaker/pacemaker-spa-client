import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Images from 'resources/images';

import { requestSignIn } from 'store/modules/action/account';
import { LocalMainPage } from 'common/local-path';

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
    console.log(localStorage.hasOwnProperty('account'));
    console.log(localStorage);
  }, []);
  return <RootPage />;
};

const mapStateToProps = ({ account }) => ({
  token: account.token,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ requestSignIn }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RootPageContainer);
