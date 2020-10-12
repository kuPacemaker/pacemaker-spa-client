const dummy = {
  leader: [
    {
      id: 0,
      title: 'Basic Programming',
      detail: 'Tue. 15:00~18:00',
      imgType: 0,
    },
    {
      id: 1,
      title: 'Data Structure',
      detail: 'Wed. 15:00~18:00',
      imgType: 2,
    },
    {
      id: 2,
      title: 'Basic Programming',
      detail: 'Wed. 15:00~18:00',
      imgType: 1,
    },
    {
      id: 3,
      title: 'Data Structure',
      detail: 'When ever You Want!',
      imgType: 4,
    },
  ],
  runner: [
    {
      id: 4,
      title: 'Basic Programming',
      detail: 'When ever You Want!',
      imgType: 2,
    },
    { id: 5, title: 'Algorithm', detail: 'When ever You Want!', imgType: 6 },
    {
      id: 6,
      title: 'Data Structure',
      detail: 'When ever You Want!',
      imgType: 7,
    },
    {
      id: 7,
      title: 'Basic Programming',
      detail: 'When ever You Want!',
      imgType: 4,
    },
  ],
};

// FIXME: 추후 대체될 것
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 *
 * @param {token} payload
 */
// FIXME: 추후 대체될 것
export const fetch = async (payload) => {
  await sleep(250);

  return new Promise((resolve) => resolve(dummy));
};

// FIXME: 추후 대체될 것
// export const fetch = async (payload) => {
//   return await axios.post(`~~`, info)
// }
