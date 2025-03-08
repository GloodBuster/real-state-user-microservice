import express from "express";

const app = express();
const port = 8001;

app.get("/", (_, res) => {
  res.send("Hello User Microservice!");
});

app.listen(port, () => {
  return console.log(`Server is listening on ${port} 🚀`);
});
