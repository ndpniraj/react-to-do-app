import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import SingleTodo from "./pages/SingleTodo";
import ToDoProvider from "./context/ToDoProvider";

const App: FC = () => {
  return (
    <ToDoProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:todo_id" element={<SingleTodo />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </ToDoProvider>
  );
};

export default App;
