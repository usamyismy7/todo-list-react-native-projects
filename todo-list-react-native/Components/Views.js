import React ,{useState} from 'react';
import { StyleSheet, TextInput, Button, FlatList ,Text, View } from 'react-native';
import Input from './Input';
import { FontAwesome } from '@expo/vector-icons';

export default function Views() {
  const [items, setItems] =useState([]);
	return (
    <View>
    <Input onClick={setItems}/>
		<View style={styles.listContainer}>
			{/* <Input onClick={setItems}/> */}
      
      <Text style={styles.listHeading}>{<FontAwesome name="list-alt" size={24} color="blue" />} To-do List</Text>
			<FlatList data={items} renderItem={(task)=><Text>{task.item.value}</Text>} />
		</View>
    </View>
	);
}

const styles = StyleSheet.create ({
	listContainer:{
    borderWidth:1,
    width:'100%',
    backgroundColor:'white',
    color:'blue'
  },
  listHeading:{
    alignSelf:'center',
    color:'blue',
    fontSize:30,
    fontWeight:500,
  }
});