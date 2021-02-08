import { Model } from '../config/types'

export default interface User extends Model {
    name: string
    lastname: string
    phone: string
    email: string
    username: string
    password: string
    type_user_id: number
}
