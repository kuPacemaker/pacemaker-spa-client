import React from 'react';
import classNames from 'classnames';

import './Overlay.scss';

const Overlay = ({ show, type, change }) => {
  let context = '';
  switch (type) {
    case 'MENU':
      context = <div>MENU</div>;
      break;
    case 'MY ACCOUNT':
      context = <div>MY ACCOUNT</div>;
      break;
    default:
  }
  return (
    <div className="Overlay">
      <div
        className={classNames('OverlayBackground', {
          Show: show,
          Hide: !show,
        })}
        onClick={() => change('')}
      ></div>
      <div className="Container">
        <div
          className={classNames('Context', {
            Show: show,
            Hide: !show,
          })}
        >
          {context}
        </div>
      </div>
    </div>
  );
};

// const mapStateToProps = ({ counter }) => ({
//   color: counter.color,
//   number: counter.number,
// });

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({ incrementAsync, decrement, getPost }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
export default Overlay;
