import { Model } from 'sequelize'
import Brand from '../interfaces/brand'
import { IMAGE_URL, UNIQUE_NAME } from '../utils/data_types_standard'
import extends_model_init from '../utils/extends_model_init'
import init_options_standard from '../utils/init_options_standard'

export default class BrandModel extends Model<Brand> {}

BrandModel.init(
    extends_model_init({
        name: UNIQUE_NAME,
        image_url: IMAGE_URL
    }),
    init_options_standard('brand')
)
