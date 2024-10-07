import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/connection';

const forceDatabaseRefresh = false;

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

// sync conntection to database
sequelize.sync({force: forceDatabaseRefresh}).then(() => {
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
})
