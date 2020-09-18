import React from 'react';
import { Redirect } from 'react-router-dom';
import Channel from './view/Channel';

const channelDatas = {
  0: {
    title: 'Reviews of Student News',
    detail: 'Wed. 15:00~18:00',
    owner: 'Pr. Kelvin',
    code: 'XDWQAS221',
    image: 0,
    units: [
      {
        id: 1,
        title: '2020 Election',
      },
      {
        id: 2,
        title: 'Mosquitoes',
      },
      {
        id: 3,
        title: 'Food and Drink',
      },
      {
        id: 4,
        title: 'Architecture',
      },
      {
        id: 5,
        title: 'Impact Your World',
      },
    ],
    runners: ['AA', 'BB', 'CC', 'DD'],
  },
};

const ChannelContainer = ({ type, id }) => {
  if (!channelDatas.hasOwnProperty(id)) return <Redirect to="/" />;
  const data = channelDatas[id];
  const image = require(`resources/images/channel/channel-image-${0}.jpg`);
  return (
    <Channel
      channelId={id}
      title={data.title}
      detail={data.detail}
      owner={data.owner}
      image={image}
      channelCode={data.code}
      units={data.units}
      runners={data.runners}
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
export default ChannelContainer;
