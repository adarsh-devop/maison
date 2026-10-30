
import React, { useState } from "react";

const Todo = () => {

  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addData = () => {
    if (text.trim() === "") {
      alert("Enter a value");
      return;
    }

    if (editIndex !== null) {
      const updated = [...todos];
      updated[editIndex] = text;
      setTodos(updated);
      setEditIndex(null);
    } else {
      setTodos([...todos, text]);
    }

    setText("");
  };

  const deleteData = (index) => {
    const updated = todos.filter((itm, indx) => indx !== index);
    setTodos(updated);
  };

  const editTodo = (index) => {
    setText(todos[index]);
    setEditIndex(index);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-5 bg-[#0c0c0c]">

      <div className="w-full max-w-md p-8 rounded-xl shadow-lg bg-[#1c1c1c]">

        {/* Heading */}
        <div className="text-center mb-8">

          <p className="uppercase text-sm tracking-widest font-out text-[#F5EBD0]">
            Stay organized
          </p>

          <h1 className="font-ply text-4xl mt-3 text-[#F5EBD0]">
            My Todo List.
          </h1>

          <p className="font-out font-light mt-3 text-[#F5EBD0]">
            Make today productive, one task at a time.
          </p>

        </div>

        {/* Input */}
        <div className="flex gap-3 mb-7">

          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addData()}
            placeholder="Enter your task..."
            className="flex-1 min-w-0 p-3 rounded-md border border-gray-700 bg-[#0c0c0c] text-[#F5EBD0] placeholder-gray-500 outline-none focus:border-[#F5EBD0] font-out"
          />

          <button
            onClick={addData}
            className="px-5 rounded-md border bg-[#F5EBD0] border-[#F5EBD0] text-[#7f011f] hover:bg-[#1c1c1c] hover:text-[#F5EBD0] transition"
          >
            {editIndex !== null ? "Update" : "Add"}
          </button>

        </div>

        {/* Todo List */}
        <div className="flex flex-col gap-3">

          {todos.length === 0 ? (

            <p className="text-center py-8 font-out text-gray-500">
              No tasks yet. Add your first task!
            </p>

          ) : (

            todos.map((item, index) => (

              <div
                key={index}
                className="flex items-center justify-between gap-3 p-4 rounded-md border bg-[#0c0c0c] border-gray-800"
              >

                <p className="font-out text-[#F5EBD0] break-all">
                  {item}
                </p>

                <div className="flex gap-2 shrink-0">

                  <button
                    onClick={() => editTodo(index)}
                    className="bg-blue-900 text-blue-100 px-3 py-2 rounded-md hover:bg-blue-800 transition"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteData(index)}
                    className="bg-red-500 text-red-100 px-3 py-2 rounded-md hover:bg-red-800 transition"
                  >
                    Delete
                  </button>

                </div>

              </div>

            ))

          )}

        </div>

        {/* Footer */}
        <div className="flex justify-between mt-7 pt-5 border-t border-gray-700 font-out text-[#F5EBD0]">

          <p>Total Tasks</p>

          <p className="font-bold">{todos.length}</p>

        </div>

      </div>

    </div>
  );
};

export default Todo;
