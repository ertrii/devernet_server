import { Model } from '../config/types'

export default interface Notice extends Model {
    title: string
    textarea: string
    user_id: number
}
