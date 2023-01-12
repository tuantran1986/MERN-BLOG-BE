import express from 'express';
import { getPosts, createPosts } from '../controllers/posts.js';     // nhớ phải có .JS

const posts = express.Router();

posts.get('/', getPosts);
// DEMO - CREATE POST 
posts.get('/create', createPosts);  // chưa sửa METHOD = POST

export default posts;