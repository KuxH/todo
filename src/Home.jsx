import React, { useState } from "react"
import Create from "./Create"
import "./App.css"

function Home() {
  const [todo, setTodo] = useState([])
  return (
    <div>
      <h2>Todo App</h2>
      <Create />
      {todo.length === 0 ? (
        <p>No todos</p>
      ) : (
        todo.map((todo) => <div>{todo}</div>)
      )}
    </div>
  )
}

export default Home
