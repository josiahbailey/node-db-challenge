const express = require('express')

const router = express.Router()

const Resources = require('../data/helpers/resources-model')

router.get('/', (req, res) => {

})

router.post('/', (req, res) => {
  const resource = req.body
})

module.exports = router