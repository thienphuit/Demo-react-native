import React,{useState} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import NewScreens from './NewScreens';
import GameScreen from './GameScreen';

const PlayGameScreen  = props =>{
    const [userNumber,setUseNumber] = useState();

    const startGameHandle = (selectedNumber) =>{
        console.log(selectedNumber);
        setUseNumber(selectedNumber);
    }

    let content = <NewScreens onStartGame={startGameHandle}/>;
    /*  if(content){
        content = <GameScreen userChoise={userNumber}/>
        } */ 
    return(
        <View style={styles.container}>
            <Header title="Guess number"/>
             {content}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})
export default PlayGameScreen;