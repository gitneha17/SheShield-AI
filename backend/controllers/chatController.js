import { askGemini } from "../services/geminiService.js";

export const chat = async (req, res) => {
  console.log("=== CHAT ROUTE HIT ===");
  console.log(req.body);

  try {
    const { message } = req.body;

    console.log("Calling Gemini...");

    const reply = await askGemini(message);

    console.log("Gemini finished");

    res.json({ reply });

  } catch (error) {
    console.error("Controller Error:", error);

    res.status(500).json({
      error: error.message,
    });
  }
};