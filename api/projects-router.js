const express = require('express')

const router = express.Router()

const Projects = require('../data/helpers/projects-model')

router.get('/', (req, res) => {

})

router.post('/', (req, res) => {
  const project = req.body
})

module.exports = router