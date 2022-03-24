import React, {useState} from "react";
import { useTodoLayerValue } from "./context/TodoContext";
import TodoList from "./components/ToDoList"
import "./App.css"

const App = () => {

  const [{todos}, dispatch] = useTodoLayerValue()
  const [content, setContent] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()

    if(!content) return;

    const newTodo = {
      id: Math.floor(Math.random() * 100),
      content: content,
      isCompleted: false
    }

    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    })

    setContent(' ')
  }
  
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="todo-form">
        <input className="todo-input" type="text" onChange={(event) => setContent(event.target.value)} value={content}/>
        <button className="todo-button">
          Ekle
        </button>
      </form>

      <TodoList todos={todos} dispatch={dispatch}/>
    </div>
  )
};

export default App;
