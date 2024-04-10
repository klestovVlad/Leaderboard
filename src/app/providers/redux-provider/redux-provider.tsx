import React from 'react';
import {Provider} from 'react-redux';
import {store} from 'src/store';

interface ReduxProviderProps {
  children: React.ReactNode;
}

export const ReduxProvider = ({children}: ReduxProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};
