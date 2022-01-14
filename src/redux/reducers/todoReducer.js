import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  tasks: [],
};
export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_TASKS:
      return { ...state, tasks: payload };

    case ActionTypes.ADD_TASK:
      return { ...state, tasks: [payload, ...state.tasks] };

    case ActionTypes.DELETE_TASKS:
      return {
        ...state,
        tasks: state.tasks.filter((item, index) => !payload.includes(item.id)),
      };

    case ActionTypes.DELETE_All_TASKS:
      return initialState;

    case ActionTypes.CHECK_TASK:
      return {
        ...state,
        tasks: state.tasks.map((item, index) => {
          if (item.id == parseInt(payload[0])) {
            item.isChecked = !payload[1];
          }
          return item;
        }),
      };

    default:
      return state;
  }
};
