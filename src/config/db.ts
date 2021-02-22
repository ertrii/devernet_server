import { PGDATABASE, PGHOST, PGPASSWORD, PGPORT, PGUSER } from './constants'
import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(
    `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`
)

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully')
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error)
    })

sequelize.sync()

export default sequelize
