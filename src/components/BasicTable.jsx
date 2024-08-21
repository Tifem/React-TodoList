import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CiCirclePlus } from "react-icons/ci";

function createTodo(name, completed) {
  return { name, completed };
}

const todos = [
  createTodo("Make dinner (completed)", true),
  createTodo("Finish todo list side project", false),
  createTodo("Look up SASS doc", false),
];

export default function TodoTable() {
  return (
    <TableContainer
      component={Paper}
      className="w-full sm:w-3/4 lg:w-2/3 mx-auto overflow-x-auto"
    >
      {" "}
      {/* Full width */}
      {/* <Table aria-label="todo table"> */}
      <Table
        sx={{ minWidth: { xs: "100%", sm: 650 } }}
        aria-label="responsive table"
      >
        {" "}
        <TableHead>
          <TableRow>
            <TableCell>Todos</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((todo) => (
            <TableRow key={todo.name}>
              <TableCell component="th" scope="row">
                {todo.completed ? <s>{todo.name}</s> : todo.name}
              </TableCell>
              <TableCell>
                <div className="flex gap-4">
                  <CiCirclePlus className="text-2xl" />
                  <CiCirclePlus className="text-2xl" />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
