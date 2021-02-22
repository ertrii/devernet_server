import { Model, DataTypes } from 'sequelize'
import sequelize from '../config/db'
import User from '../interfaces/user'
import { ADDRESS, DELETED, EMAIL, ID, PASSWORD, PHONE_NUMBER } from '../utils/data_types_standard'
const { STRING, ENUM } = DataTypes

export default class UserModel extends Model<User> {
    getFullname() {
        return `${this.get().username} ${this.get().lastname}`
    }
}

UserModel.init(
    {
        id: ID,
        username: {
            type: STRING(50),
            allowNull: false,
            unique: true
        },
        password: PASSWORD,
        email: EMAIL,
        name: {
            type: STRING(50),
            allowNull: false
        },
        lastname: {
            type: STRING(50),
            allowNull: false
        },
        address: ADDRESS,
        phone_number: PHONE_NUMBER,
        user_type: {
            type: ENUM('admin', 'client', 'technical'),
            allowNull: false
        },
        deleted: DELETED
    },
    {
        modelName: 'user',
        sequelize
    }
)
