import React, { useState, useRef } from 'react';
import TodoList from './TodoList'


function App() {
  const [todos, setTodos] = useState([])
  const todoUseRef = useRef()

  
function handleAddTodo(e) {
    const name = todoUseRef.current.value;
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {name: name, complete: false}]
    })
    todoUseRef.current.value=null;
  }


  return (
    <>
      <TodoList todos={todos}  /> 
      <input type="text" ref={todoUseRef} />
      <button onClick={handleAddTodo}>Click to add ToDo</button>
    </>
  )
}

export default App;