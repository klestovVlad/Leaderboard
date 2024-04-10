import {Action} from 'redux';

export interface User {
  id: number;
  text: string;
}

export interface UsersState {
  users: User[];
}

export interface UsersAction extends Action {
  type: string;
  payload: {
    id?: number;
    text: string;
  };
}
