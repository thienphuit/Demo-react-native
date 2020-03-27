import React from 'react';
import { StyleSheet,View,Text ,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import deleteTask from '../actions/DeleteItemActions'


class  ListItem extends React.Component{
   render(){
    //const props = this.props
    const {onDeleteItem} = this.props
  // const index = this.props.index;
     //console.log(index)
  //  console.log(inde)
    return <TouchableOpacity onPress={()=>onDeleteItem(this.props.index)}>
    <View style={styles.contentItem} >
        <Text style={styles.textItem}>{this.props.title}
        </Text>
        </View>
</TouchableOpacity>
   }
}

const styles = StyleSheet.create({
    contentItem:{
        flex:1,
        padding:22,
        borderRadius:3,
        borderWidth:1,
        marginTop:10,
        marginLeft:20,
        marginRight:20,
        flexDirection:'column',
        justifyContent:'center',
        backgroundColor:'red'
      },
      textItem:{
        fontSize: 18,
      }
});

export default connect(state =>{
  return{}
},dispatch =>{
  return{
    onDeleteItem:(index) => dispatch(deleteTask(index))
  }
}
)(ListItem);