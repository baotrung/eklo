import { model, Schema } from "mongoose";

const UserExpSchema = new Schema({
  id: String,
  userName: String,
  review: String,
  avatarImgUrl: String,
});

export const UserExp = model("user-exp", UserExpSchema);
