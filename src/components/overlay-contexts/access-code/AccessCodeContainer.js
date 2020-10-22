import React from 'react';
import AccessCode from './view/AccessCode';
import { connect } from 'react-redux';

const AccessCodeContainer = (props) => {
  return <AccessCode visible={props.visible} data={props.data} />;
};

const mapStateToProps = ({ channel }) => ({
  data: channel.data,
});

export default connect(mapStateToProps, null)(AccessCodeContainer);
