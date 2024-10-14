import express from 'express';
import dotenv from 'dotenv';
import { sequelize } from './models/index';
import routes from './routes/index';
import path from 'path';

const forceDatabaseRefresh = false;

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, '../../client/dist')));

app.use(express.json());
app.use(routes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html')); // Serve index.html for all unmatched routes
});

// sync conntection to database
// Create schema if it doesn't exist 
sequelize.query('CREATE SCHEMA IF NOT EXISTS amygdala_db;')
    .then(() => {
        console.log('amygdalaDB schema created or already exists');
        return sequelize.sync({ force: forceDatabaseRefresh }); // Sync models after schema creation
    })
    .then(() => {
        app.listen(port, () => {
            console.log(`[server]: Server is running at http://localhost:${port}`);
        });
    })
    .catch((err) => {
        console.error('Error creating schema or syncing database:', err);
    });