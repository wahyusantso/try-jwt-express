require('dotenv').config();

const config = {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    server: process.env.DB_HOST,
    pool: {
        max: 50,
        min: 0,
        idleTimeoutMillis: 960000
    },
    options: {
        encrypt: false,
        trustServerCertificate: true,
        requestTimeout: 960000
    }
}

module.exports = config;