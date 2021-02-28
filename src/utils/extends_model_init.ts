import { Model, ModelAttributes } from 'sequelize/types'
import { DELETED, ID } from './data_types_standard'

export default function extends_model_init<T extends Model, M>(
    attr: ModelAttributes<T, M>
): ModelAttributes<T, M> {
    return {
        id: ID,
        deleted: DELETED,
        ...attr
    }
}
