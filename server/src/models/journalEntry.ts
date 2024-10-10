import { DataTypes, Sequelize, Model, Optional } from "sequelize";
import { User } from "./user";

interface JournalEntryAttributes {
    id: number;
    title: string;
    content: string;
    userId: number;
    color: string;
    mood: string;
    anxiety: number;
    sleep: number;
}

interface JournalEntryCreationAttributes extends Optional<JournalEntryAttributes, 'id'> {};

export class JournalEntry extends Model<JournalEntryAttributes, JournalEntryCreationAttributes> implements JournalEntryAttributes {
    public id!: number;
    public title!: string;
    public content!: string;
    public userId!: number;
    public color!: string;
    public mood!: string;
    public anxiety!: number;
    public sleep!: number;

    public readonly user?: User;  // maybe not needed???
    
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
            },
            color: {
                type: DataTypes.STRING,
                allowNull: true
            },
            mood: {
                type: DataTypes.STRING,
                allowNull: true
            },
            anxiety: {
                type: DataTypes.NUMBER,
                allowNull: true
            },
            sleep: {
                type: DataTypes.NUMBER,
                allowNull: true
            }
        },
        {
            tableName: 'journalEntries', // maybe change this?
            sequelize,
        }
    );
    return JournalEntry;
}