import React ,{useState} from 'react';
import { StyleSheet, TextInput, Button, FlatList ,Text, View } from 'react-native';
import Views from './Components/Views';

export default function App() {

  return (
    <View style={styles.container}>
		<View style={styles.secondContainer}>
			<Views />
		</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:20,
    backgroundColor:'grey'
	
  },
  secondContainer:{
    width:'80%',
    borderWidth:3
    }

});