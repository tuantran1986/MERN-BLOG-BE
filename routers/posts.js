import express from 'express';
import { getPosts } from '../controllers/posts.js';     // nhớ phải có .JS

const posts = express.Router();

posts.get('/', getPosts)

export default posts;