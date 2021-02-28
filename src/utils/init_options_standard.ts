import { InitOptions, Model } from 'sequelize/types'
import sequelize from '../config/db'

export default function init_options_standard<T extends Model>(modelName: string): InitOptions<T> {
    return {
        modelName,
        sequelize,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
}
