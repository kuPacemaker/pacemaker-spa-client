import produce from 'immer';
import { handleActions } from 'redux-actions';
import { CHANGE_COLOR, INCREMENT, DECREMENT } from '../type/counter';

// // 초기상태 정의
// const initialState = Map({
//   color: 'red',
//   number: 0,
// });

const initialState = {
  color: 'red',
  number: 1,
};

// 리듀서 작성
// export default function counter(state = initialState, action) {
//   switch (action.type) {
//     case CHANGE_COLOR:
//       return state.set('color', action.color);
//     case INCREMENT:
//       return state.update('number', (number) => number + 1);
//     case DECREMENT:
//       return state.update('number', (number) => number - 1);
//     default:
//       return state;
//   }
// }

// export default function counter(state = initialState, action) {
//   switch (action.type) {
//     case CHANGE_COLOR:
//       return {
//         ...state,
//         color: action.color,
//       };
//     case INCREMENT:
//       return {
//         ...state,
//         number: state.number + 1,
//       };
//     case DECREMENT:
//       return {
//         ...state,
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }

// export default function counter(state = initialState, action) {
//   switch (action.type) {
//     case CHANGE_COLOR:
//       return produce(state, (draft) => {
//         draft.color = action.color;
//       });
//     case INCREMENT:
//       return produce(state, (draft) => {
//         draft.number++;
//       });
//     case DECREMENT:
//       return produce(state, (draft) => {
//         draft.number = draft.number - 1 < 0 ? draft.number : draft.number - 1;
//       });
//     default:
//       return state;
//   }
// }

export default handleActions(
  {
    [INCREMENT]: (state) =>
      produce(state, (draft) => {
        draft.number++;
      }),
    [DECREMENT]: (state) =>
      produce(state, (draft) => {
        draft.number = draft.number - 1 < 0 ? draft.number : draft.number - 1;
      }),
    [CHANGE_COLOR]: (state, action) =>
      produce(state, (draft) => {
        draft.color = action.payload;
      }),
  },
  initialState
);
