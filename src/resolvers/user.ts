import User from '../models/user'

export function users(): User[] {
    return [
        {
            id: 1,
            name: 'Juan',
            lastname: 'Manco',
            email: 'email@gmail.com',
            created_at: '',
            updated_at: '',
            deleted: false,
            type_user_id: 1,
            password: '123456',
            phone: '156519198',
            username: 'juan'
        }
    ]
}
