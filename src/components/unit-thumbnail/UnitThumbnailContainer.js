import React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import { useHistory } from 'react-router-dom';
import { LocalMainPage } from 'common/local-path';
import UnitThumbnail from './view/UnitThumbnail';

const onIconClickHandler = (historyHandler) => (channel, id, type) => (e) => {
  const path = `${LocalMainPage.unit.root}${type}?channel=${channel}&id=${id}&tab=${e.target.name}`;
  historyHandler(path);
  // getUnitHandler({ token: token, channel: channel, unit: id }, () => {
  //   historyHandler(path);
  // });
};

const onUnitClickHandler = (historyHandler) => (channel) => (
  type,
  id
) => () => {
  const path = `${LocalMainPage.unit.root}${type}?channel=${channel}&id=${id}&tab=root`;
  historyHandler(path);
  // getUnitHandler({ token: token, channel: channel, unit: id }, () => {
  //   historyHandler(path);
  // });
};

const UnitThumbnailContainer = (props) => {
  const history = useHistory();

  return (
    <UnitThumbnail
      type={props.type}
      id={props.id}
      index={props.index}
      title={props.title}
      state={props.state}
      onIconClickHandler={onIconClickHandler(history.push)(
        props.channel,
        props.id,
        props.type,
        props.token
      )}
      onUnitClickHandler={onUnitClickHandler(history.push)(
        props.channel,
        props.token
      )}
    />
  );
};

// const mapStateToProps = ({ account }) => ({
//   token: account.token,
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({ getUnit }, dispatch);

// export default connect(mapStateToProps, null)(UnitThumbnailContainer);
export default UnitThumbnailContainer;
