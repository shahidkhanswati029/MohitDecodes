// models/Tutorial.js
import mongoose from "mongoose";

const tutorialSchema = new mongoose.Schema({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
}, { timestamps: true });

const TutorialModel = mongoose.model("Tutorial", tutorialSchema);

export default TutorialModel;
