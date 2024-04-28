import React from 'react'
import Todo from './todo';

const TodoList = ({ taskList, updateTask, deleteTask }) => {
  return (
    <div className="flex flex-col gap-2 ">
      {taskList.map((todo,i) => (
        <Todo
          key={i}
          task={todo}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TodoList