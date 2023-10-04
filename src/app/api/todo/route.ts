import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { SERVER_API_URL } from "@/config";
import { TodoType } from "@/types/todo";

export const GET = async (req: Request) => {
  try {
    const todos = await axios.get(`${SERVER_API_URL}/todos`);
    return NextResponse.json({ code: 200, todos: todos.data });
  } catch (err) {
    return NextResponse.error();
  }
};

export const POST = async (req: Request, response: Response) => {
  try {
    const todo: TodoType = await req.json();
    await axios.post(`${SERVER_API_URL}/todos`, {
      ...todo,
      id: uuidv4(),
      createdAt: Date.now(),
    });
    return NextResponse.json({ code: 200, message: "A new todo is created." });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ code: 500, message: "Internal Server Error" });
  }
};

export const PUT = async (req: Request) => {
  try {
    const { id, ...rest }: TodoType = await req.json();
    await axios.put(`${SERVER_API_URL}/todos/${id}`, {
      ...rest,
      updatedAt: Date.now(),
    });
    return NextResponse.json({ code: 200, message: "A new todo is created." });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ code: 500, message: "Internal Server Error" });
  }
};

export const DELETE = async (req: Request) => {
  try {
    const { id } = await req.json();
    await axios.delete(`${SERVER_API_URL}/todos/${id}`);
    return NextResponse.json({ code: 200, message: "A new todo is created." });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ code: 500, message: "Internal Server Error" });
  }
};
