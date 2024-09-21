import { genSaltSync, hashSync } from "bcrypt-ts";
import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: "string", required: true, unique: false },
    email: { type: "string", required: true, unique: true },
    password: {
      type: "string",
      required: true,
      minlength: [6, "Password must be at least six characters"],
    },
    phone: { type: "string" },
    address: { type: "string" },
    city: { type: "string" },
    codePostal: { type: "string" },
    country: { type: "string" },
  },
  { timestamps: true }
);

UserSchema.post("validate", function (user) {
  const notHashedPassword = user.password;
  const salt = genSaltSync(10);
  user.password = hashSync(notHashedPassword, salt);
});

export const User = models?.User || model("User", UserSchema);
