import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import React, {PropsWithChildren} from 'react';

import {ThemeContext} from '../theme-provider/theme-provider';

export function UIProvider({children}: PropsWithChildren) {
  const {theme} = React.useContext(ThemeContext);

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva[theme]}>
        {children}
      </ApplicationProvider>
    </>
  );
}
