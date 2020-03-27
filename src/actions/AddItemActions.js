const addTask = (enterGold) =>{
    return{
      type:'ADD',
       //arrayName:[...arrayName,{key:Math.random().toString(),value:input}]
       taskName:enterGold
    }
  } 
  export default addTask;