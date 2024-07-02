import { FC, ReactNode, useContext, useState } from "react";
import { createContext } from "react";

export type Data = { id: string | number; title: string; description: string };

interface DefaultTasks {
  tasks: Data[];
  updateTask(task: Data): void;
}

export const ToDoContext = createContext<DefaultTasks>({
  tasks: [],
  updateTask() {},
});

interface Props {
  children: ReactNode;
}

const TASKS = "tasks";

const ToDoProvider: FC<Props> = ({ children }) => {
  const [tasks, setTasks] = useState<Data[]>([]);

  const updateTask = (task: Data) => {
    // const newTasks = [...tasks, task];
    // setTasks(newTasks);
    // localStorage.setItem(TASKS, JSON.stringify(newTasks));
    setTasks((oldData) => {
      const newTasks = [...oldData, task];
      localStorage.setItem(TASKS, JSON.stringify(newTasks));
      return newTasks;
    });
  };

  return (
    <ToDoContext.Provider value={{ tasks, updateTask }}>
      {children}
    </ToDoContext.Provider>
  );
};

export const useTasks = () => {
  return useContext(ToDoContext);
};

export default ToDoProvider;
