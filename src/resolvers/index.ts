import { brand, brands, create_brand, delete_brand, update_brand } from './brand'
import { create_user, delete_user, update_user, user, users } from './user'

export const Query = {
    users,
    user,
    brand,
    brands
}

export const Mutation = {
    create_user,
    update_user,
    delete_user,

    create_brand,
    update_brand,
    delete_brand
}
