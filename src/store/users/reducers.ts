import {Reducer} from 'redux';

import types from './action-types';
import {User, UsersState, UsersAction} from './types';

const initialUsersState: UsersState = {
  users: [
    {
      id: 1,
      text: 'User 1',
    },
  ],
};

const usersReducer: Reducer<UsersState, UsersAction> = (
  state: UsersState = initialUsersState,
  action: UsersAction,
): UsersState => {
  switch (action.type) {
    case types.ADD_USER:
      const newUser: User = {
        id: Math.random(),
        text: action.payload?.text || '',
      };
      return {
        ...state,
        users: [...state.users, newUser],
      };
    case types.REMOVE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default usersReducer;
