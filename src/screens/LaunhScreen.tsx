import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Text } from "react-native-paper";

import { Routes } from "../navigation/Routes";

export const LaunchScreen = (props: any) => {
  function navigateToLogin() {
    props.navigation.navigate(Routes.LOGIN_SCREEN);
  }

  const back = {
    uri: "https://images.unsplash.com/photo-1530362502708-d02c8f093039?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={back} resizeMode="cover" style={styles.back}>
        <TouchableOpacity onPress={navigateToLogin}>
          <Text style={styles.text}>StarWars</Text>
          <Text
            variant="bodyMedium"
            style={{ color: "white", textAlign: "center" }}
          >
            Tap to go
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  back: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "#FFC007",
    fontSize: 70,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
  },
});
