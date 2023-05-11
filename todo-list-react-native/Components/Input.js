import React ,{useState} from 'react';
import { StyleSheet, TextInput, Button, FlatList ,Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Input(props) {
	const [text, setText] = useState('');

  const handleText = (changingtext)=>{
    setText(changingtext);
  };

  const handleInput = ()=>{
    props.onClick(items=>[...items,{id:Math.floor(Math.random()), value:text}]);
    setText('');
  };
  
  return (
			<>
			<Text style={{fontSize:25}}>{<FontAwesome5 name="clipboard-list" size={24} color="black" />} Tasks</Text>
			<TextInput  style={styles.inputContainer} placeholder='Enter Task' onChangeText={handleText} value={text}/>
		  
			<View style={styles.buttonContainer}>
				<Entypo.Button name="add-to-list" onPress={handleInput} size={24} color="white">ADD TASK</Entypo.Button>
			</View>
			</>
  )
}

const styles = StyleSheet.create ({
	inputContainer:{
    width:'100%',
    height:50,
    padding:20,
    backgroundColor:'darkgrey',
    color:'lightgreen'
  },
  buttonContainer:{
    borderWidth:1,
    width:100,
    borderStyle:'none',
    alignSelf:'center',
    paddingTop:10,
    paddingBottom:10
  },
});