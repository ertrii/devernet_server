import { Model, DataTypes } from 'sequelize'
import User from '../interfaces/user'
import { ADDRESS, EMAIL, PASSWORD, PHONE_NUMBER, UNIQUE_NAME } from '../utils/data_types_standard'
import extends_model_init from '../utils/extends_model_init'
import init_options_standard from '../utils/init_options_standard'
const { STRING, ENUM } = DataTypes

export default class UserModel extends Model<User> {
    getFullname() {
        return `${this.get().username} ${this.get().lastname}`
    }
}

UserModel.init(
    extends_model_init({
        username: UNIQUE_NAME,
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
        }
    }),
    init_options_standard('user')
)
