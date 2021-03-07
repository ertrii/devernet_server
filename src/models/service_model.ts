import { Model, DataTypes } from 'sequelize'
import Service from '../interfaces/service'
import { UNIQUE_NAME } from '../utils/data_types_standard'
import extends_model_init from '../utils/extends_model_init'
import init_options_standard from '../utils/init_options_standard'
const { DECIMAL, NUMBER, STRING } = DataTypes

export default class ServiceModel extends Model<Service> {}

ServiceModel.init(
    extends_model_init({
        name: UNIQUE_NAME,
        pay: {
            type: DECIMAL(3, 2),
            allowNull: false
        },
        megabytes: {
            type: NUMBER,
            allowNull: false
        },
        description: {
            type: STRING(255),
            allowNull: false
        }
    }),
    init_options_standard('service')
)
