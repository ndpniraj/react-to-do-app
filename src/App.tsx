import { FC, useState } from "react";
import ToDoForm, { Data } from "./components/ToDoForm";

const App: FC = () => {
  const [tasks, setTasks] = useState<Data[]>([]);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <ToDoForm
        onSubmit={(data) => {
          setTasks([...tasks, data]);
        }}
      />
      <div>{JSON.stringify(tasks)}</div>
    </div>
  );
};

export default App;
