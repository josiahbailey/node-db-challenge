const db = require('../db-config')

module.exports = {
  get,
  add
}

function get(id) {
  if (id) {
    return db('projects')
      .where({ id })
      .first()
  } else {
    return db('projects')
  }
}

function add(project) {
  return db('projects')
    .insert(project)
    .then(ids => {
      return get(ids[0])
    })
}