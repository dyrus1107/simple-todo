import { BarChart3, Info } from "lucide-react";

const Navbar = ({ pageRender, changeRender }) => {
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
        className="text-4xl font-bold text-primary"
      >
        Simple todo
      </h1>
      <BarChart3
        role="button"
        onClick={() => handleRender("statistic")}
        className="w-6 h-6 text-white mt-1.5 hover:text-primary"
      />
    </div>
  );
};

export default Navbar;
