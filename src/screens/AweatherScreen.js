import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import CardView from '../components/CardView';

export default class AweatherScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View>
                    <View style={styles.header}>
                        <Text style={styles.title}>Today</Text>
                        <Text style={{color:'white'}}>It is 1st June 2019. Be productive!</Text>
                        <View style={styles.cardVirtical}>
                            <CardView style={styles.customCardView}>
                                <View style={styles.yourTask}>
                                <Image style={styles.image} source={require('../../assets/skiing.png')}></Image>
                                <Text style={styles.text}>Your tasks</Text>
                                </View>
                            </CardView>
                            <CardView style={styles.customCard}>
                            <Image style={styles.location} source={require('../../assets/home_address.png')}></Image>
                            </CardView>
                            <CardView style={styles.customCard}>
                            <Image style={styles.location} source={require('../../assets/gift_box.png')}></Image>
                            </CardView>
                        </View>
                        <View style={styles.body}>
                            <View style={styles.person}>
                                <CardView style={styles.personCard}>
                                    <Text>08:20:3 time</Text>
                                </CardView>
                                <CardView style={styles.personCard}>
                                    <Text>Personal</Text>
                                </CardView>
                            </View>
                        </View>
                    </View>
                </View>
                <View>

                </View>
                <View></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        flex:1,
        backgroundColor:'#06A4C9',
        paddingLeft:20,
        paddingRight:20
    },
    header:{
        marginTop:30,
        marginBottom:20
    },
    cardVirtical:{
        flexDirection:'row',
        marginTop:20
    },
    customCardView:{
        backgroundColor:'white',
        flex:0.6,
        alignItems:'center'
    },
    customCard:{
        flex:0.2,
        marginLeft:20,
        alignItems:'center'
    },
    yourTask:{
        height:45,
        width:'95%',
        backgroundColor:'#D8ECF2',
        borderRadius:20,
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        
    },
    text:{
        color:'#52B2CF',
        fontSize:16,
        fontWeight:'bold'
    },
    title:{
        fontSize:30,
        color:'white',
        fontWeight:'bold',
        marginBottom:10
    },
    image:{
        width:24,
        height:24,
        marginLeft:10,
        marginRight:10
    },
    location:{
        width:32,
        height:32
    },
    body:{
        flexDirection:'column',
        marginTop:50
    },
    person:{
        flexDirection:'row'
    },
    personCard:{
        height:36,
        borderRadius:16,
        marginRight:30
    }
})