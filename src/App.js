import "./App.css";

import Todo from "./component/todo";
import { TodoProvider } from "./context/todoContext";

function App() {
  return (
    <TodoProvider>
      <div className="flex items-center justify-center w-full h-screen">
        <div className="w-[30rem] bg-dark rounded-3xl h-[48rem] text-center px-4 py-8  relative">
          <h1 className="mb-8 text-4xl font-bold text-primary">Simple todo</h1>
          <Todo />
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
