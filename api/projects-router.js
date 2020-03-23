const express = require('express')

const router = express.Router()

const Projects = require('../data/helpers/projects-model')

router.get('/', (req, res) => {
  Projects.get()
    .then(projects => {
      res.status(200).json(projects)
    })
    .catch(() => {
      res.status(500).json({ message: 'Unable to fetch projects' })
    })
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  Projects.get(id)
    .then(project => {
      res.status(200).json(project)
    })
    .catch(() => {
      res.status(500).json({ message: 'Unable to fetch project' })
    })
})

router.post('/', (req, res) => {
  const project = req.body
  Projects.add(project)
    .then(project => {
      res.status(201).json({ message: 'Successfully added project', project: project })
    })
    .catch(() => {
      res.status(500).json({ message: 'Failed to add new project' })
    })
})

module.exports = router