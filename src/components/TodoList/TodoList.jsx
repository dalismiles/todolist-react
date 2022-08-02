import { useState } from "react";
import "./index.css";
import TodoForm from "../TodoForm";
import Input from "../Input";

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    setTodo([...todo, task]);
    setTask("");
  };

  return (
    <div className="TodoList">
      <div className="TodoList__input">
        <Input value={task} onChange={setTask} />
        <button className="TodoList__input--button" onClick={addTodo}>
          ADD TASK!
        </button>
      </div>
      <div className="TodoList__taskList">
        <ul>
          {todo.reverse().map((item, i) => (
            <TodoForm key={i} todo={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
