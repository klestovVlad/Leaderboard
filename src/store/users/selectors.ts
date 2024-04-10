import {RootState} from '..';

export const selectAllUsers = (state: RootState) => state.users.users;

export default {
  selectAllUsers,
};
