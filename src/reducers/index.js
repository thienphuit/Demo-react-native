import {combineReducers} from 'redux';
import tastListReducer from './TaskListReducer';
import counterReducer from './CounterReducer';

const allReducer = combineReducers({taskFlatList:tastListReducer,number:counterReducer})


export default allReducer;