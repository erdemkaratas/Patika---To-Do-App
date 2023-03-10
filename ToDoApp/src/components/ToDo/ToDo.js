import React,{useState} from "react";
import {View,Text, TouchableOpacity,TouchableWithoutFeedback,TextInput} from 'react-native'
import styles from './ToDo.style'

const ToDo =(props) =>{
    const [Flag,setFlag]=useState(false)
    function updateFlag(){
        setFlag(!Flag)

       }
    
    return(
        <View style={Flag?styles.deleted_container : styles.container}>
            <TouchableWithoutFeedback onLongPress={props.deleteToDo} delayLongPress={1000} onPress={updateFlag}>
            <Text style={Flag?styles.deleted_todo : styles.todo}>{props.setToDo.title}</Text>
            </TouchableWithoutFeedback>       
        </View>

        
    )
}
export default ToDo