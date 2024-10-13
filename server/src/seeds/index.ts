import { seedUsers } from "./user-seeds";
import { seedJournalEntries } from "./journal-seeds";
import sequelize from "../config/connection.js";

const seedAll = async (): Promise<void> => {
  try {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    await seedJournalEntries();
    console.log('\n----- JOURNAL ENTRIES SEEDED -----\n');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedAll();