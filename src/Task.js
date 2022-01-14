import { useSelector, useDispatch } from "react-redux";
import {
  setTasks,
  deleteAllTasks,
  deleteTasks,
  checkTask,
} from "./redux/actions/todoActions";
import { useRef } from "react";

const Task = () => {
  const tasks = useSelector((state) => state.allTasks.tasks);
  const dispatch = useDispatch();
  const parentBoxRef = useRef();
  const childBoxRef = useRef();
  const deleteIcon = useRef();

  function handleDelete(e) {
    if (parentBoxRef.current.checked && !e.target.className == "fa fa-times") {
      dispatch(deleteAllTasks());
    } else {
      const ids = [];
      tasks.filter((item) => item.isChecked).map((item) => ids.push(item.id));
      if (!ids.length) {
        ids.push(parseInt(e.target.id));
      }
      dispatch(deleteTasks(ids));
    }
  }

  function checkAllCheckboxes(e) {
    dispatch(
      setTasks(
        tasks.map((obj) => ({
          ...obj,
          isChecked: parentBoxRef.current.checked,
        }))
      )
    );
  }
  function checkCheckbox(e) {
    dispatch(checkTask([parseInt(e.target.id), !e.target.checked]));
  }

  return (
    <div>
      <ul className="list-group mb-0">
        <div className="inputAll mb-2">
          <input
            className="form-check-input me-2 main-checkbox mt-2"
            type="checkbox"
            aria-label="..."
            ref={parentBoxRef}
            onChange={checkAllCheckboxes}
          />
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
        <div className="border-top my-3"></div>
        {tasks.map((task, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2"
          >
            <div className="d-flex align-items-center">
              <input
                id={task.id}
                className="form-check-input me-2"
                type="checkbox"
                aria-label="..."
                ref={childBoxRef}
                checked={task.isChecked}
                onChange={checkCheckbox}
              />
              {task.title}
            </div>
            <a
              href="#!"
              data-mdb-toggle="tooltip"
              title="Remove item"
              onClick={handleDelete}
            >
              <i id={task.id} className="fa fa-times"></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task;
