const Tasks = require('../models/Task');
const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const { user_id } = req;
        if (!user_id)
            return res.status(400).json({ error: "User_id is not recived" });
        const tasks = await Tasks.getTask({ user_id });
        res.json({ tasks });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

router.post('/new', async (req, res) => {
    try {
        const tasks = await Tasks.addTask(res.body.data);
        res.json({ tasks });
    } catch (error) {
        res.status(500).json({ error: "New create erro" })
    }
});

router.post('/update/progress', async (req, res) => {
    try {
        const tasks = await Tasks.updatebyProgess(res.body.data);
        res.json({ tasks });
    } catch (error) {
        res.status(500).json({ error: "New create erro" })
    }
});

router.post('/update/title', async (req, res) => {
    try {
        const tasks = await Tasks.updatebyTitle(res.body.data);
        res.json({ tasks });
    } catch (error) {
        res.status(500).json({ error: "New create erro" })
    }
});

router.post('/update/description', async (req, res) => {
    try {
        const tasks = await Tasks.updatebyDescription(res.body.data);
        res.json({ tasks });
    } catch (error) {
        res.status(500).json({ error: "New create erro" })
    }
});

router.delete('/remove/:id', async (req, res) => {
    try {
        const tasks = await Tasks.removeTask(res.body.data);
        res.json({ tasks });
    } catch (error) {
        res.status(500).json({ error: "New create erro" })
    }
});

module.exports = router;