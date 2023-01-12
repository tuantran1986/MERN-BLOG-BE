import express from 'express';

const posts = express.Router();

posts.get('/', (req, res) => {
    res.send('ROUTER - POSTS : success');
})

export default posts;