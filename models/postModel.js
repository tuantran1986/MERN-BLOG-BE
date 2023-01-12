// 1. import
// 2. connect
// 3. tao SCHEMA
// 4. tao MODEL
// 5. CRUD

// 1. import
import mongoose from "mongoose";

// 2. connect
mongoose.connect('mongodb://localhost:27017/blogDataBase');

// 3. tao SCHEMA
const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    attachment: String,
    likeCount: Number
});

// 4. tao MODEL
export const postModel = mongoose.model('posts', postSchema);   // "posts" : là TÊN của "COLLECTION"

// 5. CRUD