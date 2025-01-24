import { Task } from "../types";

interface HeaderProps {
  tasks: Task[];
}

const Header: React.FC<HeaderProps> = ({ tasks }: HeaderProps) => {
  const completedTasks = tasks.filter((task: Task) => task.completed).length;

  return (
    <header className="w-full bg-cyan-900 flex items-center justify-between container-max py-[24px]">
      <h2 className="text-2xl font-medium text-white ">List Tasks App</h2>
      <div className="text-[18px] text-slate-200">
        <span className="font-bold">{completedTasks}</span> /{" "}
        <span>{tasks.length}</span> todos completed
      </div>
    </header>
  );
};

export default Header;
