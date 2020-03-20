const express = require('express')

const router = express.Router()

const Tasks = require('../data/helpers/tasks-model')

router.get('/', (req, res) => {
  Tasks.get()
    .then(tasks => {
      res.status(200).json(tasks)
    })
    .catch(() => {
      res.status(500).json({ message: 'Unable to fetch Tasks' })
    })
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  Tasks.get(id)
    .then(task => {
      res.status(200).json(task)
    })
    .catch(() => {
      res.status(500).json({ message: 'Unable to fetch task' })
    })
})

router.post('/', (req, res) => {
  const task = req.body
  Tasks.add(task)
    .then(task => {
      res.status(201).json({ message: 'Successfully added task', task: task })
    })
    .catch(() => {
      res.status(500).json({ message: 'Failed to add new task' })
    })
})

module.exports = router