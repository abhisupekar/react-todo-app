import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  tasks: [
    {
      id: 1,
      title: "Helllp",
      completed: false
    }
  ]
};
export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_TASKS:
      return state;

    default:
      return state;
  }
};
