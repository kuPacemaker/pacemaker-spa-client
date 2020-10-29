import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { refresh } from 'store/modules/action/refresh';

import Newsfeed from './view/Newsfeed';

const NewsfeedContainer = (props) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (props.token === null) return;
    props.refreshHandler(props.token);

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
  refreshHandler: (token) => dispatch(refresh({ token })),
});
export default connect(mapStateToProps, mapDispatchToProps)(NewsfeedContainer);
