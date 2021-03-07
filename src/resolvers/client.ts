import Client from '../interfaces/client'
import ClientModel from '../models/client_model'

interface IntoClient {
    user_id: number
    instalation_id: number
    active: boolean
}

export async function client(_: any, data: { id: string }): Promise<Client | null> {
    const client = await ClientModel.findByPk(data.id)
    return client?.get() || null
}

export async function clients(): Promise<Client[]> {
    const clients = await ClientModel.findAll()
    return clients.map((client) => client.get())
}

export async function create_client(_: any, data: { into_client: IntoClient }): Promise<Client> {
    const client = await ClientModel.create(data.into_client)
    return client.get()
}

export async function update_client(
    _: any,
    data: { id: string; into_client: IntoClient }
): Promise<Client> {
    const client = await ClientModel.findByPk(data.id)
    client?.set(data.into_client)
    const client_updated = await client?.save()
    return { ...client_updated?.get(), ...data.into_client }
}

export async function delete_client(_: any, data: { id: string }): Promise<{ id: string }> {
    const client = await ClientModel.findByPk(data.id)
    await client?.destroy()
    return {
        id: data.id
    }
}
