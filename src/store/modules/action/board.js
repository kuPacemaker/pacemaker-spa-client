import { get } from '../creators/board';

export const getBoard = (token) => (dispatch) => {
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

  setTimeout(() => {
    dispatch(get(dummy));
  }, 250);
};

export default { getBoard };
