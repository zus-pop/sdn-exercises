import express from 'express';
import fs from 'fs';

const app = express();

app.get("/hello", (req, res) => {
    const data = JSON.parse(fs.readFileSync('./data.json'));
    res.send(data);
});

app.listen(3000, () => {
    console.log(`Server is running on port ${3000}`);
});