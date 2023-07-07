import React from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";
import { Appbar, Card } from "react-native-paper";

import { useStarships } from "../hooks/useStarships";
import { Routes } from "../navigation/Routes";

const renderItem = ({ item }) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.txt}>Model : {item.model}</Text>
        <Text style={styles.txt}>Cost : {item.cost_in_credits}</Text>
        <Text style={styles.txt}>Crew : {item.crew}</Text>
        <Text style={styles.txt}>
          Hyperdrive Rating : {item.hyperdrive_rating}
        </Text>
      </Card.Content>
    </Card>
  );
};

export const StarshipFeedScreen = (props) => {
  const { isLoading, isError, data } = useStarships();

  console.log("data", data);

  if (isLoading) {
    return <Text>loading...</Text>;
  }

  if (isError) {
    return <Text>Something bad happend ... </Text>;
  }

  function navigateBackToLoginScreen() {
    props.navigation.navigate(Routes.LOGIN_SCREEN);
  }

  return (
    <>
      <Appbar.Header style={styles.navigation}>
        {/* <Appbar.BackAction onPress={navigateBackToLoginScreen} /> */}
      </Appbar.Header>
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
          <FlatList
            data={data.results}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    backgroundColor: "black",
    padding: 10,
  },

  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },

  navigation: {
    backgroundColor: "#F2DD65",
    color: "white",
  },

  card: {
    backgroundColor: "#F2DD65",
    marginBottom: 20,
  },

  txt: {
    color: "black",
    fontWeight: "bold",
    marginBottom: 15,
  },

  title: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 30,
    color: "black",
    marginBottom: 23,
  },
});
