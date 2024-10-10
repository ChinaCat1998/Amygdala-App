import { User } from '../models/index.js';

export const seedFeedback = async () => {
  await User.bulkCreate([
    {
      username: 'amygdala2000',
      password: 'hunter2'
    },
    {
      username: 'npm-hater',
      password: 'password1234!'
    },
    {
        username: 'darkodonnie',
        password: 'october2'
    }
  ]);
};