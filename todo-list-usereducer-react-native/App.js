import React ,{useState} from 'react';
import { StyleSheet, TextInput, Button, FlatList ,Text, View } from 'react-native';
import GoalInput from './Components/GoalInput';
import GoalItem from './Components/GoalItem';

export default function App() {
  const [list, setList] = useState([]);
  const [flag, setFlag] = useState(false);
  const goal = (string) => {
    setList([...list, {Key: Math.random(), Value: string}]);
    setFlag(false);
  }
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <GoalInput onAdd={goal} btn={flag} />
        <Button title="Open Modal" onPress={()=>setFlag(true)} />
      </View>
      <FlatList style={styles.items} data={list} keyExtractor={(num)=>num.Key} renderItem={(number)=>{return <GoalItem title={number} />}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'silver',
  },
  items: {
    padding: 15,
    margin: 10,
  },
});