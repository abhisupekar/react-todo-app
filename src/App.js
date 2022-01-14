import { useEffect } from "react";
import axios from "axios";
import "./styles.css";
import React, { lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { setTasks, addTask } from "./redux/actions/todoActions";
import { useSelector } from "react-redux";

export default function App() {
  const Task = React.lazy(() => import("./Task"));
  const count = useSelector((state) => state.allTasks.tasks.length);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        dispatch(
          setTasks(response.map((obj) => ({ ...obj, isChecked: false })))
        );
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const obj = {
      id: count + 1,
      title: e.currentTarget.elements.form3.value,
      completed: false,
    };
    dispatch(addTask(obj));
  }

  return (
    <div className="App">
      <section className="vh-100" style={{ backgroundColor: "#e2d5de" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h6 className="mb-3">Todo List</h6>

                  <form
                    onSubmit={handleSubmit}
                    className="d-flex justify-content-center align-items-center mb-4"
                  >
                    <div className="form-outline flex-fill">
                      <input
                        type="text"
                        id="form3"
                        className="form-control form-control-lg"
                        placeholder="Enter Task Here"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg mb-4 ml-2"
                    >
                      Add
                    </button>
                  </form>
                  <Suspense fallback={<h1>Loading ...</h1>}>
                    <Task />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
