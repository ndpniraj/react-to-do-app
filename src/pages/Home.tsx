import { FC, useState } from "react";
import ToDoForm, { Data } from "../components/ToDoForm";
import ToDoItem from "../components/ToDoItem";

interface Props {}

const Home: FC<Props> = () => {
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
        {tasks.map((item, index) => {
          return <ToDoItem key={index} title={item.title} />;
        })}
      </div>
    </div>
  );
};

export default Home;
