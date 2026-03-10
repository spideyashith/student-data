import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({

  name: String,
  avatar: String,
  bio: String,
  email: String,
  phone: String,
  location: String,
  about: String

});

export default mongoose.models.Profile ||
mongoose.model("Profile", ProfileSchema);