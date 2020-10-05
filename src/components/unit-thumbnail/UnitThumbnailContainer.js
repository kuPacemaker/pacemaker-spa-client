import React from 'react';
import { useHistory } from 'react-router-dom';

import { LocalMainPage } from 'common/local-path';
import UnitThumbnail from './view/UnitThumbnail';

const onIconClickHandler = (history) => (channel, id, type) => (e) => {
  console.log(channel, id, type, e.target.name);
  const path = `${LocalMainPage.unit.root}${type}?channel=${channel}&id=${id}&tab=${e.target.name}`;
  history.push(path);
};

const onUnitClickHandler = (history) => (channel) => (type, id, tab) => () => {
  const path = `${LocalMainPage.unit.root}${type}?channel=${channel}&id=${id}&tab=${tab}`;
  history.push(path);
};

const UnitThumbnailContainer = ({ type, channel, id, index, title, state }) => {
  const history = useHistory();

  return (
    <UnitThumbnail
      type={type}
      id={id}
      index={index}
      title={title}
      state={state}
      onIconClickHandler={onIconClickHandler(history)(channel, id, type)}
      onUnitClickHandler={onUnitClickHandler(history)(channel)}
    />
  );
};

// const mapStateToProps = ({ counter }) => ({
//   color: counter.color,
//   number: counter.number,
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({ incrementAsync, decrement, getPost }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
export default UnitThumbnailContainer;
