const express = require("express");
const pool = require("./db");  // import db.js

const app = express();
const PORT = 3000;

app.get("/", async (req, res) => {
    try {
        const result = await pool.query("SELECT 'Hello from PostgreSQL!' AS message");
        res.send(result.rows[0].message);
    } catch (err) {
        res.status(500).send("Database error: " + err.message);
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
