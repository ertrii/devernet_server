import Brand from '../interfaces/brand'
import BrandModel from '../models/brand_model'

interface IntoBrand {
    name: string
    image_url: string
}

export async function brand(_: any, data: { id: string }): Promise<Brand | null> {
    const brand = await BrandModel.findByPk(data.id)
    return brand?.get() || null
}

export async function brands(): Promise<Brand[]> {
    const brands = await BrandModel.findAll()
    return brands.map((brand) => brand.get())
}

export async function create_brand(_: any, data: { into_brand: IntoBrand }): Promise<Brand> {
    const brand = await BrandModel.create(data.into_brand)
    return brand.get()
}

export async function update_brand(
    _: any,
    data: { id: string; into_brand: IntoBrand }
): Promise<Brand> {
    const brand = await BrandModel.findByPk(data.id)
    brand?.set(data.into_brand)
    const brand_updated = await brand?.save()
    return { ...brand_updated?.get(), ...data.into_brand }
}

export async function delete_brand(_: any, data: { id: string }): Promise<{ id: string }> {
    const brand = await BrandModel.findByPk(data.id)
    await brand?.destroy()
    return {
        id: data.id
    }
}
