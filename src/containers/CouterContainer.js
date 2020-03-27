import React from 'react';
import {View} from 'react-native';
import Couter from '../components/Couter';
import {connect} from 'react-redux';
import subNumber,{addNumber} from '../actions/CounterAction'

class CounterContainer extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {subNumber,addNumber} = this.props;
        const {number} = this.props.number;
       return(
        <Couter  val ={number} {...this.props}/>
       )
    }
}

export default connect(
    state =>{
        return{
            number:state.number
        }
    },dispatch =>{
        return{
            addNumber: (val) => dispatch(addNumber(val)),
            subNumber:(val) =>dispatch(subNumber(val))
        }
    }
)(CounterContainer);