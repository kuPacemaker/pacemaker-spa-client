import React from 'react';
import { useHistory } from 'react-router-dom';

import { LocalMainPage } from 'local-path';
import UnitThumbnail from './view/UnitThumbnail';

const onIconClickHandler = (history) => (channel, id, type) => (e) => {
  console.log(channel, id, type, e.target.name);
  // let path = '';

  switch (e.target.name) {
    case 'edit':
      // open modal
      // path = LocalMainPage
      break;
    case 'document':
      //
      break;
    case 'upload':
      break;
    case 'remove':
      break;
    case 'quiz':
      break;
    case 'answer':
      break;
    default:
      return;
  }
  // history.push(path);
};

const onUnitClickHandler = (history) => (channel) => (type, id) => () => {
  const path =
    LocalMainPage.unit.root + type + '?channel=' + channel + '&id=' + id;
  history.push(path);
};

const UnitThumbnailContainer = ({ type, channel, id, title, state }) => {
  const history = useHistory();

  return (
    <UnitThumbnail
      type={type}
      id={id}
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
