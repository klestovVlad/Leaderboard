import {
  ADD_USER,
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  REMOVE_USER,
} from './action-types';
import {UsersState} from './types';

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

export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (users: UsersState) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersFailure = (error: Error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});

export default {
  addTodo,
  removeTodo,
};
