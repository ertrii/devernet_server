import Product from '../interfaces/product'
import ProductModel from '../models/product_model'

interface IntoProduct {
    name: string
    image_url: string
    cost: number
    brand_id: number
}

export async function product(_: any, data: { id: string }): Promise<Product | null> {
    const product = await ProductModel.findByPk(data.id)
    return product?.get() || null
}

export async function products(): Promise<Product[]> {
    const products = await ProductModel.findAll()
    return products.map((product) => product.get())
}

export async function create_product(
    _: any,
    data: { into_product: IntoProduct }
): Promise<Product> {
    const product = await ProductModel.create(data.into_product)
    return product.get()
}

export async function update_product(
    _: any,
    data: { id: string; into_product: IntoProduct }
): Promise<Product> {
    const product = await ProductModel.findByPk(data.id)
    product?.set(data.into_product)
    const product_updated = await product?.save()
    return { ...product_updated?.get(), ...data.into_product }
}

export async function delete_product(_: any, data: { id: string }): Promise<{ id: string }> {
    const product = await ProductModel.findByPk(data.id)
    await product?.destroy()
    return {
        id: data.id
    }
}
