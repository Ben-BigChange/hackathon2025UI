import React from "react";

interface ChatHeaderProps {
  title: string;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ title }) => (
  <div className="flex items-center px-6 py-4 border-b border-gray-100 bg-brand-blue rounded-t-xl">
    <span className="text-black text-lg font-bold">{title}</span>
  </div>
);

export default ChatHeader; 