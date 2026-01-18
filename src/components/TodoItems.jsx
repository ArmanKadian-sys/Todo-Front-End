import { useContext } from "react"
import { TodoContext } from "../store/TodoProvider"
import Button from "./Button";

const TodoItems=()=>{
  const{todoItems, todoDispatcher}=useContext(TodoContext);

  const Delete=(event)=>{
    const id=event.target.value;

    fetch(`http://localhost:3000/deleteItem/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      fetch("http://localhost:3000/getItems").then((res)=>{
      return res.json()
      }).then((result)=>{
      const newTodo=result.map((item)=>{return {text: item.activity, date: item.date, id: item._id, completed:item.completed}})
      todoDispatcher({type: "Load", payload: newTodo});
    })
    })
    .catch(err => {
      console.log(err);
    })
  }
  const handleCheck=(event)=>{

    const id=event.target.id;
    const completed=event.target.checked;


    fetch(`http://localhost:3000/updateItem/${id}`, {
      method: 'PATCH',
      headers: {
    'Content-Type': 'application/json',
      },
      body:JSON.stringify({completed})
    })
    .then(() => {
      fetch("http://localhost:3000/getItems").then((res)=>{
      return res.json()
      }).then((result)=>{
      const newTodo=result.map((item)=>{return {text: item.activity, date: item.date, id: item._id, completed:item.completed}})
      todoDispatcher({type: "Load", payload: newTodo});
    })
    })
    .catch(err => {
      console.log(err);
    })

  }
  
  return(
  <div className="flex justify-center">
  <table className="border border-gray-300">
  <tbody>
    {todoItems.map((item) => (
        <tr key={item.text} className={item.completed?"line-through":""}>
        <td className="px-20 py-4">
          <input type="checkbox" checked={item.completed} className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded " 
          onChange={handleCheck} id={item.id}/>
        </td> 
        <td className="px-20 py-4 ">{item.text}</td>
        <td className="px-20 py-5 ">{item.date}</td>
        <td className="px-20 py-4 ">
          <Button value={item.id} type="Delete" handler={Delete} />
        </td>
      </tr>
    ))}
  </tbody>
  </table>
  </div>
)
}

export default TodoItems;