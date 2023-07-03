import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Headline } from 'react-native-paper';

const MainTitle = ({ title }) => {
  return (
    <View style={styles.titleContainer}>
      <Headline style={styles.title}>{title}</Headline>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    padding: 24,
    fontSize: 34,
    fontWeight: 'bold',
    color: '#FFC007',
    marginTop: 35,
    marginBottom: 35
  },
});

export default MainTitle;
