import express from "express";
import cors from "cors";
import githubRoutes from "./routes/githubRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/github", githubRoutes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});