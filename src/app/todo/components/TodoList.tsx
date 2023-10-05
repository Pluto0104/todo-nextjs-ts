"use client";

import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { TodoType } from "@/types/todo";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const [todos, setTodos] = React.useState<TodoType[]>([]);

  const loadTodoList = React.useCallback(async () => {
    try {
      const res = await axios.get("/api/todo");
      setTodos(res.data.todos);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleDelete = React.useCallback(
    async (id: string) => {
      try {
        const {
          data: { message },
        } = await axios.delete(`/api/todo/${id}`);
        loadTodoList();
        toast.success(message);
      } catch (err) {
        toast.error("Something went wrong!");
      }
    },
    [loadTodoList]
  );

  const handleCompleted = React.useCallback(
    async (id: string, isCompleted: boolean) => {
      try {
        await axios.patch(`/api/todo/${id}`, { isCompleted });
      } catch (err) {
        toast.error("Something went wrong!");
      }
    },
    []
  );

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
          onCompleted={handleCompleted}
          {...rest}
        />
      ))}
    </>
  );
};

export default TodoList;
