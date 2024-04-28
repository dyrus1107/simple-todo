import { Plus } from "lucide-react";
import TodoList from "./todo-list";
import { useContext, useState } from "react";
import { TodoContext } from "../context/todoContext";

const Todo = () => {
  const { addTask } = useContext(TodoContext);
  const [inputValue, setInputValue] = useState("");

  // const updateTask = (index, newValue) => {
  //   setTaskList(prevTaskList =>
  //     prevTaskList.map(task =>
  //       task.id === index ? { ...task, title: newValue } : task
  //     )
  //   );
  // };

  const createTask = () => {
    addTask(inputValue);
    setInputValue("");
  };

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      addTask(inputValue);
      setInputValue("");
    }
  };

  // const deleteTask = id => {
  //   setTaskList(prevTaskList => prevTaskList.filter(task => task.id !== id));
  // };

  // const handleImportant = id => {
  //   setTaskList(prev =>
  //     prev.map(task =>
  //       task.id === id ? { ...task, isImportant: !task.isImportant } : task
  //     )
  //   );
  // };

  return (
    <>
      <div className="overflow-auto h-[80%]">
        <TodoList />
      </div>
      <div className="absolute bottom-0 left-0 flex items-center justify-end w-full h-20 px-4 py-8 rounded-b-3xl">
        <div className="flex items-center justify-between w-full gap-2 mb-10 rounded-full cursor-pointer ">
          <input
            type="text"
            className="w-full h-12 px-2 text-white border rounded-sm bg-dark-lighter border-background-700 outline outline-0 focus:outline-0"
            onChange={e => {
              setInputValue(e.target.value);
            }}
            onKeyDown={handleKeyDown}
            value={inputValue}
          />
          <div
            className="flex items-center justify-center w-20 h-12 rounded-sm bg-primary"
            onClick={createTask}
          >
            <Plus className="w-8 h-8 font-bold text-white" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
