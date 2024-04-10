import React from 'react';
import {ReduxProvider} from 'src/app/providers/redux-provider/redux-provider';
import {ThemeProvider} from 'src/app/providers/theme-provider/theme-provider';
import {UIProvider} from 'src/app/providers/ui-provider/ui-provider';
import {MainNavigator} from 'src/processes/main-navigator/ui/main-navigator';

function App(): React.JSX.Element {
  return (
    <ReduxProvider>
      <ThemeProvider>
        <UIProvider>
          <MainNavigator />
        </UIProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default App;
