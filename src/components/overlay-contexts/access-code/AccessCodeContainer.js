import React from 'react';
import AccessCode from './view/AccessCode';
import { connect } from 'react-redux';

const AccessCodeContainer = (props) => {
  return <AccessCode data={props.data}/>;
};

const mapStateToProps = (state) => ({
  data: state.channel.channelData,
});

export default connect(mapStateToProps, null)(AccessCodeContainer);
