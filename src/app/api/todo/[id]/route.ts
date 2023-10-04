import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { SERVER_API_URL } from "@/config";
import { TodoType } from "@/types/todo";

export const GET = async (req: Request) => {
  try {
    // const url = new URL(req.url);
    // const { data } = await axios.get(`${SERVER_API_URL}/todos/${id}`);
    // console.log(url, url.searchParams.keys(), url.searchParams.get("id"));
    // const { id } = req.query;
    return NextResponse.json({});
  } catch (err) {
    return NextResponse.json(
      {},
      { status: 500, statusText: "Data fetching failed." }
    );
  }
};
