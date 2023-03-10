import React from "react";
import {View,Text, TouchableOpacity,TextInput} from 'react-native'
import styles from './AddToDo.style'

const AddToDo = (props) =>
{
  let button_style;
  if (props.text==''){
    button_style=styles.button_passive
  }
  else{
    button_style=styles.button
  }
  
    return(
        <View style={styles.todo}>
        <TextInput style={styles.textinput} placeholder='Yapılacak...' value={props.text} onChangeText={props.settext}></TextInput>
        <View style={styles.seperator}></View>
        <TouchableOpacity style={button_style} onPress={props.onPress} >
        <Text style={styles.buttonText}>KAYDET</Text>
      </TouchableOpacity>
      </View>
    )
}
export default AddToDo;