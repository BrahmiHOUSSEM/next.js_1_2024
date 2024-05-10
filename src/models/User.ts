import { genSaltSync, hashSync } from "bcrypt-ts";
import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    email: { type: "string", required: true, unique: true },
    password: {
      type: "string",
      required: true,
      minlength: [6, "Password must be at least six characters"],
    },
  },
  { timestamps: true }
);

UserSchema.post("validate", function (user) {
  const notHashedPassword = user.password;
  const salt = genSaltSync(10);
  user.password = hashSync(notHashedPassword, salt);
});

export const User = models?.User || model("User", UserSchema);
