import Instalation from '../interfaces/instalation'
import InstalationModel from '../models/instalation_model'

interface IntoInstalation {
    antenna_id: number
    service_id: number
    user_id: number
    ip: string
    commentary: string
}

export async function instalation(_: any, data: { id: string }): Promise<Instalation | null> {
    const instalation = await InstalationModel.findByPk(data.id)
    return instalation?.get() || null
}

export async function instalations(): Promise<Instalation[]> {
    const instalations = await InstalationModel.findAll()
    return instalations.map((instalation) => instalation.get())
}

export async function create_instalation(
    _: any,
    data: { into_instalation: IntoInstalation }
): Promise<Instalation> {
    const instalation = await InstalationModel.create(data.into_instalation)
    return instalation.get()
}

export async function update_instalation(
    _: any,
    data: { id: string; into_instalation: IntoInstalation }
): Promise<Instalation> {
    const instalation = await InstalationModel.findByPk(data.id)
    instalation?.set(data.into_instalation)
    const instalation_updated = await instalation?.save()
    return { ...instalation_updated?.get(), ...data.into_instalation }
}

export async function delete_instalation(_: any, data: { id: string }): Promise<{ id: string }> {
    const instalation = await InstalationModel.findByPk(data.id)
    await instalation?.destroy()
    return {
        id: data.id
    }
}
