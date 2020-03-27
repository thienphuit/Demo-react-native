import React,{useState,useRef} from 'react';
import {Alert,Text,View,StyleSheet, Button} from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
const generateRandomBetween = (min,max,exclude) =>{
    min  =Math.ceil(min);
    max  = Math.floor(max);
    const rNum = Math.floor(Math.random()*(max- min))+ min;
    if(rNum === exclude){
        return generateRandomBetween(min.max.exclude);
    }else{
        return rNum;
    }
}
const GameScreen = props =>{
    const [currentGuess,setCurrenGess] = useState(generateRandomBetween(
        1,100,props.userChoice
    ));
    const currneLow = useRef(1);
    const currentHigh = useRef(100);

    const nextGuessHandle = direction =>{
        if((direction ==='lower' && currentGuess < props.userChoice)||direction === 'greater' && currentGuess > props.userChoice){
            Alert.alert('Not know','you know that this wrong',[{text: 'sorry',style:'center'}]);
            return;
        }
        if(direction ==='lower'){
            currentHigh.current = currentGuess;
        }else{
            currneLow.current = currentGuess;
        }
        const newtNumber = generateRandomBetween(currneLow.current,currentHigh.current,currentGuess);
        setCurrenGess(newtNumber)
    };
    return(
        <View style={styles.screen}>
            <Text>Oppent guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainner}>
                <Button title="LOWER" onPress={nextGuessHandle.bind(this,'lower')}/>
                <Button title="GREAN"/>
            </Card>
        </View>
    )
}
const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    buttonContainner:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20,
        width:200,
        maxWidth:'80%'
    }
})
export default GameScreen;