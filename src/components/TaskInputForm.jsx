import React, { useState } from "react";

function TaskInputForm(props) {
  const [task, setTask] = useState({
    task: "",
    important: false,
    urgent: false,
  });

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    // console.log(name + " " + value);
    // console.log(event.target.checked);
    setTask((prevValue) => {
      switch (name) {
        case "urgent":
          if (task.urgent) {
            value = false;
          } else {
            value = true;
          }
          break;
        case "important":
          if (task.important) {
            value = false;
          } else {
            value = true;
          }
          break;
        default:
      }
      return { ...prevValue, [name]: value };
    });
  }

  function handleOnClick(event) {
    event.preventDefault();
    if (task.task === "") {
      alert("How can you finish 'nothing'?");
      return;
    } else {
      console.log("handleOnClick() " + task.task);
      props.addTask(task);
      setTask({
        task: "",
        important: false,
        urgent: false,
      });
    }
  }

  return (
    <div className="container-fluid task-input-form">
      <form>
        <div className="row">
          <div className="col-8">
            <input
              onChange={handleChange}
              type="text"
              name="task"
              placeholder="What needs to be done?"
              value={task.task}
              className="form-control form-control-lg"
            />
          </div>
          <div className="col-3">
            <div
              className="btn-group"
              role="group"
              aria-label="Basic checkbox toggle button group"
            >
              <input
                onChange={handleChange}
                name="urgent"
                type="checkbox"
                checked={task.urgent}
                id="task-urgent"
                value="urgent"
                className="btn-check"
                autoComplete="off"
              />
              <label
                className="btn btn-lg btn-outline-dark"
                htmlFor="task-urgent"
              >
                Urgent
              </label>

              <input
                onChange={handleChange}
                name="important"
                type="checkbox"
                checked={task.important}
                id="task-important"
                value="important"
                className="btn-check"
                autoComplete="off"
              />
              <label
                className="btn btn-lg btn-outline-dark"
                htmlFor="task-important"
              >
                Important
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <div className="col">
            <div className="form-check">
              <input
                onChange={handleChange}
                name="urgent"
                type="checkbox"
                id="task-urgent"
                value="urgent"
                className="form-check-input"
              />
              <label className="for-check-label" for="task-urgent">
                Urgent
              </label>
            </div>
          </div>
          <div className="col">
            <div className="form-check">
              <input
                onChange={handleChange}
                name="important"
                type="checkbox"
                id="task-important"
                value="important"
                className="form-check-input"
              />
              <div className="btn btn-primary" for="task-important">
                Important
              </div>
            </div>
          </div> */}
        </div>
        <div className="row">
          <div className="col add-task-btn">
            <button onClick={handleOnClick} className="btn btn-dark">
              Add Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TaskInputForm;
