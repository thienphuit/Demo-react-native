import React from 'react';
import {StyleSheet,View,FlatList,Button} from 'react-native';
import CategoriListItem from './CategoryListItem';
import ListItem from './ListItem';
import { connect} from 'react-redux';
//import Couter from './Couter'
import CounterContainer from '../containers/CouterContainer';

class CategoriList extends React.Component{
      render() {
        //let vale = this.state.arrayName;
       // console.log(this.state.arrayName);
       console.log(this.props);
       const {dataName} = this.props.listData;
       const root = this.props.navigation;
       //const {number} = this.props.number;
      //console.log(dataName)
        return (
            
          <View style={styles.container}>
            <CategoriListItem />
            <CounterContainer/>
            <Button title="NewScreen" onPress={()=>root.navigate('PlayGameScreen')}></Button>
            <View style={styles.marGin}>
            <Button title="Aweather" onPress={()=>root.navigate('WeatherScreen')}></Button>
            </View>
            <View style={styles.listcontent}>
           {/*  { this.state.arrayName.map((item,index) => <View style={styles.contentItem} key={index}><Text style={styles.textItem} key={item}>{item}</Text>
    
            </View>) */}
            <FlatList
            data = {dataName}
            keyExtractor ={(item,index)=>item.key.toString()}
            renderItem={(itemData,index) =>(
              <ListItem  index={itemData.item.key} title={itemData.item.value} />
            )}
            ></FlatList> 
            {/* <FlatList renderItem ={(itemData,index) =>(<ListItem title={itemData.item.value}/>)}/> */}
            </View>
          </View>
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
      },
      marGin:{
        marginTop:30,
      }
    });

export default connect(state =>{
  return{
    listData:state.taskFlatList,
   // number:state.number
  }
})(CategoriList);