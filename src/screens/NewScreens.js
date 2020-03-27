import React,{useState} from 'react';
import {StyleSheet,View,Text, Button,TouchableWithoutFeedback,Keyboard,Alert} from 'react-native';
import Card from '../components/Card';
import Color from '../constants/color';
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer';



const NewScreen = props =>{

    const [enterValue,setEnterValue] = useState('');
    const [confirmed,setConfirmed] = useState(false);
    const [selectedNumber,setSelectedNumber] = useState();

    const handleInput = inputText =>{
        setEnterValue(inputText.replace(/[^0-9]/g),'');
    }

    const resetHandle =()=>{
        setEnterValue('');
        setConfirmed(false);
    }
    const confirmInputHandle =()=>{
        const choserNumber =parseInt(enterValue);
        if(choserNumber ===NaN || choserNumber<=0 ||choserNumber > 99){
            Alert.alert('Invalid number');
            return;
        }
        setConfirmed(true);
        setSelectedNumber(choserNumber);
        setEnterValue('');
    }
    let confirmedOutput;
    if(confirmed){
    confirmedOutput = (
        <Card style={styles.sumnaryContainer}>
            <Text>Your selected</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button title="Start game" onPress={()=> props.onStartGame(selectedNumber)}/>
        </Card>
    )
    }
    return (
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
        }}>
        <View style={styles.container}>
            <Text style={styles.title}>Start game</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a number</Text>
                <Input maxLength={2} autoCorrect={false} keyboardType="numeric" value={enterValue} onChangeText={handleInput} style={styles.textInput} />
                <View style={styles.buttonContainer}>
                <View style={styles.button}><Button title="Reset" color={Color.primary} onPress={resetHandle}/></View>
                <View style={styles.button}><Button title="Confirm" color={Color.accent} onPress={confirmInputHandle}/></View>
                </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    container:{
        
        alignItems:'center',
        padding:10
    },
    inputContainer:{
        width:300,
        maxWidth:'80%',
        alignItems:'center',
    },
    title:{
        fontSize:20,
        marginVertical:10
    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:16,
    },
    button:{
        width:80
    },
    textInput:{
       width:50 ,
       justifyContent:'center',
    },
    sumnaryContainer:{
        marginTop:20,
        alignItems:'center'
    }

});
export default NewScreen;