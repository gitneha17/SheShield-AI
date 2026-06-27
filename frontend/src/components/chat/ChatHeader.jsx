import { FaRobot } from "react-icons/fa";

function ChatHeader() {
  return (
    <div className="bg-white border-b px-6 py-4 flex items-center gap-3">
      <div className="bg-pink-600 p-3 rounded-full text-white">
        <FaRobot />
      </div>

      <div>
        <h2 className="font-bold text-lg">
          SheShield AI Assistant
        </h2>

        <p className="text-gray-500 text-sm">
          Ask legal questions in simple language.
        </p>
      </div>
    </div>
  );
}

export default ChatHeader;