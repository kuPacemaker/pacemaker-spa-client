const testPeeds = [
  {
    type: 'SYSTEM_NOTICE',
    title: 'NEW FUNCTION IS AVAILABLE',
    body: 'Your Running Mate, Pacemaker Team',
    to: '',
    arg: '',
  },
  {
    type: 'PAPER_RECEIVE',
    title: 'NEW QUIZ IS OPENED',
    body: 'Basic Computer Programming, Kelvin, Tue. 15:00~18:00',
    to: '',
    arg: '',
  },
  {
    type: 'QUESTION_GENERATION',
    title: 'NEW QUESTIONS WERE RECEIVED',
    body: 'Basic Computer Programming, Kelvin, Tue. 15:00~18:00',
    to: '',
    arg: '',
  },
  {
    type: 'PAPER_FINISH',
    title: 'EVERYONE FINISHED THE QUIZE',
    body: 'Basic Computer Programming, Kelvin, Tue. 15:00~18:00',
    to: '',
    arg: '',
  },
  {
    type: 'QUESTION_GENERATION',
    title: 'NEW QUESTIONS WERE RECEIVED',
    body: 'Basic Computer Programming, Kelvin, Tue. 15:00~18:00',
    to: '',
    arg: '',
  },
  {
    type: 'SYSTEM_NOTICE',
    title: 'NEW FUNCTION IS AVAILABLE',
    body: 'Your Running Mate, Pacemaker Team',
    to: '',
    arg: '',
  },
  {
    type: 'PAPER_RECEIVE',
    title: 'NEW QUIZ IS OPENED',
    body: 'Basic Computer Programming, Kelvin, Tue. 15:00~18:00',
    to: '',
    arg: '',
  },
  {
    type: 'PAPER_FINISH',
    title: 'EVERYONE FINISHED THE QUIZE',
    body: 'Basic Computer Programming, Kelvin, Tue. 15:00~18:00',
    to: '',
    arg: '',
  },
  {
    type: 'QUESTION_GENERATION',
    title: 'NEW QUESTIONS WERE RECEIVED',
    body: 'Basic Computer Programming, Kelvin, Tue. 15:00~18:00',
    to: '',
    arg: '',
  },
];

// FIXME: 추후 대체될 것
const sleep = ms => new Promise((resolve) => setTimeout(resolve, ms))

// FIXME: 추후 대체될 것
export const fetch = async (data = testPeeds) => {
  await sleep(250);

  return new Promise((resolve) => resolve(data))
}

// FIXME: 추후 요걸로 대체
// export const fetch = async () => {
//   return await axios.get(`~~`)
// }
