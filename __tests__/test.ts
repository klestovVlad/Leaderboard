import {SORT_DIRECTION} from 'src/shared/constants/sort-options';
import configureStore from 'redux-mock-store';
import {selectTopTenUsersByName} from 'src/store/users/selectors';
import {RootState} from 'src/store';
import {Users} from 'src/store/users/types';

import {generateRandomUsers} from './helper/generate-random-users';

const mockStore = configureStore([]);

describe('selectTopTenUsersByName selector', () => {
  let store: any;

  beforeEach(() => {
    const initialState: RootState = {
      users: {
        loading: false,
        error: null,
        users: generateRandomUsers(100),
      },
    };
    store = mockStore(initialState);
  });

  it('returns empty if name is not provided', () => {
    const selector = selectTopTenUsersByName();
    const result = selector(store.getState());
    expect(result).toEqual([]);
  });

  it('returns top ten users sorted by bananas in ascending order', () => {
    const selector = selectTopTenUsersByName('User', SORT_DIRECTION.Ascending);
    const result = selector(store.getState());
    console.log('result', result);
    expect(result?.length).toBeLessThanOrEqual(10);
    expect(result?.[9].bananas || 0).toBeLessThanOrEqual(
      result?.[0].bananas || 0,
    );
  });

  it('returns top ten users sorted by bananas in descending order', () => {
    const selector = selectTopTenUsersByName('User', SORT_DIRECTION.Descending);
    const result = selector(store.getState());
    console.log(result?.length);
    expect(result?.length).toBeLessThanOrEqual(10);

    expect(result?.[9].bananas || 0).toBeLessThanOrEqual(
      result?.[0].bananas || 0,
    );
  });

  it('returns empty array if no users exist', () => {
    const emptyState: RootState = {
      users: {
        loading: false,
        error: null,
        users: {} as Users,
      },
    };
    const emptyStore = mockStore(emptyState);
    const selector = selectTopTenUsersByName(
      'searchName',
      SORT_DIRECTION.Ascending,
    );
    const result = selector(emptyStore.getState() as RootState);
    expect(result).toEqual([]);
  });

  it('handles case when user with specified name does not exist', () => {
    const selector = selectTopTenUsersByName(
      'Nonexistent User',
      SORT_DIRECTION.Ascending,
    );
    const result = selector(store.getState());
    expect(result).toEqual([]);
  });
});
