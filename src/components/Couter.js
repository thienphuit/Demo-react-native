import React from 'react';
import {View,StyleSheet, Button,Text} from 'react-native';



class Couter extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {val,subNumber,addNumber} = this.props;
       // const {number} = this.props.number;
       // const number  = this.props.number;
        //console.log(number)
       // console.log(number)
        return(
            <View style={styles.containner}>
                <Button title='Sub' onPress={()=> subNumber(val -1)}/>
                <View style={styles.numberCount}>
                <Text>Counter: </Text>
        <Text>{val}</Text>
                </View>
                <Button title='Add' onPress={()=> addNumber(val+1)} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containner:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:30
    },
    numberCount:{
        flexDirection:'row',
        marginLeft:20,
        marginRight:20,
        alignItems:'center'
    }
})

export default Couter;