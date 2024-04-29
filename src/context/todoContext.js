import { useEffect, useState } from "react";
import { createContext } from "react";

const TodoContext = createContext({
  tasks: [],
  addTask: () => {},
  removeTask: () => {},
});

const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("tasks");
    console.log(storedTodos);
    if (storedTodos) {
      try {
        setTasks(JSON.parse(storedTodos));
      } catch (error) {
        console.error("Error parsing stored todos:", error);
      }
    }
  }, []);

  const addTask = task => {
    if (!task.trim()) return;

    const id = Date.now();
    const title = task;
    const isCompleted = false;
    const isImportant = false;
    setTasks([...tasks, { id, title, isCompleted, isImportant }]);
    localStorage.setItem(
      "tasks",
      JSON.stringify([...tasks, { id, title, isCompleted, isImportant }])
    );
  };

  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks.filter(task => task.id !== id))
    );
  };

  const toggleComplete = id => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? { ...task, isCompleted: !task.isCompleted, isImportant: false }
          : task
      )
    );

    localStorage.setItem(
      "tasks",
      JSON.stringify(
        tasks.map(task =>
          task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
        )
      )
    );
  };

  const toggleImportant = id => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, isImportant: !task.isImportant } : task
      )
    );

    localStorage.setItem(
      "tasks",
      JSON.stringify(
        tasks.map(task =>
          task.id === id ? { ...task, isImportant: !task.isImportant } : task
        )
      )
    );
  };

  const updateTask = (index, newValue) => {
    setTasks(prevTaskList =>
      prevTaskList.map(task =>
        task.id === index ? { ...task, title: newValue } : task
      )
    );
    localStorage.setItem(
      "tasks",
      JSON.stringify(
        tasks.map(task =>
          task.id === index ? { ...task, title: newValue } : task
        )
      )
    );
  };

  const getTotal = () => {
    return tasks.length;
  };

  const getTotalImportant = () => {
    return tasks.filter(task => !!task.isImportant).length;
  };

  const getImportant = () => {
    return tasks.filter(task => !!task.isImportant);
  };

  const getComplete = () => {
    return tasks.filter(task => !!task.isCompleted);
  };

  const deleteAll = () => {
    setTasks([]);
    localStorage.removeItem("tasks");
  };

  const value = {
    tasks,
    addTask,
    removeTask,
    toggleComplete,
    toggleImportant,
    updateTask,
    getTotal,
    getImportant,
    getTotalImportant,
    getComplete,
    deleteAll
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export { TodoContext, TodoProvider };
