
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name: 'Build stuff', description: 'BOB THE BUILDER' },
        { name: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { name: 'Running out of ideas', description: 'words blah blah blah' }
      ]);
    });
};
