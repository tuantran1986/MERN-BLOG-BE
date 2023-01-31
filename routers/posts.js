import express from 'express';
import { getPosts, createPosts, updateLikeCount, deletePost } from '../controllers/posts.js';     // nhớ phải có .JS

const posts = express.Router();

posts.get('/', getPosts);
// DEMO - CREATE POST 
// posts.get('/create', createPosts);   // DEMO: FAKE DATA - chưa sửa METHOD = POST
posts.post('/create', createPosts);                     // OK sửa METHOD = POST
posts.post('/updateLikeCount', updateLikeCount);        // OK sửa METHOD = POST
posts.post('/delete', deletePost);                      // OK sửa METHOD = POST

export default posts;