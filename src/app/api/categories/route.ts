import mongoose from "mongoose";
import { Category } from "@/models/Category";

export async function POST(req: Request) {
  if (process.env.MONGO_URL) mongoose.connect(process.env.MONGO_URL);
  else console.error("MONGO_URL environment variable is not set");

  const { name } = await req.json();
  const categoryDoc = await Category.create({ name });
  return Response.json({ categoryDoc });
}

export async function PUT(req: Request) {
  const data = await req.json();

  if (process.env.MONGO_URL) mongoose.connect(process.env.MONGO_URL);
  else console.error("MONGO_URL environment variable is not set");

  const { name } = await req.json();
  const categoryDoc = await Category.create({ name });
  return Response.json({ categoryDoc });
}

export async function GET() {
  return Response.json(await Category.find());
}
