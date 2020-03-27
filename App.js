import React from 'react';
import { StyleSheet, Text, View,FlatList, Button } from 'react-native';
import CategoriListItem from './src/components/CategoryListItem'
import ListItem from './src/components/ListItem';
import Contructor from './src/navigations/Contructor'
import { createStore,combineReducers,applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
//mport tastListReducer from './src/reducers/TaskListReducer'
import allReducer from './src/reducers/index'


//action

//let listData = this.state;
//Reducer
// store
const store = createStore(allReducer)
export default class App extends React.Component {
  render() {
    return (
      <Provider store ={store}>
      <View style={styles.container}>
        <Contructor />
      </View>
      </Provider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection:'column',
    flex:1
  },
  textInput:{
    marginLeft:20,
    fontSize:20
  },
  listcontent:{
    flex:0.8,
    padding:22,
  },
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
