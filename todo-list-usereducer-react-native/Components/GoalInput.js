import React, { useState, useReducer } from 'react';
import { View, Text, StyleSheet, Modal, TextInput, Pressable } from 'react-native';

export default function GoalInput(props) {
  const initial = '';
  const reducer = (state, action) => {
    return (action.type);
  }
  const [state, dispatch] = useReducer(reducer,initial);
  const inputHandle = (input) => {
    dispatch({type:input});
  }
  return(
    <Modal visible={props.btn} animationType='slide'>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder='Enter Task' onChangeText={inputHandle} />
        <Pressable style={styles.button} onPress={()=>{props.onAdd(state);}}>Add Task</Pressable>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'silver',
  },
  input: {
    borderWidth: 2,
    padding: 15,
    margin: 10,
  },
  button: {
    backgroundColor: 'skyblue',
    color: 'whitesmoke',
    borderRadius: 10,
    textAlign: 'center',
    padding: 15,
    margin: 10,
  },
})