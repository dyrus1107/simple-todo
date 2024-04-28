import { Pencil, Star, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import { cn } from "../lib/ultil";

const Modal = ({ isOpen, handleEdit, onDelete }) => {
  const [transition, setTransition] = useState(false);

  const handleModalClick = event => {
    event.stopPropagation();
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
        // isOpen && !transition && "w-full",
        // isOpen &&
        //   transition &&
        //   "transition-all duration-300 ease-in-out w-[50%]",
        // !isOpen && "w-0"
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
      <div className="flex items-center h-12 px-4 transition-all duration-150 cursor-pointer hover:bg-background-400 line-clamp-1">
        <p className="flex justify-start gap-3 whitespace-nowrap">
          <Star />
          Mark as important
        </p>
      </div>
      <div
        role="button"
        className="flex items-center h-12 px-4 transition-all duration-150 cursor-pointer hover:bg-background-400"
        onClick={onDelete}
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
