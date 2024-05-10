import { User } from "@/models/User";
import mongoose from "mongoose";

export async function POST(req: Request) {
  const body = await req.json();
  if (process.env.MONGO_URL) {
    mongoose.connect(process.env.MONGO_URL);
  } else {
    console.error("MONGO_URL environment variable is not set");
  }
  const newUser = User.create(body);
  return Response.json(newUser);
}
