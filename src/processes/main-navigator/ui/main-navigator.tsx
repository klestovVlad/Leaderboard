import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainScreen} from 'src/screens/main-screen/ui/main-screen';
import {ScreenBaseProps} from 'src/shared/navigation/types';
import {AppRoutes} from 'src/shared/navigation/routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {DEFAULT_SCREEN_OPTIONS} from '../config';

const Stack = createNativeStackNavigator<MainNavigatorParams>();

export function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group screenOptions={DEFAULT_SCREEN_OPTIONS}>
          <Stack.Screen name={AppRoutes.MainScreen} component={MainScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export type MainNavigatorParams = {
  [AppRoutes.MainScreen]: undefined;
};

export type MainScreenProps = ScreenBaseProps<
  AppRoutes.MainScreen,
  MainNavigatorParams
>;
