import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// REST Api
app.get("/", (req, res) => {
  res.send("<h1>Hii..this is ecommerce app</h1>");
});

app.get("/api/v1/all-orders", async (req, res) => {
  try {
    const response = await axios.get(
      "https://631945908e51a64d2be10770.mockapi.io/api/v1/allOrders"
    ); // Replace with the actual URL of the mock API
    const data = response.data;

    res.json(data);
  } catch (error) {
    console.error("Error fetching data from API:", error);
    res.status(500).json({ error: "Failed to fetch data from API" });
  }
});

const PORT = 5000;
// Run App...Listen
app.listen(PORT, () => {
  console.log(` Server is running on localhost ${PORT} `);
});
