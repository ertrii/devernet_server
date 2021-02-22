import { DataTypes, Model } from 'sequelize'
import sequelize from '../config/db'
import Brand from '../interfaces/brand'
import { DELETED, ID } from '../utils/data_types_standard'
const { STRING } = DataTypes

export default class BrandModel extends Model<Brand> {}

BrandModel.init(
    {
        id: ID,
        name: {
            type: STRING(50),
            allowNull: false
        },
        image_url: {
            type: STRING,
            allowNull: false
        },
        deleted: DELETED
    },
    {
        modelName: 'brand',
        sequelize
    }
)
