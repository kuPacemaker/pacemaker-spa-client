import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Documents from './view/Documents';

const DocumentsContainer = ({ email }) => {
  const history = useHistory();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    return () => setVisible(false);
  }, []);

  return (
    <Documents email={email} visible={visible} goBackHandler={history.goBack} />
  );
};

const mapStateToProps = ({ account }) => ({
  email: account.id,
});

export default connect(mapStateToProps, null)(DocumentsContainer);
