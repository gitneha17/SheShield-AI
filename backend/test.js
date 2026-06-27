import dotenv from "dotenv";
dotenv.config();

import groq from "./config/groq.js";

const completion =
  await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "user",
        content: "hello",
      },
    ],
  });

console.log(
  completion.choices[0].message.content
);