import { User } from "@/models/User";
import mongoose from "mongoose";

export async function POST(req: Request) {
  const data = await req.formData();
  if (data.get("file")) {
  }
  //S3 need credit card to upload images

  return Response.json(true);
}
