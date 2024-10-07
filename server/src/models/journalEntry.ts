import { DataTypes, Sequelize, Model, Optional } from "sequelize";
import { User } from "./user";

interface JournalEntryAttributes {
    id: number;
    title: string;
    content: string;
    userId: number;
}

interface JournalEntryCreationAttributes extends Optional<JournalEntryAttributes, 'id'> {};

export class JournalEntry extends Model<JournalEntryAttributes, JournalEntryCreationAttributes> implements JournalEntryAttributes {
    public id!: number;
    public title!: string;
    public content!: string;
    public userId!: number;

    public readonly user?: User;  // how to make connection between journalEntry and user?
    
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
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
            tableName: 'journalEntries', // maybe change this?
            sequelize,
        }
    );
    return JournalEntry;
}