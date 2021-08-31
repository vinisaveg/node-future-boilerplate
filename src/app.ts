import express from "express";

const app = express();

app.use(express.json());

app.get("/hello", (req, res) => {
  return res.status(200).json({ message: "Hello world!" });
});

export { app };
