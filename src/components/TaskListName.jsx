import React from "react";

function TaskListName(props) {
  function changeColor(listName) {
    let listNameCss = "wefwef";
    switch (listName) {
      case "Do":
        listNameCss = "urgent-important";
        break;
      case "Schedule":
        listNameCss = "not-urgent-important";
        break;
      case "Delegate":
        listNameCss = "urgent-not-important";
        break;
      case "Eliminate":
        listNameCss = "not-ugrgent-not-important";
        break;
      default:
        console.log("Something went wrong!");
    }

    return listNameCss;
  }

  return (
    <div
      className={
        "d-inline-flex p-2 bd-highlight rounded list-name " +
        changeColor(props.listName)
      }
    >
      {props.listName}
    </div>
  );
}

export default TaskListName;
