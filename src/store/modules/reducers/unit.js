import { handleActions } from 'redux-actions';
// import { List, Map } from 'immutable';
import produce from 'immer';
import {
  UPDATE,
  UPDATE_DOCUMENT,
  UPDATE_QUESTION,
  PENDING,
  SUCCESS,
} from '../type/unit';

const initialState = {
  state: {
    ready: false,
  },
  data: {
    channel: null,
    unit: {
      id: null,
      index: null,
      title: null,
      isOpened: false,
      document: {
        id: null,
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
  },
};

export default handleActions(
  {
    [UPDATE]: (state, action) =>
      produce(state, (draft) => {
        draft.data = action.payload;
      }),
    [UPDATE_DOCUMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.data.unit.document = action.payload;
      }),
    [UPDATE_QUESTION]: (state, action) =>
      produce(state, (draft) => {
        draft.data.unit.paper.questions = action.payload;
      }),
    [PENDING]: (state) =>
      produce(state, (draft) => {
        draft.state.ready = false;
      }),
    [SUCCESS]: (state) =>
      produce(state, (draft) => {
        draft.state.ready = true;
      }),
  },
  initialState
);
