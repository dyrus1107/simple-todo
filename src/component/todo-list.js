import React, { useContext } from "react";
import TodoItem from "./todo-item";
import { TodoContext } from "../context/todoContext";

const TodoList = () => {
  const { getTask } = useContext(TodoContext);
  return (
    <div className="flex flex-col gap-2 scrollbar ">
      {!getTask().length && (
        <p className="text-lg text-neutral-400">
          Try to add new task to the list
        </p>
      )}
      {getTask().map(task => (
        <TodoItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TodoList;
