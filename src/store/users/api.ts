import {Dispatch} from 'redux';

const USERS_URL =
  'https://drive.usercontent.google.com/u/0/uc?id=1Arrezp0EPcK1gRvbbU6ZpiOABkeJ6AjI&export=download';

import userActions from './actions';

export const fetchUsers = (controller: AbortController) => {
  return async (dispatch: Dispatch) => {
    dispatch(userActions.fetchUsersRequest());
    try {
      const signal = controller.signal;

      const response = await fetch(USERS_URL, {signal});
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const users = await response.json();
      dispatch(userActions.fetchUsersSuccess(users));
    } catch (error: any) {
      dispatch(userActions.fetchUsersFailure(error?.message));
    }
  };
};

export const cancelFetchUsers = (controller: AbortController) => {
  controller.abort();
};
