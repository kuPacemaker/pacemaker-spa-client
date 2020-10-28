import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { editUnit } from 'store/modules/action/channel';
import EditUnit from './view/EditUnit';

const title = 'EDIT UNIT';

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
  channel,
  unit,
  index,
  placeholder,
  changeHandler,
  editUnit: edit,
}) => {
  const [unitName, setState] = useState('');

  const onChangeHandler = (data) => {
    setState(data);
  };

  const requestEditUnit = () => {
    edit({ token, channel, index, unit, title: unitName }, changeHandler);
  };
  return (
    <EditUnit
      show={visible}
      title={title}
      index={index}
      placeholder={placeholder}
      inputForms={inputForms}
      onChangeHandler={onChangeHandler}
      requestEditUnit={requestEditUnit}
    />
  );
};

const mapStateToProps = ({ account, modal }) => ({
  token: account.token,
  channel: modal.argument.channel,
  unit: modal.argument.unit,
  index: modal.argument.index,
  placeholder: modal.argument.placeholder,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ editUnit }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditUnitContainer);
