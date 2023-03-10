import React from "react";
import {View,Text, TouchableOpacity,TextInput} from 'react-native'
import styles from './Header.style'

const Header =(props) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.headertext}>Yapılacaklar</Text>
            <Text style={styles.counter}>{props.countertext}</Text>
        </View>
        
    )
}
export default Header