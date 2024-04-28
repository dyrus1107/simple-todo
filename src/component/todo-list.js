import React from 'react'
import Todo from './todo';

const TodoList = ({taskList, updateTask}) => {
  return (
    <div className="flex flex-col gap-2 ">
      {taskList.map(todo => (
        <Todo key={todo.id} task={todo} updateTask={updateTask} />
      ))}
    </div>
  );
}

export default TodoList