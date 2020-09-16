import React from 'react';
import classNames from 'classnames';

import './Overlay.scss';

const Overlay = ({ show, type, change }) => {
  let model = '';
  return (
    <div className="Overlay">
      <div
        className={classNames('OverlayBackground', 'AnimateDom', {
          Show: show,
          Hide: !show,
        })}
        onClick={() => change('')}
      >
        {type}
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
