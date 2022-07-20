import React, { useState } from "react";
import "./App.css";
import "./components/TaskInputForm";
import TaskInputForm from "./components/TaskInputForm";
import MatrixCell from "./components/MatrixCell";

function removeTaskItem(taskList, taskIndex) {
  return taskList.filter((taskItem, index) => {
    return index !== taskIndex;
  });
}

function App() {
  const [taskList, setTaskList] = useState({
    do: ["Tasks in this quadrant should be done as soon as possible."],
    schedule: ["Tasks in this quadrant should be scheduled ahead of time."],
    delegate: ["Tasks in this quadrant should be delegated unto other people."],
    eliminate: ["Tasks in this quadrant should be eliminated immediatly."],
  });

  // Adds TaskItem into respective TaskList
  function addTask(task) {
    if (task.important && task.urgent) {
      setTaskList((prevValue) => ({
        ...prevValue,
        do: [...prevValue.do, task.task],
      }));
    } else if (task.important && !task.urgent) {
      setTaskList((prevValue) => ({
        ...prevValue,
        schedule: [...prevValue.schedule, task.task],
      }));
    } else if (!task.important && task.urgent) {
      setTaskList((prevValue) => ({
        ...prevValue,
        delegate: [...prevValue.delegate, task.task],
      }));
    } else {
      setTaskList((prevValue) => ({
        ...prevValue,
        eliminate: [...prevValue.eliminate, task.task],
      }));
    }
  }

  // Deletes specifc TaskItem from specific list by index
  function deleteTaskItem(taskIndex, listId) {
    switch (listId) {
      case 0:
        setTaskList((prevValue) => ({
          ...prevValue,
          do: removeTaskItem(prevValue.do, taskIndex),
        }));
        break;
      case 1:
        setTaskList((prevValue) => ({
          ...prevValue,
          schedule: removeTaskItem(prevValue.schedule, taskIndex),
        }));
        break;
      case 2:
        setTaskList((prevValue) => ({
          ...prevValue,
          delegate: removeTaskItem(prevValue.delegate, taskIndex),
        }));
        break;
      case 3:
        setTaskList((prevValue) => ({
          ...prevValue,
          eliminate: removeTaskItem(prevValue.eliminate, taskIndex),
        }));
        break;
      default:
        console.log("Something went wrong!");
    }
  }

  // Handles reordering of each list whenever TaskItem is dragged and dropped
  function handleOnDragDrop(taskListIndex, priorityList) {
    switch (taskListIndex) {
      case 0:
        setTaskList((prevValue) => ({ ...prevValue, do: priorityList }));
        break;
      case 1:
        setTaskList((prevValue) => ({ ...prevValue, schedule: priorityList }));
        break;
      case 2:
        setTaskList((prevValue) => ({ ...prevValue, delegate: priorityList }));
        break;
      case 3:
        setTaskList((prevValue) => ({ ...prevValue, eliminate: priorityList }));
        break;
      default:
        console.log("Something went wrong!");
    }
  }

  return (
    <div className="App">
      <section id="title">
        <div className="container-fluid title-header">
          <h1>Eisenhower Matrix</h1>
        </div>
      </section>

      <section id="task-input">
        <TaskInputForm addTask={addTask} />
      </section>
      <div className="container-fluid eisenhower-matrix">
        <div className="row">
          <div className="col-lg-6">
            <MatrixCell
              listName={"Do"}
              id={0}
              priorityList={taskList.do}
              deleteItem={deleteTaskItem}
              handleOnDragDrop={handleOnDragDrop}
            />
          </div>
          <div className="col-lg-6">
            <MatrixCell
              listName={"Schedule"}
              id={1}
              priorityList={taskList.schedule}
              deleteItem={deleteTaskItem}
              handleOnDragDrop={handleOnDragDrop}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <MatrixCell
              listName={"Delegate"}
              id={2}
              priorityList={taskList.delegate}
              deleteItem={deleteTaskItem}
              handleOnDragDrop={handleOnDragDrop}
            />
          </div>
          <div className="col-lg-6">
            <MatrixCell
              listName={"Eliminate"}
              id={3}
              priorityList={taskList.eliminate}
              deleteItem={deleteTaskItem}
              handleOnDragDrop={handleOnDragDrop}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
