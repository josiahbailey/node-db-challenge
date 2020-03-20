
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { description: 'Do stuff... yeah', notes: 'BOB THE BUILDER', project_id: 1 },
        { description: 'Clean the toilets', notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', project_id: 1 },
        { description: 'eat stuff for lunch', notes: 'words blah blah blah', project_id: 1 },
        { description: 'REEEEEEEEEEEEEE', notes: 'BOB THE BUILDER', project_id: 2 },
        { description: 'SEAN IS A HUMAN', notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', project_id: 2 },
        { description: 'WHY AM I TYPING IN CAPS!!', notes: 'words blah blah blah', project_id: 3 }
      ]);
    });
};
