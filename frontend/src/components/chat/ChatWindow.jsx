import WelcomeScreen from "./WelcomeScreen";
import { FaCopy, FaCheck } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

function ChatWindow({
  messages,
  onQuestionClick,
}){  const bottomRef = useRef(null);
  const [copiedId, setCopiedId] = useState(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const copyMessage = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);

    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <div className="flex-1 overflow-y-auto p-8 bg-pink-50">
      {messages.length === 0 ? (
<WelcomeScreen
  onQuestionClick={onQuestionClick}
/>
      ) : (
        <div className="flex flex-col gap-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`relative max-w-[75%] rounded-xl px-4 py-3 break-words whitespace-pre-wrap ${
                message.sender === "user"
                  ? "ml-auto bg-pink-600 text-white"
                  : "bg-white text-gray-800 shadow-md"
              }`}
            >
              <p
                className={
                  message.loading
                    ? "animate-pulse"
                    : ""
                }
              >
                {message.text}
              </p>

              {message.sender === "ai" &&
                !message.loading && (
                  <button
                    onClick={() =>
                      copyMessage(
                        message.text,
                        message.id
                      )
                    }
                    className="absolute top-3 right-3 text-gray-400 hover:text-pink-600"
                    title="Copy"
                  >
                    {copiedId === message.id ? (
                      <FaCheck />
                    ) : (
                      <FaCopy />
                    )}
                  </button>
                )}

              {message.time && (
                <p
                  className={`text-xs mt-2 ${
                    message.sender === "user"
                      ? "text-pink-100"
                      : "text-gray-400"
                  }`}
                >
                  {message.time}
                </p>
              )}
            </div>
          ))}

          <div ref={bottomRef}></div>
        </div>
      )}
    </div>
  );
}

export default ChatWindow;