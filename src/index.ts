import express from "express";

const app = express();

app.use(express.json());

app.get("/hello", (req, res) => {
  return res.status(200).json({ message: "Hello world!" });
});

app.listen(4000, () => console.info("Server running on port 4000 🚀"));

export { app };
