import db from '../../config';

export const up = () => {
  return db.schema.createTable('users', table => {
    table.string('id').unique().primary();
    table.string("name").notNullable();
    table.string("email").notNullable().unique();
    table.timestamp('createdAt').defaultTo(db.fn.now());
  });
};

export const down = () => {
  return db.schema.dropTable('users');
};