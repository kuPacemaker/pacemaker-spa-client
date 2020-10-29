import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { show } from 'store/modules/creators/modal';
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
  show,
}) => {
  const [unitName, setState] = useState('');

  const onChangeHandler = (data) => {
    setState(data);
  };

  const requestEditUnit = () => {
    edit({ token, channel, unit, title: unitName }, (state, message) => {
      if (state) changeHandler();
      else show('ERROR MODAL', { message });
    });
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
  bindActionCreators({ editUnit, show }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditUnitContainer);
