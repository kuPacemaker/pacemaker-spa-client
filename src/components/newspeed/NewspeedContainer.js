import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Newspeed from './view/Newspeed';
import { fetchNewspeed } from 'store/modules/action/newspeed';

const NewspeedContainer = (props) => {
  useEffect(() => {
    // initialize newspeed
    if (!props.peeds) props.fetchNewspeed();
  }, []);

  if (!props.peeds) return <div />;
  return <Newspeed peeds={props.peeds} />;
};

const mapStateToProps = ({ newspeed }) => {
  return {
    peeds: newspeed.data,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchNewspeed }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NewspeedContainer);
