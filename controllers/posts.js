import { postModel } from "../models/postModel.js";

// 1.GET POSTS: "await model.find()"
export const getPosts = async (req, res) => {

    try {

        const postList = await postModel.find({});
        console.log('getPosts : postList = ', postList);
    
        res.json({
            postList: postList
        });
        // res.send('ROUTER - GETPOSTS : success');

    } catch (error) {
        res.status(500).json({
            error: error
        })
    }

};

// 2.CREATE POSTS: "await model.create()"
export const createPosts = async (req, res) => {

    try {

        // DEMO - CREATE POST : "fakeData"
        const postList = await postModel.create({
            title: 'tieu de - create',
            content: 'noi dung',
            author: 'tuantran',
            attachment: 'https://image.thanhnien.vn/w2048/Uploaded/2023/zsfe/2021_06_15/1_mjzy.jpg',
            likeCount: 168
        });
        console.log('createPosts : postList = ', postList);
    
        res.json({
            postList: postList
        });
        // res.send('ROUTER - GETPOSTS : success');

    } catch (error) {
        res.status(500).json({
            error: error
        })
    }

};

