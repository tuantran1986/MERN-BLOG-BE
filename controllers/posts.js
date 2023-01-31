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
            // const postList = await postModel.create({
            //     title: 'tieu de - create',
            //     content: 'noi dung',
            //     author: 'tuantran',
            //     attachment: 'https://image.thanhnien.vn/w2048/Uploaded/2023/zsfe/2021_06_15/1_mjzy.jpg',
            //     likeCount: 168
            // });
            // console.log('createPosts : postList = ', postList);
    
        // lấy dữ liệu FE từ = REQ.BODY
            // console.log('CREATE POST : req = ', req);
            // console.log('CREATE POST : req.body = ', req.body); 
        const postList = await postModel.create({
            ...req.body,
            likeCount: 0,
            createDate: new Date()
        });
        console.log('CREATE POST : postList = ', postList);

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


// 3.UPDATE_LIKE_COUNT_POST: "await model.updateOne()"
export const updateLikeCount = async (req, res) => {

    try {
        console.log('UPDATE_LIKE_COUNT_POST : req.body = ', req.body);
    
        // lấy dữ liệu FE từ = REQ.BODY
        const postUpdateLikeCount = await postModel.updateOne({
            _id: req.body._id
        },{
            likeCount: req.body.likeCount + 1
        });
        console.log('UPDATE_LIKE_COUNT_POST : postUpdateLikeCount = ', postUpdateLikeCount);

        res.status(200).json({
            postUpdateLikeCount: postUpdateLikeCount
        });
        // res.send('ROUTER - GETPOSTS : success');

    } catch (error) {
        res.status(500).json({
            error: error
        })
    }

};

