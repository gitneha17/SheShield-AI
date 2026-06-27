import express from "express";
import { chat } from "../controllers/chatController.js";

const router = express.Router();

router.post("/", (req, res) => {
  console.log("POST /api/chat reached");
  chat(req, res);
});

export default router;