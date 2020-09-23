import React from 'react';
import UnitThumbnail from 'components/unit-thumbnail';

const UnitList = ({ type, channelId, units }) => (
  <div className="Container">
    {units.map((unit, index) => (
      <div key={index} className="Line">
        <UnitThumbnail
          channel={channelId}
          id={unit.id}
          type={type}
          title={unit.title}
          state={unit.state}
        />
      </div>
    ))}
  </div>
);

export default UnitList;
