const mysql = require("mysql2");
require("dotenv").config(); // Load .env variables

// Create the MySQL connection using environment variables
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME,
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.message);
    process.exit(1); // Exit the application if the DB connection fails
  } else {
    console.log("Connected to the MySQL database.");
  }
});

module.exports = db;
