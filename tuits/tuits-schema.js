import mongoose from 'mongoose';
const tuitsSchema = mongoose.Schema({
  _id: String,
  tuit: String,
  likes: Number,
  liked: Boolean,
  handle: String,
  image: String,
  replies: Number,
  retuits: Number,
  topic: String,
  time: String
}, {collection: 'tuits'});
export default tuitsSchema;

