const express = require('express');
const router = express.Router();
const { Tasks } = require("../models");
const db = require("../models");

// Create a task
router.post('/tasks', async (req, res) => {
  try {
    const { title, description, status, dueDate } = req.body;
    console.log("body", req.body)
    const task = await Tasks.create({
      title: title,
      description: description,
      status: status,
      dueDate: dueDate,
    });
    console.log("task", task)

    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Update a task by ID
router.put('/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status, dueDate } = req.body;
    const task = await Tasks.findByPk(id);

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    task.title = title;
    task.description = description;
    task.status = status;
    task.dueDate = dueDate;

    await task.save();
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all tasks (paginated)
router.get('/tasks', async (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const offset = (page - 1) * limit;

  try {
    const tasks = await Tasks.findAndCountAll({
      offset,
      limit,
    });
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get task metrics
router.get('/task-metrics', async (req, res) => {
  try {
    const metrics = await Tasks.findAll({
      attributes: [
        'status',
        [db.Sequelize.fn('COUNT', db.Sequelize.col('status')), 'count'],
      ],
      group: ['status'],
    });
    res.json(metrics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
