
exports.up = function (knex) {
  return knex.schema
    .createTable('projects', pjc => {
      pjc
        .increments()

      pjc
        .varchar('name', 255)
        .notNullable()

      pjc
        .varchar('description', 510)

      pjc
        .boolean('completed')
        .defaultTo(false)
    })
    .createTable('resources', rsc => {
      rsc
        .increments()

      rsc
        .varchar('name', 255)
        .unique()
        .notNullable()

      rsc
        .varchar('description', 510)
    })
    .createTable('tasks', tsk => {
      tsk
        .increments()

      tsk
        .varchar('description', 510)
        .notNullable()

      tsk
        .integer('project_id')
        .notNullable()
        .unsigned()
        .references('projects.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      tsk
        .string('notes', 510)

    })
    .createTable('project_resources', pjrs => {
      pjrs
        .increments()

      pjrs
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('projects.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      pjrs
        .integer('resource_id')
        .unsigned()
        .notNullable()
        .references('resources.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
