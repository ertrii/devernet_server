import { Model } from '../config/types'

export default interface Client extends Model {
    user_id: number
    instalation_id: number
    active: boolean
}
