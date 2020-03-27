import React from 'react';
import {View,Text,Image,StyleSheet,Button, BackHandler, TextInput} from 'react-native';
//import imageList from './assets/icon.png'
import {connect} from 'react-redux';
import addTask from '../actions/AddItemActions';

class  CategoriListItem extends React.Component {
    constructor(props){
        super(props);
        this.state={
            newTaskName:'',
        }
    }
    render(){
        const onAddGold = this.props.onAddGold;
        return(
            <View style={styles.container}>
            <Text >CategoriList Item</Text>
           <View style={styles.boderInput}>
        <TextInput style={styles.input}
            onSubmitEditing ={()=>onAddGold(this.state.newTaskName)}
            onChangeText ={text => this.setState({newTaskName:text})}
            value ={this.state.newTaskName} 
        ></TextInput>
           <Button title="ADD" onPress={()=>onAddGold(this.state.newTaskName)} ></Button>
           </View>
           <View style={styles.centerImage}>
           <Image style={styles.image} source={require('../../assets/skiing.png')}></Image>
           </View>
           
        </View>
        )
    }
   
    
}
const styles = StyleSheet.create({
    container:{
        shadowOpacity:0.1,
        shadowRadius:10,
        padding:16,
        marginLeft:20,
        marginRight:20,
        borderRadius:5,

    },
    input:{
        borderWidth:1,
        borderRadius:5,
        padding:10,
        flex:1,
        marginRight:10,
        fontSize:16
    },
    boderInput:{
        flexDirection:'row',
        marginTop:20
    },
    image:{
        width:120,
        height:120,
        marginTop:20,
    },
    centerImage:{
        alignItems:'center'
    }
})
export default connect(state => {
    return {
      
    }
  },
    dispatch =>{
        return{
            onAddGold: (enterGold) => dispatch(addTask(enterGold))
        }
    }
    )(CategoriListItem)