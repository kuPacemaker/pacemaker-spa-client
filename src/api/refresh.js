const dummy = {
  newspeed: [
    {
      type: 'SYSTEM_NOTICE',
      title: 'NEW FUNCTION IS AVAILABLE',
      body: 'Your Running Mate, Pacemaker Team',
      arg: '',
    },
    {
      type: 'PAPER_RECEIVE',
      title: 'NEW QUIZ IS OPENED',
      body: 'Basic Computer Programming, Kelvin, Tue. 15:00~18:00',
      arg: '',
    },
    {
      type: 'QUESTION_GENERATION',
      title: 'NEW QUESTIONS WERE RECEIVED',
      body: 'Basic Computer Programming, Kelvin, Tue. 15:00~18:00',
      arg: '',
    },
    {
      type: 'PAPER_FINISH',
      title: 'EVERYONE FINISHED THE QUIZE',
      body: 'Basic Computer Programming, Kelvin, Tue. 15:00~18:00',
      arg: '',
    },
    {
      type: 'QUESTION_GENERATION',
      title: 'NEW QUESTIONS WERE RECEIVED',
      body: 'Basic Computer Programming, Kelvin, Tue. 15:00~18:00',
      arg: '',
    },
    {
      type: 'SYSTEM_NOTICE',
      title: 'NEW FUNCTION IS AVAILABLE',
      body: 'Your Running Mate, Pacemaker Team',
      arg: '',
    },
    {
      type: 'PAPER_RECEIVE',
      title: 'NEW QUIZ IS OPENED',
      body: 'Basic Computer Programming, Kelvin, Tue. 15:00~18:00',
      arg: '',
    },
    {
      type: 'PAPER_FINISH',
      title: 'EVERYONE FINISHED THE QUIZE',
      body: 'Basic Computer Programming, Kelvin, Tue. 15:00~18:00',
      arg: { channel: 0 },
    },
    {
      type: 'QUESTION_GENERATION',
      title: 'NEW QUESTIONS WERE RECEIVED',
      body: 'Basic Computer Programming, Kelvin, Tue. 15:00~18:00',
      arg: { channel: 0, unit: 0 },
    },
  ],
  board: {
    leader: [
      {
        id: 0,
        title: 'Data Structure',
        detail: 'Wed. 15:00~18:00',
        image: 2,
      },
      {
        id: 0,
        title: 'Basic Programming',
        detail: 'Wed. 15:00~18:00',
        image: 1,
      },
      {
        id: 0,
        title: 'Reviews of Student News',
        detail: 'When ever You Want!',
        image: 7,
      },
      {
        id: '3SgNy6]r{L',
        title: 'Study of Genesis',
        detail: 'When ever You Want!',
        image: 0,
      },
    ],
    runner: [
      {
        id: 0,
        title: 'Basic Programming',
        detail: 'When ever You Want!',
        image: 2,
      },
      {
        id: 0,
        title: 'Algorithm',
        detail: 'When ever You Want!',
        image: 6,
      },
      {
        id: 0,
        title: 'Reviews of Student News',
        detail: 'When ever You Want!',
        image: 7,
      },
      {
        id: '3SgNy6]r{L',
        title: 'Study of Genesis',
        detail: 'When ever You Want!',
        image: 0,
      },
    ],
  },
};

//Refresh Api
/**
 * 60초~300초마다 계속 호출되면서 화면을 새로고침하는 함수.
 * @param {token} payload
 * @return {
              newspeed: [
                      newspeed_obj,...
                    ] << 새로운 문제의 생성이나 시험지 도착이 Newpeed로 들어와야 함.
              board: {
                    leader: [
                            channel_obj,
                            ...
                        ]
                    runner: [
                            channel_obj,
                            ...
                        ]
                    }
          }
 */

// FIXME: 추후 대체될 것
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 *
 * @param {token, channel, unit} payload
 */
// FIXME: 추후 대체될 것
export const refresh = async (payload) => {
  await sleep(250);
  return new Promise((resolve) => resolve(dummy));
};

// export const refresh = async (payload) => {
//   return await axios.post(`~~`, payload);
// };
