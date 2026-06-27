import { useState, useEffect } from "react";

import MainLayout from "../components/layout/MainLayout";
import ChatSidebar from "../components/chat/ChatSidebar";
import ChatHeader from "../components/chat/ChatHeader";
import ChatWindow from "../components/chat/ChatWindow";
import ChatInput from "../components/chat/ChatInput";

import { sendMessage } from "../services/aiService";

function Chat() {
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("messages");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "messages",
      JSON.stringify(messages)
    );
  }, [messages]);

  const handleSend = async (text) => {
  if (!text.trim()) return;

  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const userMessage = {
    id: Date.now(),
    sender: "user",
    text,
    time: currentTime,
  };

  const loadingId = Date.now() + 1;

  setMessages((prev) => [
    ...prev,
    userMessage,
    {
      id: loadingId,
      sender: "ai",
      text: "SheShield AI is typing...",
      time: currentTime,
      loading: true,
    },
  ]);

  try {
    const reply = await sendMessage(text);

    const aiTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === loadingId
          ? {
              ...msg,
              text: reply,
              time: aiTime,
              loading: false,
            }
          : msg
      )
    );
  } catch (error) {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === loadingId
          ? {
              ...msg,
              text: "Sorry, something went wrong.",
              loading: false,
            }
          : msg
      )
    );
  }
};

  return (
    <MainLayout>
<div className="h-[calc(100vh-120px)] flex bg-pink-50">
          <ChatSidebar
          messages={messages}
          setMessages={setMessages}
        />

        <div className="flex flex-col flex-1">
          <ChatHeader />

<ChatWindow
  messages={messages}
  onQuestionClick={handleSend}
/>
          <ChatInput onSend={handleSend} />
        </div>
      </div>
    </MainLayout>
  );
}

export default Chat;