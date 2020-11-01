import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { show } from 'store/modules/creators/modal';
import { refresh } from 'store/modules/action/refresh';

import Newsfeed from './view/Newsfeed';

const NewsfeedContainer = (props) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (props.token === null) return;
    props.refreshHandler(props.token, (success, message) => {
      if (success);
      else props.showErrorHandler(message);
    });

    setVisible(true);
    return () => {
      setVisible(false);
    };
  }, []);

  if (!props.feeds) return <div />;
  return <Newsfeed feeds={props.feeds} visible={visible} />;
};

const mapStateToProps = ({ account, newsfeed }) => ({
  token: account.token,
  feeds: newsfeed.data,
});
const mapDispatchToProps = (dispatch) => ({
  refreshHandler: (token, callback) => dispatch(refresh({ token }, callback)),
  showErrorHandler: (message) => dispatch(show('ERROR MODAL', { message })),
});
export default connect(mapStateToProps, mapDispatchToProps)(NewsfeedContainer);
