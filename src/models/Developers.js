import { Schema, model, models } from "mongoose";

const Developer = new Schema(
  {
    name: {
      type: String,
      required: [true, "The name is required"],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, "The description is required"],
      trim: true,
    },
    social_media_links: {
      type: Map,
      of: String,
    },
    email: {
      type: String,
      required: [true, "The email is required"],
      unique: true,
      trim: true,
    },
    tech_skill_set: {
      type: [String],
      required: [true, "The Technical Skill Set is required"],
      trim: true,
    },
    age: {
      type: Number,
      trim: true,
    },
    front_end: {
      type: Boolean,
      required: true
    },
    back_end: {
      type: Boolean,
      required: true,
    }
  },
  { timestamps: true }
);

export default models.Developer || model("Developer", Developer);
