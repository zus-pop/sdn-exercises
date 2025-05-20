import { Router } from 'express';
const articleRouter = Router();

articleRouter.get('/', async (req, res) => {
    try {
        res.status(200).end('Will send all the articles to you');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

articleRouter.post('/', async (req, res) => {
    try {
        res.status(201).json('Will add the articles ' + req.body.title + ' with details: ' + req.body.text + ' and ' + req.body.date);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

articleRouter.put('/', async (req, res) => {
    try {
        res.status(403).json(`PUT operation did not support on /articles`);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

articleRouter.delete('/', async (req, res) => {
    try {
        res.status(200).json(`Deleting all articles`);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

articleRouter.get('/:id', async (req, res) => {
    try {
        res.status(200).end(`Will send details of the article: ${req.params.id} to you!`);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

articleRouter.post('/:id', async (req, res) => {
    try {
        res.status(403).end(`POST operation did not support on /articles/ ${req.params.id}`);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

articleRouter.put('/:id', async (req, res) => {
    try {
        res.write(`Updating the article: ${req.params.id}\n`);
        res.status(201).end(`Will update the article: ${req.body.title} with details: ${req.body.text} and ${req.body.date}`);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

articleRouter.delete('/:id', async (req, res) => {
    try {
        res.status(200).end(`Deleting article: ${req.params.id}`);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


export default articleRouter;