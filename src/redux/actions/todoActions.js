import { ActionTypes } from "../actions/ActionTypes";

export const setTasks = (tasks) => {
  return {
    type: ActionTypes.SET_TASKS,
    payload: tasks
  };
};

export const deleteTasks = (tasks) => {
  return {
    type: ActionTypes.DELETE_TASKS,
    payload: tasks
  };
};
