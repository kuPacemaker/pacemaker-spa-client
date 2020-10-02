import { handleActions } from 'redux-actions';
import produce from 'immer';
// import { pender } from 'redux-pender';
import {
  GET_POST_PENDING,
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
} from '../type/post';
// import { GET_POST } from '../type/post';

const initialState = {
  pending: false,
  error: false,
  data: {
    title: '',
    body: '',
  },
};

export default handleActions(
  {
    [GET_POST_PENDING]: (state) =>
      produce(state, (draft) => {
        draft.pending = true;
        draft.error = false;
      }),
    [GET_POST_SUCCESS]: (state, action) => {
      const { title, body } = action.payload.data;
      return produce(state, (draft) => {
        draft.pending = false;
        draft.data = { title, body };
      });
    },
    [GET_POST_FAILURE]: (state) =>
      produce(state, (draft) => {
        draft.pending = false;
        draft.error = true;
      }),
  },
  initialState
);

// export default handleActions(
//   {
//     ...pender({
//       type: GET_POST,
//       onPending: (state) =>
//         produce(state, (draft) => {
//           draft.pending = true;
//           draft.error = false;
//         }),
//       onSuccess: (state, action) => {
//         const { title, body } = action.payload.data;
//         return produce(state, (draft) => {
//           draft.pending = false;
//           draft.data = { title, body };
//         });
//       },
//       onFailure: (state) =>
//         produce(state, (draft) => {
//           draft.pending = false;
//           draft.error = true;
//         }),
//     }),
//   },
//   initialState
// );
