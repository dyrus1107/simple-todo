import React, { useContext } from "react";
import TodoItem from "./todo-item";
import { TodoContext } from "../context/todoContext";

const TodoList = () => {
  const { tasks } = useContext(TodoContext);
  return (
    <div className="flex flex-col gap-2 ">
      {!tasks.length && (
        <p className="text-lg text-neutral-400">
          Try to add new task to the list
        </p>
      )}
      {tasks.map((task, i) => (
        <TodoItem key={i} task={task} />
      ))}
    </div>
  );
};

export default TodoList;
