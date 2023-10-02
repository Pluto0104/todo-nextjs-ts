"use client";

import React from "react";
import axios from "axios";
import TodoListItem from "./TodoListItem";
import { TodoType } from "@/types/todo";

const TodoList = () => {
  const [todos, setTodos] = React.useState<TodoType[]>([]);

  const loadTodoList = React.useCallback(async () => {
    try {
      const res = await axios.get("/api/todo");
      setTodos(res.data.todos);
    } catch (err) {
      console.error(err);
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
          title={title}
          description={description}
          {...rest}
        />
      ))}
    </>
  );
};

export default TodoList;
