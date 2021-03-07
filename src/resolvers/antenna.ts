import Antenna from '../interfaces/antenna'
import AntennaModel from '../models/antenna_model'

interface IntoAntenna {
    product_id: number
    mac: string
}

export async function antenna(_: any, data: { id: string }): Promise<Antenna | null> {
    const antenna = await AntennaModel.findByPk(data.id)
    return antenna?.get() || null
}

export async function antennas(): Promise<Antenna[]> {
    const antennas = await AntennaModel.findAll()
    return antennas.map((antenna) => antenna.get())
}

export async function create_antenna(
    _: any,
    data: { into_antenna: IntoAntenna }
): Promise<Antenna> {
    const antenna = await AntennaModel.create(data.into_antenna)
    return antenna.get()
}

export async function update_antenna(
    _: any,
    data: { id: string; into_antenna: IntoAntenna }
): Promise<Antenna> {
    const antenna = await AntennaModel.findByPk(data.id)
    antenna?.set(data.into_antenna)
    const antenna_updated = await antenna?.save()
    return { ...antenna_updated?.get(), ...data.into_antenna }
}

export async function delete_antenna(_: any, data: { id: string }): Promise<{ id: string }> {
    const antenna = await AntennaModel.findByPk(data.id)
    await antenna?.destroy()
    return {
        id: data.id
    }
}
