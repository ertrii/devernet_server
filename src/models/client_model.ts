import { Model, DataTypes } from 'sequelize'
import Client from '../interfaces/client'
import { FOREIGN_KEY } from '../utils/data_types_standard'
import extends_model_init from '../utils/extends_model_init'
import init_options_standard from '../utils/init_options_standard'
import ServiceModel from './service_model'
import UserModel from './user_model'
const { BOOLEAN } = DataTypes
export default class ClientModel extends Model<Client> {}

ClientModel.init(
    extends_model_init({
        user_id: FOREIGN_KEY,
        instalation_id: FOREIGN_KEY,
        active: {
            type: BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    }),
    init_options_standard('client')
)

ClientModel.belongsTo(UserModel, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

ClientModel.belongsTo(ServiceModel, {
    foreignKey: 'instalation_id',
    onDelete: 'CASCADE'
})
