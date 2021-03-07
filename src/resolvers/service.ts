import Service from '../interfaces/service'
import ServiceModel from '../models/service_model'

interface IntoService {
    name: string
    pay: number
    megabytes: number
    description: string
}

export async function service(_: any, data: { id: string }): Promise<Service | null> {
    const service = await ServiceModel.findByPk(data.id)
    return service?.get() || null
}

export async function services(): Promise<Service[]> {
    const services = await ServiceModel.findAll()
    return services.map((service) => service.get())
}

export async function create_service(
    _: any,
    data: { into_service: IntoService }
): Promise<Service> {
    const service = await ServiceModel.create(data.into_service)
    return service.get()
}

export async function update_service(
    _: any,
    data: { id: string; into_service: IntoService }
): Promise<Service> {
    const service = await ServiceModel.findByPk(data.id)
    service?.set(data.into_service)
    const service_updated = await service?.save()
    return { ...service_updated?.get(), ...data.into_service }
}

export async function delete_service(_: any, data: { id: string }): Promise<{ id: string }> {
    const service = await ServiceModel.findByPk(data.id)
    await service?.destroy()
    return {
        id: data.id
    }
}
