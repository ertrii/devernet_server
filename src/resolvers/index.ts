import { brand, brands, create_brand, delete_brand, update_brand } from './brand'
import { create_product, delete_product, product, products, update_product } from './product'
import { create_user, delete_user, update_user, user, users } from './user'
import { antenna, antennas, create_antenna, update_antenna, delete_antenna } from './antenna'
import { service, services, create_service, update_service, delete_service } from './service'
import {
    instalation,
    instalations,
    create_instalation,
    update_instalation,
    delete_instalation
} from './instalation'
import { client, clients, create_client, update_client, delete_client } from './client'
import {
    service_payment,
    service_payments,
    create_service_payment,
    update_service_payment,
    delete_service_payment
} from './service_payment'
import { sale, sales, create_sale, update_sale, delete_sale } from './sale'
import { notice, notices, create_notice, update_notice, delete_notice } from './notice'

export const Query = {
    users,
    user,
    brand,
    brands,
    product,
    products,
    antenna,
    antennas,
    service,
    services,
    instalation,
    instalations,
    client,
    clients,
    service_payment,
    service_payments,
    sale,
    sales,
    notice,
    notices
}

export const Mutation = {
    create_user,
    update_user,
    delete_user,

    create_brand,
    update_brand,
    delete_brand,

    create_product,
    update_product,
    delete_product,

    create_antenna,
    update_antenna,
    delete_antenna,

    create_service,
    update_service,
    delete_service,

    create_instalation,
    update_instalation,
    delete_instalation,

    create_client,
    update_client,
    delete_client,

    create_service_payment,
    update_service_payment,
    delete_service_payment,

    create_sale,
    update_sale,
    delete_sale,

    create_notice,
    update_notice,
    delete_notice
}
