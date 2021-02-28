import { Model } from '../config/types'

export default interface Product extends Model {
    name: string
    image_url: string
    cost: number
    brand_id: number
}
