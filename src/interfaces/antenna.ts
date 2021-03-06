import { Model } from '../config/types'

export default interface antenna extends Model {
    name: string
    product_id: number
    mac: number
}
