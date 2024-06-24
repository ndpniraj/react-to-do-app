import { FC, useState } from "react";

const App: FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(title, description);
        }}
        className="space-y-6 p-3 rounded shadow-md bg-white w-96"
      >
        <h1 className="text-2xl text-center">ToDo Form</h1>
        <div>
          <input
            name="title"
            className="p-2 rounded outline-none border border-gray-500 w-full"
            placeholder="Add Your ToDo Here"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div>
          <textarea
            name="description"
            className="p-2 rounded outline-none border border-gray-500 w-full"
            placeholder="Describe Your ToDo Here"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
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
