import React from "react";
import { MdDelete } from "react-icons/md";

function Todos(props) {
  return (
    <div className="todo">
      <div className="item">{props.name}</div>
      <div className="icons">
        <MdDelete onClick={() => props.deleteTodo(props.id)} id={props.id} />
      </div>
    </div>
  );
}

export default Todos;
