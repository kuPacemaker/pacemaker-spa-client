import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Newspeed from './view/Newspeed';
import { fetchNewspeed } from 'store/modules/action/newspeed';

const NewspeedContainer = (props) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
    // initialize newspeed
    // if (!props.peeds) props.fetchNewspeed();
    return () => {
      setVisible(false);
    };
  }, []);

  if (!props.peeds) return <div />;
  return <Newspeed peeds={props.peeds} visible={visible} />;
};

const mapStateToProps = ({ newspeed }) => {
  return {
    peeds: newspeed.data,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchNewspeed }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NewspeedContainer);
