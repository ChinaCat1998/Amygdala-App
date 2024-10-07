import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';

const sequelize = process.env.DB_URL
    ? new Sequelize(process.env.DB_URL)
    : new Sequelize(
        process.env.DB_NAME || '',
        process.env.DB_USER || '',
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'postgres',
            schema: 'amygdalaDB',
            dialectOptions: {
                decimalNumbers: true,
            },
        }
        );

// Create schema if it doesn't exist 
sequelize.query('CREATE SCHEMA IF NOT EXISTS amygdalaDB;')
    .then(() => {
        console.log('amygdalaDB schema created or already exists');
    })
    .catch(err => {
        console.error('Error creating schema:', err);
    });

export default sequelize;
