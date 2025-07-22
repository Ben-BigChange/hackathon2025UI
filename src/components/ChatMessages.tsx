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
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ messages, messagesEndRef }) => (
  <div className="flex-1 overflow-y-auto px-4 py-2 space-y-4 bg-grey-25">
    {messages.map((msg, idx) => (
      <ChatMessage key={idx} sender={msg.sender} text={msg.text} />
    ))}
    <div ref={messagesEndRef} />
  </div>
);

export default ChatMessages; 