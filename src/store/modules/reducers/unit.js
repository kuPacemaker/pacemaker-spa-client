import { handleActions } from 'redux-actions';
// import { List, Map } from 'immutable';
import produce from 'immer';
import { UPDATE, UPDATE_DOCUMENT, UPDATE_QUESTION } from '../type/unit';

const initialState = {
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
      visible: false,
      title: '',
      body: '',
    },
    paper: {
      isStart: false,
      isEnd: false,
      questions: [],
    },
  },
};

export default handleActions(
  {
    [UPDATE]: (state, action) => produce(state, () => action.payload),
    [UPDATE_DOCUMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.unit.document = action.payload;
      }),
    [UPDATE_QUESTION]: (state, action) =>
      produce(state, (draft) => {
        draft.unit.paper.questions = action.payload;
      }),
  },
  initialState
);
