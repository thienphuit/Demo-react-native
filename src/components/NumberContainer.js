import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import Color from '../constants/color';


const NumberContainer = props =>{
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor:Color.accent,
        padding:10,
        borderRadius:10,
        marginVertical:10,
    },
    number:{
        color:Color.accent,
        fontSize:22

    }
})
export default NumberContainer;