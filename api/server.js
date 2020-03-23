const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const server = express()

const projects = require('./projects-router')
const tasks = require('./tasks-router')
const resources = require('./resources-router')

server.use(helmet())
server.use(cors())
server.use(express.json())

server.get('/', (req, res) => {
  res.send(`<h1>Worplace API</h1>`)
})

server.use('/api/projects', projects)
server.use('/api/tasks', tasks)
server.use('/api/resources', resources)

module.exports = server