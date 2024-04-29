import { Circle, CircleCheckBig, EllipsisVertical } from "lucide-react";
import React, { useContext, useEffect, useRef, useState } from "react";
import Modal from "./modal"; // Assuming Modal component handles its rendering
import { cn } from "../lib/ultil";
import { TodoContext } from "../context/todoContext";

const TodoItem = ({ task }) => {
  const { toggleComplete, updateTask } = useContext(TodoContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const modalRef = useRef(null);

  const handleClickOutside = event => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsModalOpen(false);
    }
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

  const onBlur = () => {
    setIsEditing(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative flex items-center justify-start gap-2 px-4 rounded-md h-14 bg-dark-lighter">
      {task.isCompleted ? (
        <CircleCheckBig
          onClick={() => toggleComplete(task.id)}
          className={cn(
            "text-white cursor-pointer",
            task.isImportant && "text-yellow-500"
          )}
        />
      ) : (
        <Circle
          onClick={() => toggleComplete(task.id)}
          className={cn(
            "text-white cursor-pointer",
            task.isImportant && "text-yellow-500"
          )}
        />
      )}
      <div
        className={cn(
          "w-full overflow-hidden text-xl text-left",
          task.isCompleted ? "text-gray-400 line-through" : "text-white"
        )}
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
          <p role="button" onClick={handleEdit} className="px-[.48rem]">
            {task.title}
          </p>
        )}
      </div>
      <button
        className={`p-1 ml-auto rounded-full hover:bg-background-700 ${
          isModalOpen ? "bg-background-700" : ""
        }`}
        ref={modalRef}
        onClick={handleModal}
      >
        <EllipsisVertical className="text-white" />
      </button>
      {isModalOpen && (
        <Modal
          task={task}
          fowardRef={modalRef}
          isImportant={task.isImportant}
          isOpen={isModalOpen}
          handleEdit={handleEdit}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default TodoItem;
