import { Check, Pencil, Star, Trash } from "lucide-react";
import React from "react";

const Modal = ({ isOpen, isEditing, handleEdit }) => {
  const handleModalClick = event => {
    event.stopPropagation();
  };

  return (
    <div
      className={`absolute text-white bg-background-700 rounded-md right-4 top-full overflow-hidden transition-all py-2  flex flex-col justify-between z-50`}
      style={{ width: isOpen ? "50%" : "0" }}
      onClick={handleModalClick}
    >
      <div
        onClick={handleEdit}
        className="[&>p]:flex [&>p]:px-4 [&>p]:gap-3 [&>p]:justify-start h-12 flex items-center cursor-pointer hover:bg-background-400 transition-all duration-150"
      >
        {isEditing ? (
          <p>
            <Check className="text-xl" /> Done
          </p>
        ) : (
          <p>
            <Pencil className="w-6 h-6" />
            Edit
          </p>
        )}
      </div>
      <div className="flex items-center h-12 px-4 transition-all duration-150 cursor-pointer hover:bg-background-400">
        <p className="flex justify-start gap-3 ">
          <Star />
          Mark as important
        </p>
      </div>
      <div className="flex items-center h-12 px-4 transition-all duration-150 cursor-pointer hover:bg-background-400">
        <p className="flex justify-start gap-3 text-red-500">
          <Trash className="" />
          Delete
        </p>
      </div>
    </div>
  );
};

export default Modal;
