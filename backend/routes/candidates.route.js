import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();


const getCandidatesData = () => {
  const filePath = path.join(process.cwd(), "backend/data.json");  
  const rawData = fs.readFileSync(filePath, "utf-8");  
  return JSON.parse(rawData);  
};

router.get("/candidates", (req, res) => {
  const candidates = getCandidatesData();  
  res.json(candidates);  
});

export default router;
