import { Model, DataTypes } from 'sequelize'
import Product from '../interfaces/product'
import { FOREIGN_KEY, IMAGE_URL, UNIQUE_NAME } from '../utils/data_types_standard'
import extends_model_init from '../utils/extends_model_init'
import init_options_standard from '../utils/init_options_standard'
import BrandModel from './brand_model'
const { DECIMAL } = DataTypes

export default class ProductModel extends Model<Product> {}

ProductModel.init(
    extends_model_init({
        name: UNIQUE_NAME,
        image_url: IMAGE_URL,
        cost: {
            type: DECIMAL(3, 2),
            allowNull: false
        },
        brand_id: FOREIGN_KEY
    }),
    init_options_standard('product')
)

ProductModel.belongsTo(BrandModel, {
    foreignKey: 'brand_id',
    onDelete: 'CASCADE'
})
