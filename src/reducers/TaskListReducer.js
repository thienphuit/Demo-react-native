
let array ={
    dataName :[{value:'thien',key:1},
    {value:'thie',key:2}
  
  ],
  };
const tastListReducer = ( state = array,action) =>{
    let newTaskList = state.dataName;
    switch (action.type) {
      case 'ADD':
        const newTask = { value: action.taskName }
        return { ...state, dataName:[...newTaskList, {key:Math.random().toString(),value:action.taskName}] }
      case 'DELETE':
        newTaskList = newTaskList.filter((item,i) => item.key !== action.atIndex);
        return {...state,dataName:newTaskList}; 
    }
    return state;
  }
export default tastListReducer;  