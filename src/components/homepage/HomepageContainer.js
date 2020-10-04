import React from 'react';
import { connect } from 'react-redux';

import Homepage from './view/Homepage';

const HomePageContainer = ({ preface, token }) => {
  return <Homepage preface={preface} token={token} />;
};

const mapStateToProps = ({ account }) => ({
  token: account.token,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
// export default HomePageContainer;
