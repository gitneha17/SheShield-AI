import { useState } from "react";
import { FaPaperPlane, FaMicrophone } from "react-icons/fa";

function ChatInput({ onSend }) {
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);

  const suggestions = [
    "My husband beats me.",
    "How can I file a cybercrime complaint?",
    "What are my workplace rights?",
    "Tell me about Sukanya Samriddhi Yojana.",
  ];

  const sendMessage = () => {
    if (!text.trim()) return;

    onSend(text);
    setText("");
  };

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert(
        "Speech recognition is not supported in this browser."
      );
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-IN";
    recognition.interimResults = false;

    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onresult = (event) => {
      const transcript =
        event.results[0][0].transcript;

      setText((prev) =>
        prev
          ? prev + " " + transcript
          : transcript
      );
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.onerror = () => {
      setListening(false);
    };

    recognition.start();
  };

  return (
    <div className="bg-white border-t p-5">
      {/* Suggested Questions */}
      <div className="flex flex-wrap gap-2 mb-4">
        {suggestions.map((question, index) => (
          <button
            key={index}
            onClick={() => setText(question)}
            className="bg-pink-100 text-pink-700 px-3 py-2 rounded-full text-sm hover:bg-pink-200 transition"
          >
            {question}
          </button>
        ))}
      </div>

      {/* Input Section */}
      <div className="flex gap-4">
        <input
          type="text"
          value={text}
          onChange={(e) =>
            setText(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          placeholder="Ask your legal question..."
          className="flex-1 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-pink-500"
        />

        {/* Voice Input */}
        <button
          onClick={startListening}
          className={`px-4 rounded-xl text-white transition ${
            listening
              ? "bg-red-500 animate-pulse"
              : "bg-pink-500 hover:bg-pink-600"
          }`}
          title="Speak your question"
        >
          <FaMicrophone />
        </button>

        {/* Send Button */}
        <button
          onClick={sendMessage}
          className="bg-pink-600 hover:bg-pink-700 text-white px-6 rounded-xl transition"
        >
          <FaPaperPlane />
        </button>
      </div>

      {/* Listening Indicator */}
      {listening && (
        <p className="text-sm text-pink-600 mt-2">
          🎤 Listening...
        </p>
      )}
    </div>
  );
}

export default ChatInput;