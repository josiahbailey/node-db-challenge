const db = require('../db-config')

module.exports = {
  get,
  add
}

function get(id) {
  if (id) {
    return db('resources')
      .where({ id })
      .first()
  } else {
    return db('resources')
  }
}

function add(resource) {
  return db('resources')
    .insert(resource)
    .then(ids => {
      return get(ids[0])
    })
}