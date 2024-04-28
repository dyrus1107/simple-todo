import "./App.css";
import { useState } from "react";
import TodoList from "./component/todo-list";
import { Plus } from "lucide-react";

function App() {
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      title: "Add a task",
      isCompleted: false,
    },
  ]);
  const [newTask, setNewTask] = useState("");

  const updateTask = (index, newValue) => {
    setTaskList(prevTaskList =>
      prevTaskList.map(task =>
        task.id === index ? { ...task, title: newValue } : task
      )
    );
  };

  const createTask = () => {
    if (!newTask.trim()) return;

    const id = Date.now();
    const title = newTask;
    const isCompleted = false;
    const task = {
      id,
      title,
      isCompleted,
    };
    setTaskList(prevTaskList => [...prevTaskList, task]);
    setNewTask("");
  };

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      createTask();
    }
  };

  const deleteTask = id => {
    setTaskList(prevTaskList => prevTaskList.filter(task => task.id !== id));
    console.log(id);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="w-[30rem] bg-dark rounded-3xl h-[48rem] text-center px-4 py-8  relative">
        <h1 className="mb-8 text-4xl font-bold text-primary">My todo list</h1>
        <div className="overflow-auto h-[80%]">
          <TodoList
            taskList={taskList}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        </div>
        <div className="absolute bottom-0 left-0 flex items-center justify-end w-full h-20 px-4 py-8 rounded-b-3xl">
          <div className="flex items-center justify-between w-full gap-1 mb-10 rounded-full cursor-pointer ">
            <input
              type="text"
              className="w-full h-12 px-2 text-white border rounded-md bg-dark-lighter border-background-700 outline outline-0 focus:outline-0"
              onChange={e => {
                setNewTask(e.target.value);
              }}
              onKeyDown={handleKeyDown}
              value={newTask}
            />
            <div
              className="flex items-center justify-center w-20 h-12 rounded-md bg-primary"
              onClick={createTask}
            >
              <Plus className="w-8 h-8 font-bold text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
