import React from 'react';
import { useHistory } from 'react-router-dom';

import { LocalMainPage } from 'local-path';
import UnitThumbnail from './view/UnitThumbnail';

const UnitThumbnailContainer = ({ type, channel, id, title, state }) => {
  const history = useHistory();

  const onClickHandler = (channel, id, type) => (e) => {
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
  return (
    <UnitThumbnail
      type={type}
      id={id}
      title={title}
      state={state}
      onClickHandler={onClickHandler(channel, id, type)}
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
