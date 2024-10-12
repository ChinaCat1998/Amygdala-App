import { DataTypes, Sequelize, Model, Optional } from "sequelize";
import { User } from "./user";

interface JournalEntryAttributes {
    id: number;
    title: string;
    mood: string;
    triggers: string[];
    content: string;
    userId: number;
}

interface JournalEntryCreationAttributes extends Optional<JournalEntryAttributes, 'id'> {};

export class JournalEntry extends Model<JournalEntryAttributes, JournalEntryCreationAttributes> implements JournalEntryAttributes {
    declare id: number;
    declare title: string;
    declare mood: string;
    declare triggers: string[];
    declare content: string;
    declare userId: number;

    declare readonly user?: User;  // maybe not needed??? i think this attaches all data about the user to the entry in DB
    
    declare readonly createdAt: Date;
    declare readonly updatedAt: Date;
}

export function JournalEntryFactory(sequelize: Sequelize): typeof JournalEntry {
    JournalEntry.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: true, // true or false???
            },
            mood: {
                type: DataTypes.STRING,
                allowNull: false, 
            },
            triggers: {
                type: DataTypes.ARRAY(DataTypes.STRING),
                allowNull: true, // true or false???
            },
            content: {
                type: DataTypes.STRING,
                allowNull: true, // true or false???
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: User,
                    key: 'id',
                }
            }
        },
        {
            schema: 'amygdala_db',
            tableName: 'journalEntries', // maybe change this?
            sequelize,
        }
    );
    return JournalEntry;
}