import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

const PORT = 5000;
// Run App...Listen
app.listen(PORT, () => {
  console.log(` Server is running on localhost ${PORT} `);
});
