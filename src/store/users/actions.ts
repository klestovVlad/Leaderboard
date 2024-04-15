import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from './action-types';
import {UsersState} from './types';

const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

const fetchUsersSuccess = (users: UsersState) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

const fetchUsersFailure = (error: Error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});

export default {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
};
