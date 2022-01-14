import { ActionTypes } from "../constants/actionTypes";

export const setTasks = (tasks) => {
  return {
    type: ActionTypes.SET_TASKS,
    payload: tasks,
  };
};

export const addTask = (task) => {
  return {
    type: ActionTypes.ADD_TASK,
    payload: task,
  };
};

export const checkTask = (task) => {
  return {
    type: ActionTypes.CHECK_TASK,
    payload: task,
  };
};

export const deleteTasks = (tasks) => {
  return {
    type: ActionTypes.DELETE_TASKS,
    payload: tasks,
  };
};

export const deleteAllTasks = (tasks) => {
  return {
    type: ActionTypes.DELETE_All_TASKS,
  };
};
