import React from 'react';

import './AccessCode.scss';

const AccessCode = ({ data }) => {
  return (
    <div className="AccessCode">
      <div className="Context">
        <div className="Title">
          Channel Code
        </div>
        <div className="Content">
          {data && data.code}
        </div>
      </div>
    </div>
  )
};

export default AccessCode;
