import React, { useState } from "react";

function TaskItem(props) {
  const [checked, setChecked] = useState(false);
  const [hover, setHover] = useState(false);

  // Returns current at which the task was map.
  function currentDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;
    return today;
  }

  function handleMouseOver() {
    setHover(true);
  }

  function handleMouseOut() {
    setHover(false);
  }

  // Habndling strikethrough of text
  function handleOnClick() {
    setChecked(!checked ? true : false);
  }

  // Calls deleteItem function from App components (ie. deleteTaskitem())
  function handelDelete() {
    props.deleteItem(props.index, props.listId);
  }

  return (
    <div className="container-fluid">
      <div className="task-item rounded">
        <div className="row">
          <div className="col">
            <div
              className="container-fluid task-text"
              style={{ textDecoration: checked ? "line-through" : "" }}
            >
              <div className="row">
                <p>{props.taskItem}</p>
                <p className="task-date">{currentDate()}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <input
              onClick={handleOnClick}
              id="checkbox-done"
              className="form-check-input"
              type="checkbox"
            />
            <label htmlFor="checkbox-done">&nbsp;Done</label>
          </div>
          <div className="col-6 delete-icon">
            <span
              onClick={handelDelete}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              Delete&nbsp;
              <i className={(hover ? "far" : "fas") + " fa-trash-alt"}></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
