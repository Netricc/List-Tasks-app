import { useState } from "react";
import { Task } from "../types";
const AddTask = ({
  setTasks,
  id,
  setId,
}: {
  id: number;
  setId: React.Dispatch<React.SetStateAction<number>>;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}) => {
  // Default to an empty array
  const [input, setInput] = useState("");

  const handleAddTask = () => {
    if (!input.trim()) {
      alert("Please enter a task");
      return;
    }

    setId((previd: number) => previd + 1);

    const newTask = {
      id: id,
      title: input,
      completed: false,
    };

    setTasks((prevTasks: Task[]) => [...prevTasks, newTask]);
    setInput("");
  };

  return (
    <section className="w-[30%] bg-slate-200 flex flex-col items-center pt-[24px] h-full">
      <input
        className="w-[360px] h-[45px] bg-blue-400 py-1.5 px-[16px] rounded-lg border-2 border-black text-white text-lg outline-0"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add Task"
      />
      <button
        onClick={handleAddTask}
        className="mt-[24px] bg-blue-400 py-[9px] px-[16px] rounded-full cursor-pointer hover:bg-blue-500 transition-colors"
      >
        Add Task
      </button>
    </section>
  );
};

export default AddTask;
