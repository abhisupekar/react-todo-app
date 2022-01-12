import { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import React, { lazy, Suspense } from "react";

export default function App() {
  const Task = lazy(() => import("./Task"));
  const [tasks, setTask] = useState(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        setCount(response.length);
        setTask(response);
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
      completed: false
    };
    setTask([...tasks, obj]);
  }

  return (
    <div className="App">
      <section className="vh-100" style={{ backgroundColor: "#e2d5de" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h6 className="mb-3">Awesome Todo List</h6>

                  <form
                    onSubmit={handleSubmit}
                    className="d-flex justify-content-center align-items-center mb-4"
                  >
                    <div className="form-outline flex-fill">
                      <input
                        type="text"
                        id="form3"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" for="form3">
                        What do you need to do today?
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg ms-2"
                    >
                      Add
                    </button>
                  </form>
                  {tasks ? (
                    <Suspense fallback={<h3>Loading....</h3>}>
                      <Task tasks={tasks} />
                    </Suspense>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
