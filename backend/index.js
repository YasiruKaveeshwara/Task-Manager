const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const taskRoutes = require("./routes/taskRoutes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
