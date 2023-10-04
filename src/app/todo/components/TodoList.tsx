"use client";

import React from "react";
import axios from "axios";
import TodoListItem from "./TodoListItem";
import { TodoType } from "@/types/todo";

const TodoList = () => {
  const [todos, setTodos] = React.useState<TodoType[]>([]);

  const handleDelete = React.useCallback(async () => {
    try {
      const res = await axios.delete("/api/todo");
    } catch (err) {
      console.error(err);
    }
  }, []);
  const loadTodoList = React.useCallback(async () => {
    try {
      const res = await axios.get("/api/todo");
      setTodos(res.data.todos);
    } catch (err) {
      console.log(err);
    }
  }, []);

  React.useEffect(() => {
    loadTodoList();
  }, [loadTodoList]);

  return (
    <>
      {todos.map(({ id, title, description, ...rest }) => (
        <TodoListItem
          key={`todo-list-item-${id}`}
          id={id}
          title={title}
          description={description}
          onDelete={handleDelete}
          {...rest}
        />
      ))}
    </>
  );
};

export default TodoList;
