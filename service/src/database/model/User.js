import { bookshelf } from '../knex';

const User = bookshelf.model('User', {
  tableName: 'users'
});

export default User;