import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

export const Offline = () => {
  const [IsConnected, SetIsConnected] = useState(true);

  return (
    <View style={styles.container}>
      {!IsConnected &&
        <Text style={styles.message}>
          Offline, reconnection in progress...
        </Text>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginHorizontal: 20,
    position: "absolute",
    top: 55,
    width: "90%",
    borderRadius: 10,
    backgroundColor: "#FEE2E2",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  message: {
    color: "#991B1B",
  },
});