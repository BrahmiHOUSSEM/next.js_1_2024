import { User } from "@/models/User";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function PUT(req: Request) {
  if (process.env.MONGO_URL) mongoose.connect(process.env.MONGO_URL);
  else console.error("MONGO_URL environment variable is not set");

  const data = await req.json();
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;

  await User.updateOne({ email }, data);

  return Response.json(true);
}

export async function GET() {
  if (process.env.MONGO_URL) mongoose.connect(process.env.MONGO_URL);
  else console.error("MONGO_URL environment variable is not set");

  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  if (!email) return Response.json({});

  return Response.json(await User.findOne({ email }));
}
