import { Model } from '../config/types'

export default interface Service extends Model {
    name: string
    pay: number
    megabytes: number
    description: string
}
