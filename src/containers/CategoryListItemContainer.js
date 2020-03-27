import React from 'react';
import {View,Text,Image,StyleSheet,Button, BackHandler, TextInput} from 'react-native';
//import imageList from './assets/icon.png'
import {connect} from 'react-redux';
import addTask from '../actions/AddItemActions';

class  CategoriListItem extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const onAddGold = this.props.onAddGold;
        return(
            <CategoriListItem onAddGold ={onAddGold}/>
        )
    }
   
    
}
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