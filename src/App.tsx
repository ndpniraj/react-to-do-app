import { FC } from "react";

const App: FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="space-y-6 p-3 rounded shadow-md bg-white w-96">
        <h1 className="text-2xl text-center">ToDo Form</h1>
        <div>
          <input
            className="p-2 rounded outline-none border border-gray-500 w-full"
            placeholder="Add Your ToDo Here"
          />
        </div>
        <div>
          <textarea
            className="p-2 rounded outline-none border border-gray-500 w-full"
            placeholder="Describe Your ToDo Here"
          />
        </div>
        <div>
          <button className="p-2 text-center rounded outline-none text-white bg-gray-500 w-full">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
