import { Model } from '../config/types'

export default interface Sale extends Model {
    client_id: number
    product_id: number
    pay: number
    amount: number
    cancelled: number
}
