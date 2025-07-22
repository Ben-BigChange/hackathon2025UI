import { useState, useRef, useEffect } from "react";
import ChatHeader from "./components/ChatHeader";
import ChatMessages from "./components/ChatMessages";
import ChatInput from "./components/ChatInput";

function App() {
  const [messages, setMessages] = useState<{
    sender: "user" | "bot";
    text: string;
  }[]>([
    { sender: "bot", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages((msgs) => [
      ...msgs,
      { sender: "user", text: input },
      // Placeholder bot response
      { sender: "bot", text: "I'm just a UI for now!" },
    ]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-greyblue">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg flex flex-col h-[80vh] border border-gray-200">
        <ChatHeader title="Job Finance Helper" />
        <ChatMessages messages={messages} messagesEndRef={messagesEndRef} />
        <ChatInput
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onSend={sendMessage}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}

export default App;
