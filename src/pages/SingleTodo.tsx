import { FC } from "react";
import { useParams } from "react-router-dom";

interface Props {}

const SingleTodo: FC<Props> = () => {
  const { todo_id } = useParams();
  console.log(todo_id);

  return <div>Single TODO</div>;
};

export default SingleTodo;
