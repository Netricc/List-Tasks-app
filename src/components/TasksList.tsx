import trashIcon from "./../assets/trash-solid.svg";
import { Task } from "./../types";
const TasksList = ({
  tasks,
  setTasks,
  setId,
}: {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  setId: React.Dispatch<React.SetStateAction<number>>;
  tasks: Task[];
}) => {
  const handleCompleteTask = (id: number) => {
    console.log("Task completed", id);
    // Update the tasks array
    setTasks(() =>
      tasks.map((task: Task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  };

  const handleDeleteTask = (id: number) => {
    console.log("Task deleted", id);
    setId((prevId: number) => prevId - 1);
    // Update the tasks array
    setTasks(() => tasks.filter((task: Task) => task.id !== id));
  };
  return (
    <section className="w-[70%] h-full bg-[#ececec] container-max py-[40px] overflow-auto">
      <div className="w-full flex flex-col gap-[20px]">
        {tasks.map(
          (task: { title: string; id: number; completed: boolean }) => (
            <div
              key={task.id}
              className="flex w-[60%] bg-slate-50 h-[60px] items-center  justify-between  px-[14px] py-[10px] "
            >
              <h3
                onClick={() => handleCompleteTask(task.id)}
                className={`${
                  task.completed
                    ? "line-through text-slate-400"
                    : "no-underline text-black"
                } cursor-pointer text-xl font-medium select-none`}
              >
                {task.id} - {task.title}
              </h3>

              <button
                onClick={() => handleDeleteTask(task.id)}
                className="cursor-pointer hover:bg-red-500 p-[6px] rounded-full transition-colors select-none"
              >
                <img src={trashIcon} width={20} height={20} alt="trash icon" />
              </button>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default TasksList;
