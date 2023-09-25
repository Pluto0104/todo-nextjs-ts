"use client";

import React from "react";
import TextField from "@/components/TextField";
import { TodoType } from "@/types/todo";
import Button from "@/components/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

const TodoAdd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoType>();

  const onSubmit: SubmitHandler<TodoType> = async (data) => {
    // alert(JSON.stringify(data));
    try {
      const res = await axios.post("/api/todo", data);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Title"
        name="title"
        register={register}
        {...(errors.title
          ? { error: true, helperText: errors.title.message }
          : {})}
        required
      />
      <TextField
        label="Description"
        name="description"
        register={register}
        {...(errors.description
          ? { error: true, helperText: errors.description.message }
          : {})}
        required
      />
      <p className="flex justify-end">
        <Button type="submit" color="success">
          Submit
        </Button>
      </p>
    </form>
  );
};

export default TodoAdd;
