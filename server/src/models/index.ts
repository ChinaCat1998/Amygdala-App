import sequelize from '../config/connection'
import { UserFactory } from './user'
import { JournalEntryFactory } from './journalEntry'

const User = UserFactory(sequelize)
const JournalEntry = JournalEntryFactory(sequelize)

User.hasMany(JournalEntry, { foreignKey: 'userId' });
JournalEntry.belongsTo(User, { foreignKey: 'userId' });

export { User, JournalEntry };