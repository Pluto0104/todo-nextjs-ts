import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { SERVER_API_URL } from "@/config";
import { TodoType } from "@/types/todo";

export const GET = async (req: Request) => {
  try {
    const todos = await axios.get(`${SERVER_API_URL}/todos`);
    return NextResponse.json({ todos: todos.data }, { status: 200 });
  } catch (err) {
    throw err;
  }
};

export const POST = async (req: Request) => {
  try {
    const todo: TodoType = await req.json();
    await axios.post(`${SERVER_API_URL}/todos`, {
      ...todo,
      id: uuidv4(),
      createdAt: Date.now(),
    });
    return NextResponse.json(
      { message: "A new todo is created." },
      { status: 200 }
    );
  } catch (err) {
    throw err;
  }
};
