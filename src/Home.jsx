import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodo, removetodo } from "./UserReducer";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

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
      <div style={{ textAlign: "center" }}>
        <h1>TODOD APP</h1>
        <br />
        <br />
        <br />
        <br />
        <br />

        {/* <input /> */}
        <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg" ref={reff} type="text" placeholder="type here" ></InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
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
    </div>
  );
}

export default Home;
