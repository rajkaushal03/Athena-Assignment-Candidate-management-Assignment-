import express from "express";
import cors from "cors";
import candidateRoute from "./routes/candidates.route.js";
import path from "path";

const app = express();
const PORT = 5000;
const __dirname = path.resolve();


app.use(cors());

app.use('/api', candidateRoute);


app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
