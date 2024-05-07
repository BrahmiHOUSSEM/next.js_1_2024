import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: { type: "string", required: true, unique: true },
  password: {
    type: "string",
    required: true,
  },
});

export const User = model("User", UserSchema);
