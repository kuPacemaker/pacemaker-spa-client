import { handleActions } from 'redux-actions';
import produce from 'immer';
import {
  UPDATE,
  RESET,
  UPDATE_DOCUMENT,
  UPDATE_QUESTION,
  PENDING,
  SUCCESS,
} from '../type/unit';

const dataForm = {
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
};

const initialState = {
  state: {
    ready: false,
  },
  data: dataForm,
};

export default handleActions(
  {
    [UPDATE]: (state, action) =>
      produce(state, (draft) => {
        draft.data = action.payload;
      }),
    [RESET]: (state) =>
      produce(state, (draft) => {
        draft.data = dataForm;
      }),
    [UPDATE_DOCUMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.data.unit.document = action.payload;
      }),

    [UPDATE_QUESTION]: (state, action) =>
      produce(state, (draft) => {
        draft.data.unit.paper = action.payload;
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
