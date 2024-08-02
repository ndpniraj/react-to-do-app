import { FC, ReactNode, useContext, useEffect, useState } from "react";
import { createContext } from "react";

export type Data = { id: string | number; title: string; description: string };

interface DefaultTasks {
  tasks: Data[];
  updateTask(task: Data): void;
  removeTask(id: Data["id"]): void;
}

export const ToDoContext = createContext<DefaultTasks>({
  tasks: [],
  updateTask() {},
  removeTask() {},
});

interface Props {
  children: ReactNode;
}

const TASKS = "tasks";

const ToDoProvider: FC<Props> = ({ children }) => {
  const [tasks, setTasks] = useState<Data[]>([]);

  const updateLS = (data: Data[]) => {
    localStorage.setItem(TASKS, JSON.stringify(data));
  };

  const updateTask = (task: Data) => {
    // const newTasks = [...tasks, task];
    // setTasks(newTasks);
    // localStorage.setItem(TASKS, JSON.stringify(newTasks));
    setTasks((oldData) => {
      const newTasks = [...oldData, task];
      updateLS(newTasks);
      return newTasks;
    });
  };

  const removeTask = (id: Data["id"]) => {
    const newTasks = tasks.filter((task) => task.id !== +id);
    setTasks(newTasks);
    updateLS(newTasks);
  };

  useEffect(() => {
    const result = localStorage.getItem(TASKS);
    if (result) {
      setTasks(JSON.parse(result));
    }
  }, []);

  return (
    <ToDoContext.Provider value={{ tasks, updateTask, removeTask }}>
      {children}
    </ToDoContext.Provider>
  );
};

export const useTasks = () => {
  return useContext(ToDoContext);
};

export default ToDoProvider;
