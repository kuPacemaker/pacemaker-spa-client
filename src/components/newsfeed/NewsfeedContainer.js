import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Newsfeed from './view/Newsfeed';
import { fetchNewsfeed } from 'store/modules/action/newsfeed';

const NewsfeedContainer = (props) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
    // initialize newsfeed
    // if (!props.feeds) props.fetchNewsfeed();
    return () => {
      setVisible(false);
    };
  }, []);

  if (!props.feeds) return <div />;
  return <Newsfeed feeds={props.feeds} visible={visible} />;
};

const mapStateToProps = ({ newsfeed }) => {
  return {
    feeds: newsfeed.data,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchNewsfeed }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NewsfeedContainer);
