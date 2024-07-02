import { FC } from "react";
import { Link } from "react-router-dom";
import ToDoForm from "../components/ToDoForm";
import ToDoItem from "../components/ToDoItem";
import { useTasks } from "../context/ToDoProvider";

interface Props {}

const Home: FC<Props> = () => {
  const { updateTask, tasks } = useTasks();

  return (
    <div className="flex justify-center items-center h-screen">
      <ToDoForm onSubmit={updateTask} />
      <div className="ml-6">
        {tasks.map((item, index) => {
          return (
            <Link key={index} to={`/${item.id}`}>
              <ToDoItem title={item.title} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
