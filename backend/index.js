const express = require('express');
const app = express();

const movieRoutes = require("./routes/movie")
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("testing the port");
});

app.get("/health", (req, res) => {
  res.json({ message: "Server is running!" })
});

app.use("/api", movieRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
