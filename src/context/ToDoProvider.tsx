import { FC, ReactNode, useContext, useState } from "react";
import { createContext } from "react";

export type Data = { id: string | number; title: string; description: string };

interface DefaultTasks {
  tasks: Data[];
}

export const ToDoContext = createContext<DefaultTasks>({
  tasks: [],
});

interface Props {
  children: ReactNode;
}

const ToDoProvider: FC<Props> = ({ children }) => {
  const [tasks, setTasks] = useState<Data[]>([
    {
      id: 1,
      title: "This is task one.",
      description: "This is what I want to do today",
    },
  ]);

  return (
    <ToDoContext.Provider value={{ tasks }}>{children}</ToDoContext.Provider>
  );
};

export const useTasks = () => {
  return useContext(ToDoContext);
};

export default ToDoProvider;
