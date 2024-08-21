import React from 'react'
import { CiCirclePlus } from "react-icons/ci";


const Task = () => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center pt-12 gap-4">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Create todo here"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent w-1/4"
          />
        </div>
      </form>
      <button type="button" className="bg-red-500 text-white py-2 px-4 rounded">
        Cancel
      </button>

      <button
        className="bg-blue-500 text-white flex items-center justify-center rounded py-2 px-4 space-x-2"
        type="submit"
      >
        <CiCirclePlus className="w-5 h-5" />
        <span>Add Todo</span>
      </button>
    </>
  );
}

export default Task
