import React from 'react';
import UnitThumbnail from 'components/unit-thumbnail';

const UnitList = ({ type, channel, units }) => (
  <div className="Container">
    {units.map((unit, index) => (
      <div key={index} className="Line">
        <UnitThumbnail
          channel={channel}
          unit={unit.id}
          index={unit.index}
          type={type}
          title={unit.title}
          state={unit.state}
        />
      </div>
    ))}
  </div>
);

export default UnitList;
