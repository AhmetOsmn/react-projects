import React from "react";
import {GrFormClose, GrFormEdit, GrFormCheckmark} from 'react-icons/gr'
import { useTodoLayerValue } from "../context/TodoContext";


const ToDo = ({todo}) => {
  return (
    <div className="todo-row">
      <div>
        {todo.content}
      </div>
      <div className="todo-icons">
        <GrFormClose className="todo-icon"/>
        <GrFormEdit className="todo-icon"/>

      </div>
    </div>
  );
};

export default ToDo;
