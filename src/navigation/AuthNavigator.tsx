import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import { TermsScreen } from "../screens/TermsScreen";
import { StarshipFeedScreen } from "../screens/StarshipFeedScreen";
import { LaunchScreen } from "../screens/LaunhScreen";

import { Routes } from "./Routes";

type Props = {};

const Stack = createNativeStackNavigator();

export const AuthNavigator = (props: Props) => {
  return <></>;
};
