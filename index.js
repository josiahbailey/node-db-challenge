const server = require('./api/server')

const PORT = process.env.DB_PORT || 4000

server.listen(PORT, () => {
  console.log(`\n** Server Listening on PORT ${PORT} **\n`)
})