import { useContext, useRef } from "react";
import Button from "./Button";
import { TodoContext } from "../store/TodoProvider";

const AddTodo=()=>{
  const {todoDispatcher}=useContext(TodoContext);
  const text=useRef();
  const date=useRef();
  const inputHandler=async()=>{
     try{
      const result= await fetch("https://todo-backend007.azurewebsites.net/postItems", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({text: text.current.value, date: date.current.value})
      })
      }
      catch(error){
        console.log(error);
      }
    fetch("https://todo-backend007.azurewebsites.net/getItems").then((res)=>{
      return res.json()
      }).then((result)=>{
      const newTodo=result.map((item)=>{return {text: item.activity, date: item.date, id: item._id, completed:item.completed}})
      todoDispatcher({type: "Load", payload: newTodo});
      text.current.value='';
      date.current.value='';
    })
    
  }
  
  return(
  <div className="flex justify-center gap-10 m-10">
  <input type="text" ref={text} placeholder="Activity" className="p-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
  <input type="date" ref={date} placeholder="Date" className="p-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
  <Button handler={inputHandler}  type="Add"/>
  </div>
  )
}


export default AddTodo;