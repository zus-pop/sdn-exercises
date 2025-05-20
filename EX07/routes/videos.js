import { Router } from 'express';
const videoRouter = Router();

videoRouter.get('/', async (req, res) => {
    try {
        res.status(200).end('Will send all the videos to you');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

videoRouter.post('/', async (req, res) => {
    try {
        res.status(201).json('Will add the videos ' + req.body.title + ' with details: ' + req.body.text + ' and ' + req.body.date);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

videoRouter.put('/', async (req, res) => {
    try {
        res.status(403).json(`PUT operation did not support on /videos`);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

videoRouter.delete('/', async (req, res) => {
    try {
        res.status(200).json(`Deleting all videos`);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

videoRouter.get('/:id', async (req, res) => {
    try {
        res.status(200).end(`Will send details of the video: ${req.params.id} to you!`);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

videoRouter.post('/:id', async (req, res) => {
    try {
        res.status(403).end(`POST operation did not support on /videos/ ${req.params.id}`);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

videoRouter.put('/:id', async (req, res) => {
    try {
        res.write(`Updating the video: ${req.params.id}\n`);
        res.status(201).end(`Will update the video: ${req.body.title} with details: ${req.body.text} and ${req.body.date}`);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

videoRouter.delete('/:id', async (req, res) => {
    try {
        res.status(200).end(`Deleting video: ${req.params.id}`);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


export default videoRouter;