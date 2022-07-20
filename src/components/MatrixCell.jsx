import React from "react";
import TaskList from "./TaskList";
import TaskListName from "./TaskListName";

function MatrixCell(props) {
  return (
    <section id="matrix-cell">
      <TaskListName listName={props.listName} />
      <div className="cell rounded task-list">
        <TaskList
          listId={props.id}
          priorityList={props.priorityList}
          handleOnDragDrop={props.handleOnDragDrop}
          listName={props.listName}
          deleteItem={props.deleteItem}
        />
      </div>
    </section>
  );
}

export default MatrixCell;
