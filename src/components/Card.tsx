import React from "react";
import { View } from "react-native";
import { Card } from 'react-native-paper';

export const Card = () => {


  return (
    <View>
       <Card style={styles.card}>
        <Card.Content>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.txt}>{item.model}</Text>
        <Text style={styles.txt}>{item.cost_in_credits}</Text>
        <Text style={styles.txt}>{item.crew}</Text>
        <Text style={styles.txt}>{item.hyperdrive_rating}</Text>
        <Text style={styles.txt}>{item.cost_in_credits}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

