import React from 'react';
import {DefaultLayout} from 'src/shared/layouts/default-layout/default-layout';

export const MainScreen = () => {
  return (
    <DefaultLayout>
      <DefaultLayout.NestedHeader title="Main screen" />
    </DefaultLayout>
  );
};
