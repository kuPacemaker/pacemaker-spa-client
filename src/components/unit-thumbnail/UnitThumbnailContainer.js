import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { show } from 'store/modules/creators/modal';
import { LocalMainPage } from 'common/local-path';
import UnitThumbnail from './view/UnitThumbnail';

const onClickHandler = (historyHandler) => (type, channel, unit) => (e) => {
  historyHandler(type, channel, unit, e.target.name);
};

const UnitThumbnailContainer = (props) => {
  const history = useHistory();

  const historyHandler = (type, channel, unit, tab = 'root') => {
    history.push(
      `${LocalMainPage.unit.root}${type}?channel=${channel}&id=${unit}&tab=${tab}`
    );
  };
  const showModalHandler = (modal, token, channel, index, unit) => (
    type
  ) => () => {
    switch (type) {
      case 'remove':
        modal('REMOVE UNIT', {
          token,
          channel,
          unit,
        });
        break;
      case 'edit':
        modal('EDIT UNIT', {
          token,
          channel,
          index,
          unit,
          placeholder: props.title,
        });
        break;
      default:
        break;
    }
  };

  return (
    <UnitThumbnail
      type={props.type}
      index={props.index}
      title={props.title}
      state={props.state}
      onClickHandler={onClickHandler(historyHandler)(
        props.type,
        props.channel,
        props.unit
      )}
      showModalHandler={showModalHandler(
        props.show,
        props.token,
        props.channel,
        props.index,
        props.unit
      )}
    />
  );
};

const mapStateToProps = ({ account }) => ({
  token: account.token,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ show }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnitThumbnailContainer);
