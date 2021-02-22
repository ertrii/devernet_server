import { Model } from '../config/types'

export default interface User extends Model {
    name: string
    lastname: string
    email?: string
    username: string
    address: string
    phone_number: string
    password: string
    user_type: 'admin' | 'client' | 'technical'
}
