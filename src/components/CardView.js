
import React from 'react';
import {View,StyleSheet} from 'react-native';

const CardView  = props =>{
    return (
        <View style={{...styles.cardView,...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    cardView:{
        backgroundColor:'#58AECE',
        borderRadius:8,
        padding:10,
        justifyContent:'center',
        height:80,
    }
})

export default CardView;