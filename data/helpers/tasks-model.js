const db = require('../db-config')

module.exports = {
  get,
  add
}

function get(id) {
  if (id) {
    return db('tasks')
      .where({ id })
      .first()
  } else {
    return db('tasks')
  }
}

function add(task) {
  return db('tasks')
    .insert(task)
    .then(ids => {
      return get(ids[0])
    })
}