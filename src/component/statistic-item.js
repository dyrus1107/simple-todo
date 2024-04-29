import { Check, CircleCheckBig, Star, X } from "lucide-react";
import { useContext } from "react";
import { TodoContext } from "../context/todoContext";
import { cn } from "../lib/ultil";

const StatisticItem = ({ task }) => {
  const { removeTask, toggleImportant, toggleComplete } =
    useContext(TodoContext);

  return (
    <div className="flex items-center justify-start w-full gap-2 px-2 text-white rounded-sm bg-dark-lighter h-14">
      {task.isCompleted ? (
        <CircleCheckBig
          className="w-6 h-6 cursor-pointer"
          onClick={() => toggleComplete(task.id)}
        />
      ) : (
        <Star
          className="w-6 h-6 text-yellow-400 cursor-pointer fill-current hover:fill-none"
          strokeWidth={1}
          onClick={() => toggleImportant(task.id)}
        />
      )}
      <p
        className={cn(
          "truncate text-left w-[70%]",
          task.isCompleted ? "text-gray-300 line-through" : ""
        )}
      >
        {task.title}
      </p>
      {!task.isCompleted && (
        <Check
          className="w-6 h-6 ml-auto cursor-pointer hover:text-primary"
          onClick={() => toggleComplete(task.id)}
        />
      )}
      <X
        className="w-6 h-6 ml-auto text-red-500 cursor-pointer hover:text-red-400"
        onClick={() => removeTask(task.id)}
      />
    </div>
  );
};

export default StatisticItem;
