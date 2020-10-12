import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createUnit } from 'store/modules/action/channel';
import EditUnit from './view/EditUnit';

const title = 'MAKE NEW UNIT';

const inputForms = [
  {
    title: 'TITLE',
    type: 'text',
    fontSize: '1.5em',
    max: 25,
  },
];

const EditUnitContainer = ({
  visible,
  token,
  changeHandler,
  index,
  channelId,
  createUnit: create,
}) => {
  const [state, setState] = useState({
    title: '',
  });

  const onChangeHandler = (type) => (data) => {
    switch (type) {
      case 'TITLE':
        setState({ ...state, title: data });
        return;
      default:
        return;
    }
  };

  const requestCreateUnit = () => {
    create({ token, id: channelId, title: state.title, index }, changeHandler);
  };
  return (
    <EditUnit
      show={visible}
      title={title}
      index={index}
      inputForms={inputForms}
      onChangeHandler={onChangeHandler}
      requestCreateUnit={requestCreateUnit}
    />
  );
};

const mapStateToProps = ({ account }) => ({
  token: account.token,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ createUnit }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditUnitContainer);
