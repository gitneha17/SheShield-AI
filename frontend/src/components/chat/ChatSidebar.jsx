import {
  FaPlus,
  FaComments,
  FaTrash,
} from "react-icons/fa";

function ChatSidebar({
  messages = [],
  setMessages,
}) {
  const userMessages = messages.filter(
    (msg) => msg.sender === "user"
  );

  const handleNewChat = () => {
    const confirmClear = window.confirm(
      "Start a new chat? This will clear current messages."
    );

    if (!confirmClear) return;

    setMessages([]);
    localStorage.removeItem("messages");
  };

  return (
    <aside className="w-80 bg-white border-r border-pink-100 flex flex-col shadow-lg">
      {/* Top Section */}
      <div className="p-5 border-b">
        <button
          onClick={handleNewChat}
          className="w-full bg-pink-600 hover:bg-pink-700 text-white rounded-xl py-3 flex justify-center items-center gap-3 transition font-semibold shadow-md"
        >
          <FaPlus />
          New Chat
        </button>
      </div>

      {/* Chat History */}
      <div className="flex-1 overflow-y-auto p-5">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-gray-800 text-lg">
            Recent Chats
          </h3>

          <span className="bg-pink-100 text-pink-600 text-xs px-3 py-1 rounded-full font-semibold">
            {userMessages.length}
          </span>
        </div>

        {userMessages.length === 0 ? (
          <div className="text-center mt-12">
            <FaComments
              size={40}
              className="mx-auto text-gray-300 mb-3"
            />

            <p className="text-gray-400">
              No chats yet
            </p>

            <p className="text-gray-300 text-sm mt-2">
              Start a conversation with
              SheShield AI.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {userMessages
              .slice()
              .reverse()
              .map((msg) => (
                <div
                  key={msg.id}
                  className="bg-pink-50 hover:bg-pink-100 border border-pink-100 rounded-xl p-4 cursor-pointer transition duration-200 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <FaComments className="text-pink-600 mt-1" />

                    <div className="flex-1">
                      <p className="text-sm text-gray-700 line-clamp-2">
                        {msg.text.length > 55
                          ? msg.text.slice(
                              0,
                              55
                            ) + "..."
                          : msg.text}
                      </p>

                      {msg.time && (
                        <p className="text-xs text-gray-400 mt-2">
                          {msg.time}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>

      {/* Footer */}
      {userMessages.length > 0 && (
        <div className="border-t p-4">
          <button
            onClick={handleNewChat}
            className="w-full flex items-center justify-center gap-2 text-red-500 hover:bg-red-50 py-3 rounded-lg transition"
          >
            <FaTrash />
            Clear All Chats
          </button>
        </div>
      )}
    </aside>
  );
}

export default ChatSidebar;