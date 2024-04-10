import {Dispatch} from 'redux';

import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
} from './actions';

export const fetchUsers = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchUsersRequest());
    try {
      const response = await fetch(
        'https://drive.usercontent.google.com/u/0/uc?id=1Arrezp0EPcK1gRvbbU6ZpiOABkeJ6AjI&export=download',
      );
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const users = await response.json();
      dispatch(fetchUsersSuccess(users));
    } catch (error: any) {
      dispatch(fetchUsersFailure(error?.message));
    }
  };
};
