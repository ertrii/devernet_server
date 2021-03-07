import { Model, DataTypes } from 'sequelize'
import Notice from '../interfaces/notice'
import { ID } from '../utils/data_types_standard'
import extends_model_init from '../utils/extends_model_init'
import init_options_standard from '../utils/init_options_standard'
import UserModel from './user_model'
const { STRING, TEXT } = DataTypes

export default class NoticeModel extends Model<Notice> {}

NoticeModel.init(
    extends_model_init({
        title: {
            type: STRING(255),
            allowNull: false
        },
        textarea: {
            type: TEXT,
            allowNull: false
        },
        user_id: ID
    }),
    init_options_standard('notice')
)

NoticeModel.belongsTo(UserModel, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})
