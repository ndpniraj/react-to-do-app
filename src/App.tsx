import { FC } from "react";
import ToDoForm from "./components/ToDoForm";

const App: FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ToDoForm
        onSubmit={(data) => {
          console.log(data);
        }}
      />
    </div>
  );
};

export default App;
