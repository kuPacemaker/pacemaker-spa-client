import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { show } from 'store/modules/creators/modal';
import { createUnit } from 'store/modules/action/channel';
import CreateUnit from './view/CreateUnit';

const title = 'MAKE NEW UNIT';

const inputForms = [
  {
    title: 'TITLE',
    type: 'text',
    fontSize: '1.5em',
    max: 20,
  },
];

const CreateUnitContainer = ({
  visible,
  token,
  changeHandler,
  index,
  channelId,
  createUnit: create,
  show: showModalHandler,
}) => {
  const [unitName, setUnitName] = useState('');

  const onChangeHandler = (data) => {
    setUnitName(data);
  };

  const requestCreateUnit = () => {
    create({ token, channel: channelId, title: unitName }, (state, message) => {
      if (state) changeHandler();
      else showModalHandler('ERROR MODAL', { message });
    });
  };
  return (
    <CreateUnit
      show={visible}
      title={title}
      index={index}
      inputForms={inputForms}
      onChangeHandler={onChangeHandler}
      requestCreateUnit={requestCreateUnit}
    />
  );
};

const mapStateToProps = ({ account, channel }) => ({
  token: account.token,
  channelId: channel.data.id,
  index: channel.data.units.length + 1,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ createUnit, show }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateUnitContainer);
