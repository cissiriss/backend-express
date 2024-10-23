const express = require("express");
const cors = require("cors");

const app = express(),
  port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors("https://backend-express-36q4.onrender.com/"));

app.get("/api", (_request, response) => {
  response.send({ hello: "World" });
});

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}/`);
});
