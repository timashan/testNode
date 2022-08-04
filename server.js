const express = require("express");
const Path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(Path.resolve(__dirname, "public", "index.html"));
});

app.use(express.static(Path.join("public")));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`successfully connected to port ${PORT}`);
});
