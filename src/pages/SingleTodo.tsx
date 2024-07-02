import { FC, useContext } from "react";
import { useParams } from "react-router-dom";
import { ToDoContext } from "../context/ToDoProvider";

interface Props {}

const SingleTodo: FC<Props> = () => {
  const { tasks } = useContext(ToDoContext);

  const { todo_id } = useParams();
  const task = tasks.find((task) => task.id == Number(todo_id));
  console.log(task);

  return <div>Single TODO</div>;
};

export default SingleTodo;
