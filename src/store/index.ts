import {combineReducers, createStore} from 'redux';

import usersReducer from './users/reducers';
import * as userActions from './users/actions';
import * as userSelectors from './users/selectors';

export const rootReducer = combineReducers({
  users: usersReducer,
});

export const actions = {
  users: userActions,
};

export const selectors = {
  users: userSelectors,
};

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
