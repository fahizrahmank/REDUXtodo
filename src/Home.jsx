import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodo, removetodo } from "./UserReducer";
import { useNavigate } from "react-router-dom";

function Home() {
  const reff = useRef();
  const nav = useNavigate();
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo);
  console.log(todoList);

  const handleClick = () => {
    const added = reff.current.value;
    dispatch(addtodo({ id: Date.now(), added }));
    reff.current.value = "";
  };

  const delet = (e) => {
    const newid = parseInt(e.target.id);
    console.log(newid);
    dispatch(removetodo({ id: newid }));
  };

  return (
    <div>
      <input ref={reff} type="text" placeholder="type here" />
      <button onClick={handleClick}>Add</button>
      <ul>
        {todoList.map((e) => (
          <li key={e.id}>
            {e.added}
            <button onClick={() => nav(`/edit/${e.id}`)}>edit</button>
            <button id={e.id} onClick={delet}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
