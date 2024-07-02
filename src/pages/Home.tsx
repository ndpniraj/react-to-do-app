import { FC, useState, useContext } from "react";
import { Link } from "react-router-dom";
import ToDoForm from "../components/ToDoForm";
import ToDoItem from "../components/ToDoItem";
import { Data, ToDoContext } from "../context/ToDoProvider";

interface Props {}

const Home: FC<Props> = () => {
  const context = useContext(ToDoContext);
  console.log(context);
  const [tasks, setTasks] = useState<Data[]>([]);

  return (
    <div className="flex justify-center items-center h-screen">
      <ToDoForm
        onSubmit={(data) => {
          console.log(data);
          setTasks([...tasks, data]);
        }}
      />
      <div className="ml-6">
        {context.tasks.map((item, index) => {
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
