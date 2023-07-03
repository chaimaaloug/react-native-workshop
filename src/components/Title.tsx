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
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFC007',
    marginBottom: '35px'
  },
});

export default MainTitle;
