import React, { useState } from 'react';
import { View,TouchableOpacity, TextInput,Text, Button, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import AddToDo from './components/AddToDo';
import ToDo from './components/ToDo'
import Header from './components/Header';

function App(){  
  const [inputText, setInputText]=useState("")
  const [toDoList,setToDoList]=useState([])
  const[counter,setCounter]=useState(0)

  function UpdateCounter (){
    setCounter(counter+1)
    const deger = 
      {
        id:counter,
        title:inputText,
        Flag:false,
      }
    setToDoList([...toDoList,deger])
    setInputText('')
   
    
  }


  const handleDeleteItem = (id) => {
    const newData = toDoList.filter((item) => item.id !== id);
    setToDoList(newData);
    setCounter(counter-1)
  };
 
 
  return (
    <View style={styles.container}>
      <Header countertext={counter}></Header>
      <FlatList
        keyExtractor={item =>item.id}
        data={toDoList}
        renderItem={({item}) =>  <ToDo setToDo={item} deleteToDo={() => handleDeleteItem(item.id)} ></ToDo>} />
      <AddToDo onPress={UpdateCounter} text={inputText} settext={setInputText}/>
      
    </View>
  );
  console.log(FlatList.item)
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#2f4f4f',
    justifyContent:'flex-end'
  },
  
});

export default App