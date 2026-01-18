import { useState } from 'react'
import './App.css'
import "./output.css"
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import { TodoProvider } from './store/TodoProvider'
import TodoItems from './components/TodoItems'
import LoadItems from './components/LoadItems'

function App() {
 

  return (
    <>
    <Header/>
    <TodoProvider>   
      <AddTodo/>
      <LoadItems/>
      <TodoItems/>
    </TodoProvider>
    </>
  )
}

export default App
