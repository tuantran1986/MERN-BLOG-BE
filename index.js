import express from 'express';

// cấu hình - MIDDLEWARE: bodyParser + cors
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = process.env.port || 5000;

// cấu hình - MIDDLEWARE: bodyParser + cors
app.use(bodyParser.json({ limit: '30mb' }));                        // giới hạn dung lượng < 30Mb
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));  // giới hạn dung lượng < 30Mb
app.use(cors());


app.get('/', (req, res) => {
    res.send('cấu hình MIDDLEWARE = BODY PARSER + CORS');
})

app.listen(PORT, () => {
    console.log(`server is running on PORT = ${PORT}`);
});