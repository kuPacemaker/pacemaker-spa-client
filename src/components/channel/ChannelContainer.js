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
        index: 1,
        title: '2020 Election',
        state: {
          isQuiz: false,
          active: true,
        },
      },
      {
        id: 2,
        index: 2,
        title: 'Mosquitoes',
        state: {
          isQuiz: true,
          active: true,
        },
      },
      {
        id: 3,
        index: 3,
        title: 'Food and Drink',
        state: {
          isQuiz: true,
          active: false,
        },
      },
      {
        id: 4,
        index: 4,
        title: 'Architecture',
        state: {
          isQuiz: true,
          active: false,
        },
      },
      {
        id: 5,
        index: 5,
        title: 'Impact Your World',
        state: {
          isQuiz: true,
          active: false,
        },
      },
    ],
    runners: [
      'AA',
      'BB',
      'CC',
      'DD',
      'AA',
      'BB',
      'CC',
      'DD',
      'AA',
      'BB',
      'CC',
      'DD',
    ],
  },
};

const ChannelContainer = ({ type, id }) => {
  if (!channelDatas.hasOwnProperty(id)) return <Redirect to="/" />;
  const data = channelDatas[id];
  const image = require(`resources/images/channel/channel-image-${data.image}.jpg`);
  return (
    <Channel
      channelId={id}
      type={type}
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
