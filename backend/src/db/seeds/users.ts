import db from '../../config';

exports.seed = async () => {

  await db('users')
    .insert({
      id: "2",
      name: "John",
      email: "john@gmail.com"
    });
};