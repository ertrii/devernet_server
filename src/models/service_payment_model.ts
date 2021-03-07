import { Model, DataTypes } from 'sequelize'
import ServicePayment from '../interfaces/service_payment'
import { ID } from '../utils/data_types_standard'
import extends_model_init from '../utils/extends_model_init'
import init_options_standard from '../utils/init_options_standard'
import ClientModel from './client_model'
const { DECIMAL, NUMBER, STRING } = DataTypes

export default class ServicePaymentModel extends Model<ServicePayment> {}

ServicePaymentModel.init(
    extends_model_init({
        client_id: ID,
        amount: {
            type: DECIMAL(3, 2),
            allowNull: false
        },
        pay: {
            type: DECIMAL(3, 2),
            allowNull: false
        },
        cancelled: {
            type: NUMBER,
            allowNull: false
        },
        payment_date: {
            type: STRING,
            allowNull: false
        },
        due_date: {
            type: STRING,
            allowNull: false
        }
    }),
    init_options_standard('service_payment')
)

ServicePaymentModel.belongsTo(ClientModel, {
    foreignKey: 'client_id',
    onDelete: 'CASCADE'
})
