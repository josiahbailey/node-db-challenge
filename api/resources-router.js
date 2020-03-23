const express = require('express')

const router = express.Router()

const Resources = require('../data/helpers/resources-model')

router.get('/', (req, res) => {
  Resources.get()
    .then(resources => {
      res.status(200).json(resources)
    })
    .catch(() => {
      res.status(500).json({ message: 'Unable to fetch Resources' })
    })
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  Resources.get(id)
    .then(resource => {
      res.status(200).json(resource)
    })
    .catch(() => {
      res.status(500).json({ message: 'Unable to fetch resource' })
    })
})

router.post('/', (req, res) => {
  const resource = req.body
  Resources.add(resource)
    .then(resource => {
      res.status(201).json({ message: 'Successfully added resource', resource: resource })
    })
    .catch(() => {
      res.status(500).json({ message: 'Failed to add new resource' })
    })
})

module.exports = router