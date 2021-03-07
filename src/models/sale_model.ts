import { Model, DataTypes } from 'sequelize'
import Sale from '../interfaces/sale'
import { FOREIGN_KEY } from '../utils/data_types_standard'
import extends_model_init from '../utils/extends_model_init'
import init_options_standard from '../utils/init_options_standard'
import ClientModel from './client_model'
import ProductModel from './product_model'
const { DECIMAL, STRING } = DataTypes
export default class SaleModel extends Model<Sale> {}

SaleModel.init(
    extends_model_init({
        client_id: FOREIGN_KEY,
        product_id: FOREIGN_KEY,
        pay: {
            type: DECIMAL(3, 2),
            allowNull: false
        },
        amount: {
            type: DECIMAL(3, 2),
            allowNull: false
        },
        commentary: {
            type: STRING(255),
            allowNull: true
        },
        cancelled: {
            type: STRING,
            allowNull: false
        }
    }),
    init_options_standard('sale')
)

SaleModel.belongsTo(ClientModel, {
    foreignKey: 'client_id',
    onDelete: 'CASCADE'
})

SaleModel.belongsTo(ProductModel, {
    foreignKey: 'product_id',
    onDelete: 'CASCADE'
})
