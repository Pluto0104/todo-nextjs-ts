import { NextResponse } from "next/server";
import axios from "axios";
import { SERVER_API_URL } from "@/config";
import { TodoType } from "@/types/todo";

export const GET = async (
  req: Request,
  { params: { id } }: { params: { id: string } }
) => {
  try {
    const { data: todo } = await axios.get(`${SERVER_API_URL}/todos/${id}`);
    return NextResponse.json({ todo }, { status: 200 });
  } catch (err) {
    throw err;
  }
};

export const PATCH = async (
  req: Request,
  { params: { id } }: { params: { id: string } }
) => {
  try {
    const todo: TodoType = await req.json();
    await axios.patch(`${SERVER_API_URL}/todos/${id}`, {
      ...todo,
      updatedAt: Date.now(),
    });
    return NextResponse.json(
      { message: "The todo is updated." },
      { status: 200 }
    );
  } catch (err) {
    throw err;
  }
};

export const DELETE = async (
  req: Request,
  { params: { id } }: { params: { id: string } }
) => {
  try {
    await axios.delete(`${SERVER_API_URL}/todos/${id}`);
    return NextResponse.json(
      { message: "The todo is deleted successfully." },
      { status: 200 }
    );
  } catch (err) {
    throw err;
  }
};
