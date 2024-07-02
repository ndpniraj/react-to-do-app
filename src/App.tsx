import { FC, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ToDoForm, { Data } from "./components/ToDoForm";
import ToDoItem from "./components/ToDoItem";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App: FC = () => {
  const [tasks, setTasks] = useState<Data[]>([]);

  const myCustomTasks = tasks.map((item, index) => {
    return <ToDoItem key={index} title={item.title} />;
  });

  const HomePage = () => (
    <div className="flex justify-center items-center h-screen">
      <ToDoForm
        onSubmit={(data) => {
          setTasks([...tasks, data]);
        }}
      />
      <div className="ml-6">{myCustomTasks}</div>
    </div>
  );

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
