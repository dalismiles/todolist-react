import "./index.css";

const current = new Date();
const dateEl =
  current.getDate() +
  "-" +
  (current.getMonth() + 1) +
  "-" +
  current.getFullYear();
const timeEl = current.getHours() + ":" + current.getMinutes();

const TodoForm = ({ todo }) => {
  return (
    <div className="TodoForm">

      <li className="TodoForm__li" key={todo.id}>
        <input className="TodoForm__li--checkbox" type="checkbox" /> <span class='checkbox'>{todo}{" "}</span>
        <span className="TodoForm__li--postDate">
          (added on {dateEl} at {timeEl}){" "}
        </span>
      </li>
    </div>
  );
};

export default TodoForm;
