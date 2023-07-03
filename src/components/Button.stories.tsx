import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";

export default {
  title: "Button",
};

export const Default = () => (
  <View style={{ padding: 16, justifyContent: "space-between", flex: 1 }}>
    <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
        Validate
    </Button>
    </View>
);

Default.story = {
  name: "Default",
};