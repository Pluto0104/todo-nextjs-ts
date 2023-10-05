"use client";

import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { TodoType } from "@/types/todo";
import Button from "@/components/Button";
import TextField from "@/components/TextField";

interface TodoFormProps {
  id?: string;
  submitBtnText?: string;
}

const TodoForm: React.FC<TodoFormProps> = ({
  id,
  submitBtnText = "Submit",
}) => {
  const {
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors },
  } = useForm<TodoType>();

  React.useEffect(() => {
    if (!id) {
      return;
    }
    const loadTodo = async () => {
      try {
        const {
          data: { todo },
        } = await axios.get(`/api/todo/${id}`);
        for (const key in todo) {
          setValue(key as keyof TodoType, todo[key]);
        }
      } catch (err) {
        toast.error("Something went wrong!");
      }
    };
    loadTodo();
  }, [id, setValue]);

  const onSubmit: SubmitHandler<TodoType> = async (todoData) => {
    try {
      const {
        data: { message },
      } = id
        ? await axios.patch(`/api/todo/${id}`, todoData)
        : await axios.post(`/api/todo`, todoData);
      if (!id) {
        reset();
      }
      toast.success(message);
    } catch (err) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="title"
        control={control}
        defaultValue=""
        rules={{ required: "Title is required." }}
        render={({ field }) => (
          <TextField
            label="Title"
            {...(errors.title && {
              error: true,
              helperText: errors.title.message,
            })}
            {...field}
          />
        )}
      />
      <Controller
        name="description"
        control={control}
        defaultValue=""
        rules={{ required: "Description is required." }}
        render={({ field }) => (
          <TextField
            label="Description"
            {...(errors.description && {
              error: true,
              helperText: errors.description.message,
            })}
            {...field}
          />
        )}
      />
      <p className="flex justify-end">
        <Button type="submit" color="success">
          {submitBtnText}
        </Button>
      </p>
    </form>
  );
};

export default TodoForm;
