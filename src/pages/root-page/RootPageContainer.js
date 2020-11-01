import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';

import { requestSignIn } from 'store/modules/action/account';
import { show } from 'store/modules/creators/modal';
import { refresh } from 'store/modules/action/refresh';
import LocalPath from 'common/local-path';
import { decode } from 'common/security/common';
import RootPage from './RootPage';
import { preload } from 'common/utility/preload';

import Images from 'resources/images';

const RootPageContainer = (props) => {
  useEffect(() => {
    preload(Images);
    if (localStorage.hasOwnProperty('account')) {
      try {
        props.requestSignIn(
          decode(localStorage.getItem('account')),
          (success, token) => {
            if (success)
              props.refresh({ token }, (success, message) => {
                if (success);
                else props.show('ERROR MODAL', { message });
              });
            else props.show('ERROR MODAL', { message: 'Invalid account' });
          }
        );
      } catch (e) {
        console.log(e);
      }
    }
  }, []);

  const history = useHistory();
  const [intervalId, setIntervalId] = useState(0);
  useEffect(() => {
    if (props.token === null) {
      clearInterval(intervalId);
      setIntervalId(0);
      history.push(LocalPath.root);
      return;
    }
    if (intervalId === 0) {
      const id = setInterval(() => {
        props.refresh({ token: props.token }, (success, message) => {
          if (success);
          else props.show('ERROR MODAL', { message });
        });
      }, 30000);
      setIntervalId(id);
    }
  }, [props.token]);

  return <RootPage />;
};

const mapStateToProps = ({ account }) => ({
  token: account.token,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ requestSignIn, refresh, show }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RootPageContainer);
