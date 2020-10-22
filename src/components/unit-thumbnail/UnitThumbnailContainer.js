import React from 'react';
import { useHistory } from 'react-router-dom';

import { LocalMainPage } from 'common/local-path';
import UnitThumbnail from './view/UnitThumbnail';

const onClickHandler = (historyHandler) => (type, channel, unit) => (e) => {
  // const path = `${LocalMainPage.unit.root}${type}?channel=${channel}&id=${id}&tab=${e.target.name}`;
  historyHandler(type, channel, unit, e.target.name);
};

// const onUnitClickHandler = (historyHandler) => (type, channel, unit) => () => {
//   // const path = `${LocalMainPage.unit.root}${type}?channel=${channel}&id=${id}&tab=root`;
//   historyHandler(type, channel, unit);
// };

const UnitThumbnailContainer = (props) => {
  const history = useHistory();

  const historyHandler = (type, channel, unit, tab = 'root') => {
    history.push(
      `${LocalMainPage.unit.root}${type}?channel=${channel}&id=${unit}&tab=${tab}`
    );
  };

  return (
    <UnitThumbnail
      type={props.type}
      id={props.id}
      index={props.index}
      title={props.title}
      state={props.state}
      onClickHandler={onClickHandler(historyHandler)(
        props.type,
        props.channel,
        props.id
      )}
      // onUnitClickHandler={onUnitClickHandler(historyHandler)(props.channel)}
    />
  );
};

export default UnitThumbnailContainer;
