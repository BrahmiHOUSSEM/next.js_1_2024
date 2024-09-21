import { model, models, Schema } from "mongoose";

const CategorySchema = new Schema(
  {
    name: { type: "string", required: true, unique: false },
  },
  { timestamps: true }
);

export const Category = models?.Category || model("Category", CategorySchema);
