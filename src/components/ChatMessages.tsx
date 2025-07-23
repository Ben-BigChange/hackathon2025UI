import React from "react";
import type { RefObject } from "react";
import ChatMessage from "./ChatMessage";

interface Message {
  sender: "user" | "bot";
  text: string;
}

interface ChatMessagesProps {
  messages: Message[];
  messagesEndRef: RefObject<HTMLDivElement | null>;
  isThinking?: boolean;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({
  messages,
  messagesEndRef,
  isThinking,
}) => (
  <div className="flex-1 overflow-y-auto px-4 py-2 space-y-4 bg-grey-25">
    {messages.map((msg, idx) => (
      <ChatMessage key={idx} sender={msg.sender} text={msg.text} />
    ))}
    {isThinking && (
      <div className="flex items-center text-gray-500 m-2">
        <span>Bot is thinking...</span>
      </div>
    )}
    <div ref={messagesEndRef} />
  </div>
);

export default ChatMessages;
