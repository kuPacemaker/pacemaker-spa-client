import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';

import { requestSignIn } from 'store/modules/action/account';
import { refresh } from 'store/modules/action/refresh';
import LocalPath from 'common/local-path';
import { decode } from 'common/security/common';
import RootPage from './RootPage';

// import Images from 'resources/images';
// const preload = (images) => {
//   for (const key in images) {
//     if (images.hasOwnProperty(key)) {
//       const element = images[key];
//       let image = new Image();
//       image.src = element;
//     }
//   }
// };

const RootPageContainer = (props) => {
  useEffect(() => {
    if (localStorage.hasOwnProperty('account')) {
      try {
        props.requestSignIn(
          decode(localStorage.getItem('account')),
          (token) => {
            props.refresh({ token });
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
        props.refresh({ token: props.token });
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
  bindActionCreators({ requestSignIn, refresh }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RootPageContainer);
