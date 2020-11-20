const { Pool } = require('pg');
require("dotenv").config();


const client = new Pool ({
    user:process.env.PGUSER,
    host:process.env.PGHOST,
    database:process.env.PGDATABASE,
    password:process.env.PGPASSWORD,
    port:process.env.PGPORT
})

module.exports = client;