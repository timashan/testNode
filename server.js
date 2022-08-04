const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    status: "success",
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`successfully connected to port ${PORT}`);
});
