import {ADD_USER, REMOVE_USER} from './action-types';

export const addTodo = (text: string) => ({
  type: ADD_USER,
  payload: {
    text,
  },
});

export const removeTodo = (id: string) => ({
  type: REMOVE_USER,
  payload: {
    id,
  },
});

export default {
  addTodo,
  removeTodo,
};
