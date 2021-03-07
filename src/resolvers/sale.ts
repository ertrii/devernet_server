import Sale from '../interfaces/sale'
import SaleModel from '../models/sale_model'

interface IntoSale {
    client_id: number
    product_id: number
    pay: number
    amount: number
    commentary: string
    cancelled: string
}

export async function sale(_: any, data: { id: string }): Promise<Sale | null> {
    const sale = await SaleModel.findByPk(data.id)
    return sale?.get() || null
}

export async function sales(): Promise<Sale[]> {
    const sales = await SaleModel.findAll()
    return sales.map((sale) => sale.get())
}

export async function create_sale(_: any, data: { into_sale: IntoSale }): Promise<Sale> {
    const sale = await SaleModel.create(data.into_sale)
    return sale.get()
}

export async function update_sale(
    _: any,
    data: { id: string; into_sale: IntoSale }
): Promise<Sale> {
    const sale = await SaleModel.findByPk(data.id)
    sale?.set(data.into_sale)
    const sale_updated = await sale?.save()
    return { ...sale_updated?.get(), ...data.into_sale }
}

export async function delete_sale(_: any, data: { id: string }): Promise<{ id: string }> {
    const sale = await SaleModel.findByPk(data.id)
    await sale?.destroy()
    return {
        id: data.id
    }
}
