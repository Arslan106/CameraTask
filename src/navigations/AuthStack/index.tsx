/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '@src/constants/Routes';
import { Home } from '@src/screens/Home';
import { Detail } from '@src/screens';


export const AuthStack = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}  initialRouteName={ROUTES.HOME}>
        <Stack.Screen name={ROUTES.HOME} component={Home} />
        <Stack.Screen name={ROUTES.DETAILS} component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
