import express from 'express';
import fs from 'fs';
import articleRouter from './routes/articles.js';
import videoRouter from './routes/videos.js';

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/hello", (req, res) => {
    const data = JSON.parse(fs.readFileSync('./data.json'));
    res.send(data);
});

app.use("/articles", articleRouter);
app.use("/videos", videoRouter);

app.listen(3000, () => {
    console.log(`Server is running on port ${3000}`);
});