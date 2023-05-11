import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function GoalItem(props) {
  return(
    <View style={styles.container}>
      {props.title.item.Value}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    fontWeight: 'bold',
    padding: 10,
    margin: 10,
  },
})