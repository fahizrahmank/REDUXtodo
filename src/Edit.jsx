import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { updatetodo } from "./UserReducer";

function Edit() {
  const list = useSelector((state) => state.todo);
  const { id } = useParams();
  const nav = useNavigate();
  const reff = useRef(null);
  const dispatch = useDispatch();
  const filtered = list.filter((e) => e.id === parseInt(id));
  const update = () => {
    const val = reff.current.value;
    dispatch(
      updatetodo({
        id: id,
        added: val,
      })
    );
    nav("/");
  };
  return (
    <div>
      <h1>You are in the edit page</h1>
      <br />
      <br />
      <br />
      {filtered.map((e) => (
        <input key={e.id} ref={reff} defaultValue={e.added} type="text" />
      ))}

      <button onClick={update}>Update</button>
    </div>
  );
}

export default Edit;
