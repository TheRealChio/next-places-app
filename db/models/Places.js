import mongoose from "mongoose";

const { Schema } = mongoose;

const placesSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
  mapURL: { type: String, required: true },
  description: { type: String, required: true },
});

const Places = mongoose.models.Places || mongoose.model("Places", placesSchema);

export default Places;
