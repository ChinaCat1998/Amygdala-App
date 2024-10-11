import express from 'express';
import dotenv from 'dotenv';
import { sequelize } from './models/index';
import routes from './routes/index';

const forceDatabaseRefresh = false;

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static('../client/dist'));

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

app.use(express.json());
app.use(routes);

// todo?: serve static files; app.use(express.json()); app.use(routes);

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