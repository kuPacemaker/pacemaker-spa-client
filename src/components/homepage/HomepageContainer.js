import React from 'react';
import { connect } from 'react-redux';

import Homepage from './view/Homepage';

const HomePageContainer = ({ preface, token }) => {
  return <Homepage preface={preface} token={token} />;
};

const mapStateToProps = ({ account }) => ({
  token: account.token,
});

export default connect(mapStateToProps, null)(HomePageContainer);
