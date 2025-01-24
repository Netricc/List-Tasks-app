import { AddTask, TaskList, Header } from "./components";
import { useState, useEffect } from "react";
import { tasksData } from "./data";

// Define the structure of a task
import { Task } from "./types";

const App = () => {
  // State for tasks
  const [tasks, setTasks] = useState<Task[]>(() => {
    // Load tasks from localStorage on initial render
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? (JSON.parse(storedTasks) as Task[]) : tasksData;
  });

  // State for next task ID
  const [id, setId] = useState<number>(() => {
    // Calculate the next id based on stored tasks
    const storedTasks = localStorage.getItem("tasks");
    const parsedTasks = storedTasks
      ? (JSON.parse(storedTasks) as Task[])
      : tasksData;
    return parsedTasks.length > 0
      ? Math.max(...parsedTasks.map((task) => task.id)) + 1
      : 1;
  });

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <main className="w-full h-screen overflow-hidden bg-[#1E7084] py-[32px] px-[114px]">
      <div className="w-full h-full rounded-xl overflow-hidden bg-white">
        <Header tasks={tasks} />
        <div className="flex h-full w-full">
          <TaskList tasks={tasks} setTasks={setTasks} setId={setId} />
          <AddTask id={id} setId={setId} setTasks={setTasks} />
        </div>
      </div>
    </main>
  );
};

export default App;
