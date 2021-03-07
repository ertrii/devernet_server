import { Model, DataTypes } from 'sequelize'
import Instalation from '../interfaces/instalation'
import { ID } from '../utils/data_types_standard'
import extends_model_init from '../utils/extends_model_init'
import init_options_standard from '../utils/init_options_standard'
import AntennaModel from './antenna_model'
import ServiceModel from './service_model'
import UserModel from './user_model'
const { STRING } = DataTypes

export default class InstalationModel extends Model<Instalation> {}

InstalationModel.init(
    extends_model_init({
        antenna_id: ID,
        service_id: ID,
        user_id: ID,
        ip: STRING(15),
        commentary: {
            type: STRING(255),
            allowNull: false
        }
    }),
    init_options_standard('instalation')
)

InstalationModel.belongsTo(AntennaModel, {
    foreignKey: 'antenna_id',
    onDelete: 'CASCADE'
})

InstalationModel.belongsTo(ServiceModel, {
    foreignKey: 'service_id',
    onDelete: 'CASCADE'
})

InstalationModel.belongsTo(UserModel, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})
