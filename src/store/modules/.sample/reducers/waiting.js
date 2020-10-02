import { handleActions } from 'redux-actions';
// import { List, Map } from 'immutable';
import produce from 'immer';
import { CHANGE_INPUT, CREATE, ENTER, LEAVE } from '../type/waiting';
// 초기 상태 정의
// const initialState = Map({
//   input: '',
//   list: List([
//     Map({
//       id: 0,
//       name: 'Kim',
//       entered: true,
//     }),
//     Map({
//       id: 1,
//       name: 'Lee',
//       entered: false,
//     }),
//     Map({
//       id: 2,
//       name: 'Cho',
//       entered: false,
//     }),
//   ]),
// });

const initialState = {
  input: '',
  list: [
    {
      id: 0,
      name: '홍길동',
      entered: true,
    },
    {
      id: 1,
      name: '콩쥐',
      entered: false,
    },
    {
      id: 2,
      name: '팥쥐',
      entered: false,
    },
  ],
};

// // **** 리듀서 작성
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

// handleActions 로 리듀서 함수 작성
// export default handleActions(
//   {
//     [CHANGE_INPUT]: (state, action) => state.set('input', action.payload),
//     [CREATE]: (state, action) =>
//       // list 값을 조회한다음에
//       state.update('list', (list) =>
//         // list 에 새로운 Map 을 추가
//         list.push(
//           Map({
//             id: action.payload.id,
//             name: action.payload.text,
//             entered: false,
//           })
//         )
//       ),
//     [ENTER]: (state, action) => {
//       // 인덱스를 찾고
//       const index = state
//         .get('list')
//         .findIndex((item) => item.get('id') === action.payload);
//       // 특정 인덱스의 entered 필드 값을 반전
//       return state.updateIn(['list', index, 'entered'], (entered) => !entered);
//     },
//     [LEAVE]: (state, action) => {
//       // 인덱스를 찾고
//       const index = state
//         .get('list')
//         .findIndex((item) => item.get('id') === action.payload);
//       return state.deleteIn(['list', index]); // 특정 인덱스 제거
//     },
//   },
//   initialState
// );

export default handleActions(
  {
    [CHANGE_INPUT]: (state, action) =>
      produce(state, (draft) => {
        draft.input = action.payload;
      }),
    [CREATE]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push({
          id: action.payload.id,
          name: action.payload.text,
          entered: false,
        });
      }),
    [ENTER]: (state, action) =>
      produce(state, (draft) => {
        const item = draft.list.find((item) => item.id === action.payload);
        item.entered = !item.entered;
      }),
    [LEAVE]: (state, action) =>
      produce(state, (draft) => {
        draft.list.splice(
          draft.list.findIndex((item) => item.id === action.payload),
          1
        );
      }),
  },
  initialState
);
