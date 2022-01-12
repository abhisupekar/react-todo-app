const Task = (props) => {
  //console.log(props.tasks);
  return (
    <ul className="list-group mb-0">
      {props.tasks.map((item) => (
        <li
          key={item.id}
          className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2"
        >
          <div className="d-flex align-items-center">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value=""
              aria-label="..."
            />
            {item.title}
          </div>
          <a href="#!" data-mdb-toggle="tooltip" title="Remove item">
            <i className="fa fa-times"></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Task;
