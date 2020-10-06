import React from 'react';
import classNames from 'classnames';

import './AccessCode.scss';

const AccessCode = ({ visible, data }) => {
  return (
    <div className="AccessCode">
      <div
        className={classNames('Context', {
          Show: visible,
          Hide: !visible,
        })}
      >
        <div className="Title">CHANNEL CODE</div>
        <div className="Content">{data && data.code}</div>
      </div>
    </div>
  );
};

export default AccessCode;
