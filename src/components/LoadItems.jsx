import { useContext, useEffect } from "react";
import {TodoContext} from "../store/TodoProvider"; 

const LoadItems=()=>{
  const {todoItems, todoDispatcher}=useContext(TodoContext);

  useEffect(()=>{

    fetch("https://todo-backend007.azurewebsites.net/getItems").then((res)=>{
      return res.json()
    }).then((result)=>{
      console.log(result);
      const newTodo=result.map((item)=>{return {text: item.activity, date: item.date, id: item._id, completed:item.completed}})
      todoDispatcher({type: "Load", payload: newTodo});
    })
    
    
  },[])
   

  return(
  <>
  <h1>hello</h1>
  </>
  )
}


export default LoadItems;