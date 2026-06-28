const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000";

export async function sendMessage(message) {
const response = await fetch(
  "https://sheshield-ai.onrender.com/api/chat",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  }
);
  if (!response.ok) {
    throw new Error("Request failed");
  }

  const data = await response.json();
  return data.reply;
}