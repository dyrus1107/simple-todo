import { Circle, CircleCheckBig, EllipsisVertical } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import Modal from "./modal"; // Assuming Modal component handles its rendering

const Todo = ({ task, updateTask, deleteTask }) => {
  const [isComplete, setIsComplete] = useState(task.isCompleted);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleClickOutside = event => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsModalOpen(false);
    }
  };

  const handleCompleteTask = () => {
    setIsComplete(!isComplete);
  };

  const handleModal = e => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
  }, []);

  const handleEdit = () => {
    setIsEditing(!isEditing);
    setIsModalOpen(false);
  };

  const onKeyDown = e => {
    if (e.code === "Enter") {
      updateTask(task.id, e.target.value);
      setIsEditing(false);
    }
  };

  const onBlur = () =>{
    setIsEditing(false)
  }

  const onDelete = () => {
    deleteTask(task.id)
  }

  return (
    <div className="relative flex items-center justify-start gap-2 px-4 rounded-md h-14 bg-dark-lighter">
      {isComplete ? (
        <CircleCheckBig
          onClick={handleCompleteTask}
          className="text-white cursor-pointer "
        />
      ) : (
        <Circle
          onClick={handleCompleteTask}
          className="text-white cursor-pointer "
        />
      )}
      <div
        className={`w-full overflow-hidden text-xl text-left  ${
          isComplete ? "text-gray-300 line-through" : "text-white"
        }`}
        onKeyDown={onKeyDown}
      >
        {isEditing ? (
          <input
            className="w-full h-10 px-2 bg-transparent border rounded-md border-background-400 bg-background-700 outline outline-0 focus:outline-0"
            type="text"
            autoFocus
            onBlur={onBlur}
          />
        ) : (
          <p>{task.title}</p>
        )}
      </div>
      <button
        className={`p-1 ml-auto rounded-full hover:bg-background-700 ${
          isModalOpen ? "bg-background-700" : ""
        }`}
        ref={modalRef} // Assign ref to modal container
        onClick={handleModal}
      >
        <EllipsisVertical className="text-white" />
      </button>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          fowardRef={modalRef}
          handleEdit={handleEdit}
          isEditing={isEditing}
          onDelete={onDelete}
        />
      )}
    </div>
  );
};

export default Todo;
