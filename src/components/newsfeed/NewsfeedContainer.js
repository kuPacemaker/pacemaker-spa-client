import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Newsfeed from './view/Newsfeed';

const NewsfeedContainer = (props) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
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

export default connect(mapStateToProps, null)(NewsfeedContainer);
