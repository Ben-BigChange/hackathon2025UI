import { useState, useRef, useEffect } from "react";
import { CHATBOT_API_URL } from "./constants";
import ChatHeader from "./components/ChatHeader";
import ChatMessages from "./components/ChatMessages";
import ChatInput from "./components/ChatInput";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<
    {
      sender: "user" | "bot";
      text: string;
    }[]
  >([{ sender: "bot", text: "Hi! How can I help you today?" }]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    setIsLoading(true);
    if (!input.trim()) return;
    // Add user message
    setMessages((msgs) => [...msgs, { sender: "user", text: input }]);
    const userInput = input;
    setInput("");
    try {
      const res = await fetch(CHATBOT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userInput, session_id: "12345" }),
      });
      const data = await res.json();
      setMessages((msgs) => [
        ...msgs,
        { sender: "bot", text: data.result || "No response from bot." },
      ]);
    } catch {
      setMessages((msgs) => [
        ...msgs,
        {
          sender: "bot",
          text: "Sorry, there was an error contacting the bot.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-greyblue">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg flex flex-col h-[80vh] border border-gray-200">
        <ChatHeader title="Job Finance Helper" />
        <ChatMessages
          messages={messages}
          messagesEndRef={messagesEndRef}
          isThinking={isLoading}
        />
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
