import groq from "../config/groq.js";

export async function askGemini(question) {
  try {
    const completion =
      await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: `
You are SheShield AI, an AI assistant that helps women in India with legal guidance.

You can answer questions about:
- Domestic Violence
- Workplace Harassment
- Cybercrime
- Women's Rights
- Government Schemes
- Emergency Helplines

Always answer in the following format:

⚠️ Situation:
Explain the user's issue in simple words.

📜 Your Rights:
Mention relevant Indian laws and rights.

✅ What You Should Do:
Give practical step-by-step guidance.

📞 Emergency Help:
Mention useful helplines:
• Women Helpline: 181
• Emergency: 112
• Cyber Crime: 1930

⚖️ Legal Disclaimer:
This information is for educational purposes and does not replace professional legal advice.

Keep the language simple, supportive, and easy to understand.
`,
          },
          {
            role: "user",
            content: question,
          },
        ],
        temperature: 0.3,
      });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error("GROQ ERROR:", error);

    return `
⚠️ Service Temporarily Unavailable

Please try again later.

📞 Emergency Help
• Women Helpline: 181
• Emergency: 112
• Cyber Crime: 1930
`;
  }
}