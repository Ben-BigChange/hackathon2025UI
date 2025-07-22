import React from "react";
import { FaUser, FaRobot } from "react-icons/fa";

interface ChatMessageProps {
  sender: "user" | "bot";
  text: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ sender, text }) => (
  <div className={`flex items-end gap-2 ${sender === "user" ? "justify-end" : "justify-start"}`}>
    {sender === "bot" && (
      <div className="w-8 h-8 rounded-full bg-brand-sunsetorange flex items-center justify-center text-white flex-shrink-0">
        <FaRobot color="#7C5AE2" />
      </div>
    )}
    <div
      className={`px-4 py-2 rounded-2xl max-w-[75%] text-sm shadow-sm ${
        sender === "user"
          ? "bg-brand-blue text-base rounded-br-none"
          : "bg-grey-100 text-brand-blue rounded-bl-none"
      }`}
    >
      {text}
    </div>
    {sender === "user" && (
      <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center text-white flex-shrink-0">
        <FaUser color="#086DFF" />
      </div>
    )}
  </div>
);

export default ChatMessage; 