const TodoReducer=(state, action)=>{
  if(action.type=="Load"){
    console.log(action.payload)
    return action.payload;
  }
  else{
    return state;
  }

}

export default TodoReducer;