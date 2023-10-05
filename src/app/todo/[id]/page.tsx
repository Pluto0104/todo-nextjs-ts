import React from "react";
import TodoForm from "../components/TodoForm";

const TodoEdit = async ({ params: { id } }: { params: { id: string } }) => {
  return <TodoForm id={id} />;
};

export default TodoEdit;
