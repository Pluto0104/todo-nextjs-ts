import { TodoType } from "@/types/todo";
import { NextResponse } from "next/server";

let todos: TodoType[] = [];

export const GET = async (request: Request) => {
  return NextResponse.json({ todos });
};

export const POST = async (request: Request, response: Response) => {
  try {
    const todo = await request.json();
    todos.push({ ...todo, createdAt: Date.now(), id: Date.now() });
    return NextResponse.json({ code: 200, message: "A new todo is created." });
  } catch (error) {
    console.error(error);
  }
};
