import {Reducer} from 'redux';

import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from './action-types';
import {UsersState, UserActionTypes} from './types';

const initialUsersState = {
  users: {},
  loading: false,
  error: null,
};

const usersReducer: Reducer<UsersState, UserActionTypes> = (
  state: UsersState = initialUsersState,
  action: UserActionTypes,
): UsersState => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: null,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
