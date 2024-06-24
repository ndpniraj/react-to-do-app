import { FC, useState } from "react";

export type Data = { title: string; description: string };

interface Props {
  onSubmit?(data: Data): void;
}

const ToDoForm: FC<Props> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setError("");

        if (!title.trim() || !description.trim()) {
          return setError("Please add some values");
        }

        if (onSubmit) onSubmit({ title, description });

        setTitle("");
        setDescription("");
      }}
      className="space-y-6 p-3 rounded shadow-md bg-white w-96"
    >
      <h1 className="text-2xl text-center">ToDo Form</h1>
      <p className="text-red-500">{error}</p>
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
  );
};

export default ToDoForm;
