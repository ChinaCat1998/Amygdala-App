import { DataTypes, Sequelize, Model, Optional } from 'sequelize';
import bcrypt from 'bcrypt';

interface UserAttributes {
    id: number;
    username: string;
    password: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    declare id: number;
    declare username: string;
    declare password: string;

    declare readonly createdAt: Date;
    declare readonly updatedAt: Date;

    // Hash the password before saving the user
    public async setPassword(password: string) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(password, saltRounds);
    }
}

export function UserFactory(sequelize: Sequelize): typeof User {
    User.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            },
            {
            schema: 'amygdala_db',
            tableName: 'users',
            sequelize,
            hooks: {
                beforeCreate: async (user: User) => {
                    await user.setPassword(user.password);
                },
                beforeUpdate: async (user: User) => {
                    await user.setPassword(user.password);
                },
            }
        }
    );

    return User;
}
