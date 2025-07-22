import React from "react";
import { FaPaperPlane } from "react-icons/fa";

interface ChatInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSend: () => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ value, onChange, onSend, onKeyDown }) => (
  <div className="p-4 border-t border-gray-100 bg-grey-0 flex gap-2 items-center">
    <input
      type="text"
      className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue text-black bg-white text-base"
      placeholder="Type your message..."
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
    <button
      onClick={onSend}
      className="bg-brand-blue hover:bg-brand-midblue text-white font-semibold p-3 rounded-full transition-colors flex items-center justify-center"
    >
      <FaPaperPlane color="#086DFF" />
    </button>
  </div>
);

export default ChatInput; 