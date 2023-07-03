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

export const AuthNavigator = (props: Props) => {
  return (
    <>
    </>
  );
}