import express from 'express';

const app = express();
const PORT = process.env.port || 5000;

app.listen(PORT, () => {
    console.log(`server is running on PORT = ${PORT}`);
});