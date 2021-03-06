import { Model } from '../config/types'

export default interface Instalation extends Model {
    antenna_id: number
    service_id: number
    user_id: number
    ip: string
    commentary: string
}
