import { Model, DataTypes } from 'sequelize'
import Antenna from '../interfaces/antenna'
import { ID } from '../utils/data_types_standard'
import extends_model_init from '../utils/extends_model_init'
import init_options_standard from '../utils/init_options_standard'
import ProductModel from './product_model'
const { STRING } = DataTypes

export default class AntennaModel extends Model<Antenna> {}

AntennaModel.init(
    extends_model_init({
        product_id: ID,
        mac: {
            type: STRING(17),
            allowNull: false
        }
    }),
    init_options_standard('antenna')
)

AntennaModel.belongsTo(ProductModel, {
    foreignKey: 'product_id',
    onDelete: 'CASCADE'
})
