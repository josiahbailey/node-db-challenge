const express = require('express')

const router = express.Router()

const Tasks = require('../data/helpers/tasks-model')

router.get('/', (req, res) => {

})

router.post('/', (req, res) => {
  const task = req.body
})

module.exports = router