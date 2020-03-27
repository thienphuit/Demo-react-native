import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CategoriList from '../components/CategoriList';
import PlayGameScreen from '../screens/PlayGameScreen';
import AweatherScreen from '../screens/AweatherScreen';

const Stack = createStackNavigator();
let navigationOptions = {
  //To hide the ActionBar/NavigationBar
  header: null,
};
function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={CategoriList}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
        name ="PlayGameScreen" component={PlayGameScreen}/>

        <Stack.Screen 
          name ="WeatherScreen" 
          component ={AweatherScreen}
          options ={{
            headerShown: false,
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MyStack;