import { useState } from "react";
import { createContext } from "react";

const TodoContext = createContext({
  tasks: [],
  addTask: () => {},
  removeTask: () => {},
});

const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Do the dish",
      isCompleted: false,
      isImportant: false,
    },
  ]);

  const addTask = task => {
    if (!task.trim()) return;
    const id = Date.now();
    const title = task;
    const isCompleted = false;
    const isImportant = false;
    setTasks([...tasks, { id, title, isCompleted, isImportant }]);
  };

  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = id => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const toggleImportant = id => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, isImportant: !task.isImportant } : task
      )
    );
  };

  const updateTask = (index, newValue) => {
    setTasks(prevTaskList =>
      prevTaskList.map(task =>
        task.id === index ? { ...task, title: newValue } : task
      )
    );
  };

  const value = {
    tasks,
    addTask,
    removeTask,
    toggleComplete,
    toggleImportant,
    updateTask,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export { TodoContext, TodoProvider };
