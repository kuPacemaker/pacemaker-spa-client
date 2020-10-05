import { handleActions } from 'redux-actions';
// import { List, Map } from 'immutable';
import produce from 'immer';
import { UPDATE } from '../type/unit';

const initialState = {
  id: '',
  channel: {
    id: '',
    title: '',
    detail: '',
    code: '',
  },
  unit: {
    id: '',
    index: '',
    title: '',
    isOpened: false,
    document: {
      id: '',
      visible: '',
      title: '',
      body: '',
    },
    paper: {
      isStart: false,
      isEnd: false,
      questions: [
        {
          id: '',
          quiz: '',
          answer: '',
          user_answer: '',
          answer_set: '',
          verified: false,
        },
      ],
    },
  },
};

export default handleActions(
  {
    [UPDATE]: (state, action) => produce(state, () => action.payload),
  },
  initialState
);
