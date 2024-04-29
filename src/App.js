import "./App.css";

import Todo from "./component/todo";
import { TodoProvider } from "./context/todoContext";
import Navbar from "./component/navbar";
import { useState } from "react";
import About from "./component/about";

function App() {
  const [page, setPage] = useState("todo");

  const handleRender = e => {
    setPage(e);
  };

  return (
    <TodoProvider>
      <div className="flex items-center justify-center w-full h-screen">
        <div className="w-[30rem] bg-dark rounded-3xl h-[48rem] text-center px-4 py-8 relative">
          <Navbar pageRender={page} changeRender={handleRender} />
          {page === "about" && <About />}
          {page === "todo" && <Todo />}
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
