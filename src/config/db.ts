import { PGDATABASE, PGHOST, PGPASSWORD, PGPORT, PGUSER } from './constants'
import { Pool } from 'pg'

const pool = new Pool({
    user: PGUSER,
    host: PGHOST,
    database: PGDATABASE,
    password: PGPASSWORD,
    port: PGPORT
})

pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res.rows)
    pool.end()
})

export { pool }
