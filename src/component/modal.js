import { Pencil, Star, Trash } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { cn } from "../lib/ultil";
import { TodoContext } from "../context/todoContext";

const Modal = ({ task, isOpen, handleEdit, closeModal }) => {
  const { removeTask, toggleImportant, getImportant } = useContext(TodoContext);
  const [transition, setTransition] = useState(false);
  const [importantFull, setImportantFull] = useState(false);

  const handleModalClick = event => {
    event.stopPropagation();
  };

  const handleImportant = () => {
    if (importantFull) return;
    if (!task.isImportant && getImportant().length === 3) {
      setImportantFull(true);
      setTimeout(() => {
        setImportantFull(false);
      }, 1000);
      return;
    }
    toggleImportant(task.id);
  };

  useEffect(() => {
    if (isOpen) {
      setTransition(true);
      setTimeout(() => {}, 200);
    } else {
      setTransition(false);
    }
  }, [isOpen]);

  return (
    <div
      className={cn(
        `absolute text-white bg-background-700 rounded-md right-4 top-full overflow-hidden transition-width py-2 flex flex-col justify-between z-50 w-0 h-[10rem]`,
        isOpen &&
          transition &&
          "transition-all duration-300 ease-in-out w-[50%]"
      )}
      onClick={handleModalClick}
    >
      <div
        onClick={handleEdit}
        className="[&>p]:flex [&>p]:px-4 [&>p]:gap-3 [&>p]:justify-start h-12 flex items-center cursor-pointer hover:bg-background-400 transition-all duration-150"
      >
        <p>
          <Pencil className="w-6 h-6" />
          Edit
        </p>
      </div>
      <div
        className="flex items-center h-12 px-4 transition-all duration-150 cursor-pointer hover:bg-background-400 line-clamp-1"
        onClick={() => handleImportant(task.id)}
        role="button"
        disable={importantFull}
      >
        {importantFull ? (
          <p className="flex justify-start w-full gap-3 text-red-400 whitespace-nowrap">
            <Star />
            Max 3 important tasks
          </p>
        ) : !task.isImportant ? (
          <p className="flex justify-start w-full gap-3 whitespace-nowrap">
            <Star />
            Mark as important
          </p>
        ) : (
          <p className="flex justify-start gap-3 text-yellow-400 whitespace-nowrap">
            <Star className="fill-current" strokeWidth={0} />
            Remove important
          </p>
        )}
      </div>
      <div
        role="button"
        className="flex items-center h-12 px-4 transition-all duration-150 cursor-pointer hover:bg-background-400"
        onClick={() => {
          removeTask(task.id);
          closeModal();
        }}
      >
        <p className="flex justify-start gap-3 text-red-500">
          <Trash className="" />
          Delete
        </p>
      </div>
    </div>
  );
};

export default Modal;
