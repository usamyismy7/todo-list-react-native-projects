import React ,{useState} from 'react';
import { StyleSheet, TextInput, Button, FlatList ,Text, View } from 'react-native';
import { Alert, Modal, Pressable} from "react-native";

export default function App() {

	const [text, setText] = useState('');
	const [items, setItems] =useState([]);
	const [modalVisible, setModalVisible] = useState(false);

  const handleText = (changingtext)=>{
    setText(changingtext);
  };

  const handleInput = ()=>{
    setItems(items=>[...items,{id:Math.floor(Math.random()), value:text}]);
    setText('');
  };

  return (
    <>
	<View style={styles.container}>
      <View style={styles.secondContainer}>
      <TextInput  style={styles.inputContainer} placeholder='Enter a to-do task!' onChangeText={handleText} value={text}/>
      
      <View style={styles.buttonContainer}><Button  title='Add task' onPress={handleInput} /></View>

      


    </View>
    
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
		<View style={styles.listContainer}>
			<Text style={styles.listHeading}>Task List</Text>
			<FlatList data={items} renderItem={(task)=><Text>{task.item.value}</Text>} />
		</View>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
	</>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20,
    backgroundColor:'grey'
  },
  secondContainer:{
    width:'80%',
    borderWidth:3
    },
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
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
	marginTop: 10
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});