import { FC } from "react";
import { useParams } from "react-router-dom";
import { useTasks } from "../context/ToDoProvider";

interface Props {}

const SingleTodo: FC<Props> = () => {
  const { tasks } = useTasks();

  const { todo_id } = useParams();
  const task = tasks.find((task) => task.id == Number(todo_id));

  if (!task)
    return (
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-5xl">Not Found</h1>
      </div>
    );

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="shadow-sm p-5 rounded bg-blue-100">
        <h1 className="text-3xl font-bold">{task?.title}</h1>
        <p className="text-lg">{task?.description}</p>
      </div>
    </div>
  );
};

export default SingleTodo;
