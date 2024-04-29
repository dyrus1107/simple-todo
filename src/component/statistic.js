import { useContext, useState } from "react";
import { TodoContext } from "../context/todoContext";
import { CheckCheck, Trash2, X } from "lucide-react";
import StatisticItem from "./statistic-item";

const Statistic = () => {
  const { getComplete, getTotal, getImportant, deleteAll } =
    useContext(TodoContext);

  const [confirmed, setConfirmed] = useState(false);
  const [pending, setPending] = useState(false);

  const totalTask = getTotal();
  const totalImportant = getImportant();
  const totalComplete = getComplete().length;
  const completeTasks = getComplete();

  const clearAllTasks = options => {
    if (options.cancle) {
      setConfirmed(false);
      return;
    }
    if (confirmed) {
      deleteAll();
      setConfirmed(false);
      setPending(true);
      setTimeout(() => {
        setPending(false);
      }, 800);
    } else {
      setConfirmed(true);
    }
  };
  return (
    <div className="flex flex-col w-full h-[90%] overflow-auto gap-4">
      <div className="flex items-center justify-center w-full h-32 gap-16 py-6 border-2 rounded-md border-primary ">
        <div className="pl-6 text-white ">
          <h1 className="text-3xl font-bold">Tasks done</h1>
          {totalComplete === totalTask ? (
            <span className="text-xl font-semibold">Great Job</span>
          ) : (
            <span className="text-xl font-semibold">Keep it up</span>
          )}
        </div>
        <div className="flex items-center justify-center text-4xl font-semibold text-white rounded-full w-28 h-28 bg-primary">
          {!totalComplete || !totalTask ? (
            "0"
          ) : totalComplete === totalTask ? (
            <CheckCheck className="w-16 h-16" />
          ) : (
            `${totalComplete}/${totalTask}`
          )}
        </div>
      </div>
      <div className="w-full h-64 pt-3 pb-2 border-2 border-gray-500 rounded-lg bg-dark">
        <h1 className="flex items-center justify-center text-2xl font-semibold text-white">
          Important
          <span className="ml-3 text-lg text-gray-400">
            {getImportant().length}/3
          </span>
        </h1>
        <div className="flex flex-col mt-2 gap-y-2">
          {totalImportant.map(task => (
            <StatisticItem key={task.id} task={task} />
          ))}
        </div>
      </div>
      <div className="w-full h-64 pt-3 pb-2 overflow-auto border border-gray-500 rounded-lg">
        <h1 className="flex items-center justify-center text-2xl font-semibold text-white">
          Completed
        </h1>{" "}
        <div className="flex flex-col mt-2 overflow-auto gap-y-2">
          {completeTasks.map(task => (
            <StatisticItem key={task.id} task={task} />
          ))}
        </div>
      </div>
      {!confirmed && !pending && (
        <div
          role="button"
          className="flex items-center justify-center w-full h-12 gap-2 bg-red-400 hover:bg-red-500"
          onClick={clearAllTasks}
        >
          <Trash2 className="w-8 h-8 text-white" />
          <p className="text-white">Clear all tasks</p>
        </div>
      )}
      {!confirmed && pending && (
        <div className="flex items-center justify-center w-full h-12 text-white border-2 border-white bg-dark-lighter">
          Deleted!
        </div>
      )}
      {confirmed && (
        <div className="flex items-center justify-center w-full h-12">
          <div
            role="button"
            className="flex items-center justify-center w-full h-full gap-2 text-white bg-red-400 hover:bg-red-500"
            onClick={clearAllTasks}
          >
            <Trash2 /> Delete
          </div>
          <div
            role="button"
            className="flex items-center justify-center w-full h-full gap-2 text-white bg-primary hover:bg-[#3DC97F]"
            onClick={() => clearAllTasks({ cancle: true })}
          >
            <X /> Cancel
          </div>
        </div>
      )}
    </div>
  );
};

export default Statistic;
