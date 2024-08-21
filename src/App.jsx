import React, { useState } from "react";
import "./App.css";
import Task from "./components/Task";
import TaskList from "./components/TaskList";


// import { addTodo } from "./Redux/todoSlice";
// import { useDispatch } from "react-redux";

// Move TabPanel outside App component


const App = () => {
  // const [value, setValue] = useState(0);
  // const [text, setText] = useState("");
  // const dispatch = useDispatch();

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (text) {
  //     dispatch(addTodo({ text }));
  //     setText("");
  //   }
  // };

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <>
      <div className="text-left bg-customOrange pl-8">
        <h1 className="text-2xl font-bold text-white bg-customLightOrange w-36 p-3">
          Todo-List
        </h1>
      </div>
      <h2 className="text-center pt-12 text-lg font-semibold">Create Todos</h2>

     <Task/>
     <TaskList/>

      
    </>
  );
};

export default App;
