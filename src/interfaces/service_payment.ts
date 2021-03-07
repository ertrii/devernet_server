import { Model } from '../config/types'

export default interface ServicePayment extends Model {
    client_id: number
    amount: number
    pay: number
    cancelled: string
    payment_date: string
    due_date: string
}
