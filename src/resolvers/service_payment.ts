import ServicePayment from '../interfaces/service_payment'
import ServicePaymentModel from '../models/service_payment_model'

interface IntoServicePayment {
    client_id: number
    amount: number
    pay: number
    cancelled: string
    payment_date: string
    due_date: string
}

export async function service_payment(
    _: any,
    data: { id: string }
): Promise<ServicePayment | null> {
    const service_payment = await ServicePaymentModel.findByPk(data.id)
    return service_payment?.get() || null
}

export async function service_payments(): Promise<ServicePayment[]> {
    const service_payments = await ServicePaymentModel.findAll()
    return service_payments.map((service_payment) => service_payment.get())
}

export async function create_service_payment(
    _: any,
    data: { into_service_payment: IntoServicePayment }
): Promise<ServicePayment> {
    const service_payment = await ServicePaymentModel.create(data.into_service_payment)
    return service_payment.get()
}

export async function update_service_payment(
    _: any,
    data: { id: string; into_service_payment: IntoServicePayment }
): Promise<ServicePayment> {
    const service_payment = await ServicePaymentModel.findByPk(data.id)
    service_payment?.set(data.into_service_payment)
    const service_payment_updated = await service_payment?.save()
    return { ...service_payment_updated?.get(), ...data.into_service_payment }
}

export async function delete_service_payment(
    _: any,
    data: { id: string }
): Promise<{ id: string }> {
    const service_payment = await ServicePaymentModel.findByPk(data.id)
    await service_payment?.destroy()
    return {
        id: data.id
    }
}
