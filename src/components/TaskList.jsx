import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TaskItem from "./TaskItem";

// Reorders lists depending on where item is being dropped.
// Return: Array
function reorder(list, startIndex, endIndex) {
  const result = Array.from(list); // Make a shallow copy of the list
  const [removed] = result.splice(startIndex, 1); // Removed the seleted item from the list and stores removed item
  result.splice(endIndex, 0, removed); // At destination index, add the removed item from list in front of the destination index.
  console.log("something" + result);
  return result;
}

function TaskList(props) {
  // Handles dragging and dropping of components
  function onDragEnd(result) {
    if (!result.destination) {
      console.log("Dropping object outside droppable");
    }
    const modifiedTaskList = reorder(
      props.priorityList,
      result.source.index,
      result.destination.index
    );
    return props.handleOnDragDrop(props.listId, modifiedTaskList);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={"list-" + props.id}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {/* {console.log(props.priorityList)}x */}
            {props.priorityList.map((task, index) => (
              <Draggable
                key={"task-" + index}
                draggableId={"draggable-" + index}
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <TaskItem
                      // key={"taskItem-" + index}
                      listId={props.listId}
                      index={index}
                      taskItem={task}
                      listName={props.listName}
                      deleteItem={props.deleteItem}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default TaskList;
