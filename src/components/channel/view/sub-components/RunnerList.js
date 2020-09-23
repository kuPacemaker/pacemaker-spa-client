import React from 'react';

const RunnerList = ({ runners }) => (
  <div className="Container">
    {runners.map((runner, index) => (
      <div key={index} className="Line">
        <div key={index} className="Runner">
          {runner}
        </div>
      </div>
    ))}
  </div>
);

export default RunnerList;
