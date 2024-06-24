import { FC, useState } from "react";
import ToDoForm, { Data } from "./components/ToDoForm";
import ToDoItem from "./components/ToDoItem";

const App: FC = () => {
  const [tasks, setTasks] = useState<Data[]>([]);

  const myCustomTasks = tasks.map((item, index) => {
    return <ToDoItem key={index} title={item.title} />;
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <ToDoForm
        onSubmit={(data) => {
          setTasks([...tasks, data]);
        }}
      />
      <div className="ml-6">{myCustomTasks}</div>
    </div>
  );
};

export default App;
