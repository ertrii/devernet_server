import User from '../interfaces/user'
import UserModel from '../models/user_model'

interface IntoUser {
    name: string
    lastname: string
    email?: string
    username: string
    address: string
    phone_number: string
    password: string
    user_type: 'admin' | 'client' | 'technical'
}

export async function user(_: any, data: { id: string }): Promise<User | null> {
    const user = await UserModel.findByPk(data.id)
    return user?.get() || null
}

export async function users(): Promise<User[]> {
    const users = await UserModel.findAll()
    return users.map((user) => user.get())
}

export async function create_user(_: any, data: { into_user: IntoUser }): Promise<User> {
    const user = await UserModel.create(data.into_user)
    return user.get()
}

export async function update_user(
    _: any,
    data: { id: string; into_user: IntoUser }
): Promise<User> {
    const user = await UserModel.findByPk(data.id)
    user?.set(data.into_user)
    const user_updated = await user?.save()
    return { ...user_updated?.get(), ...data.into_user }
}

export async function delete_user(_: any, data: { id: string }): Promise<{ id: string }> {
    const user = await UserModel.findByPk(data.id)
    await user?.destroy()
    return {
        id: data.id
    }
}
