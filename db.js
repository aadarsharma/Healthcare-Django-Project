// db.js
require("dotenv").config();  // loads variables from .env
const { Pool } = require("pg");

// Create a new connection pool
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Test connection
pool.query("SELECT NOW()", (err, res) => {
    if (err) {
        console.error("❌ Error connecting:", err);
    } else {
        console.log("✅ Connected! Current time:", res.rows[0]);
    }
    pool.end();
});

module.exports = pool;
