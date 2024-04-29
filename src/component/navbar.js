import { BarChart3, Info } from "lucide-react";
import { useContext } from "react";
import { TodoContext } from "../context/todoContext";

const Navbar = ({ changeRender }) => {
  const { getTotalImportant } = useContext(TodoContext);
  console.log(getTotalImportant());
  const handleRender = e => {
    changeRender(e);
  };

  return (
    <div className="flex items-center justify-between px-3 mb-8">
      <Info
        role="button"
        onClick={() => handleRender("about")}
        className="w-6 h-6 mt-1.5 text-white hover:text-primary"
      />
      <h1
        role="button"
        onClick={() => handleRender("todo")}
        className="text-4xl font-bold select-none text-primary"
      >
        Simple todo
      </h1>
      <div className="relative">
        <BarChart3
          role="button"
          onClick={() => handleRender("statistic")}
          className="w-6 h-6 text-white mt-1.5 hover:text-primary"
        />
        {!!getTotalImportant() && (
          <div className="absolute flex items-center justify-center w-5 h-5 text-xs text-white rounded-full -top-1 -right-3 bg-primary">
            {getTotalImportant()}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
