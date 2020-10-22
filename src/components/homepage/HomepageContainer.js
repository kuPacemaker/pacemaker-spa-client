import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Homepage from './view/Homepage';

const HomePageContainer = ({ preface, token }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
  }, []);
  return <Homepage preface={preface} token={token} visible={visible} />;
};

const mapStateToProps = ({ account }) => ({
  token: account.token,
});

export default connect(mapStateToProps, null)(HomePageContainer);
// export default HomePageContainer;
