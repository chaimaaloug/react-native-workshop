import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from '../screens/LoginScreen'
import { Routes } from './Routes'
import { TermsScreen } from '../screens/TermsScreen'
import { StarshipFeedScreen } from '../screens/StarshipFeedScreen'
import { LaunchScreen } from '../screens/LaunhScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type Props = {}

const Stack = createNativeStackNavigator();

export const Navigator = (props: Props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Routes.LAUNCH_SCREEN} component={LaunchScreen} />
        <Stack.Screen name={Routes.LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={Routes.TERMS_SCREEN} component={TermsScreen} />
        <Stack.Screen name={Routes.SPACECRAFT_LIST_SCREEN} component={StarshipFeedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}