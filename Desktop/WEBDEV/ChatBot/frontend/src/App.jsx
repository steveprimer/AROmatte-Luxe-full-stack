import React, { useState } from "react";
import axios from "axios";

function App() {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]); // array of { sender, text }
  const [messages, setMessages] = useState([]); // array of OpenAI-format messages

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "You", text: input };
    const newMessages = [...messages, { role: "user", content: input }];

    setChat([...chat, userMessage]);
    setMessages(newMessages);
    setInput("");

    try {
      const res = await axios.post("https://your-backend-url/chat", {
        messages: newMessages,
      });

      const botText = res.data.reply;
      const botMessage = { sender: "Bot", text: botText };
      setChat(prev => [...prev, botMessage]);
      setMessages(prev => [...prev, { role: "assistant", content: botText }]);
    } catch (err) {
      console.error(err);
      const errorMessage = { sender: "Bot", text: "Something went wrong." };
      setChat(prev => [...prev, errorMessage]);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto" }}>
      <h1>AI Chatbot</h1>
      <div style={{ minHeight: "200px", border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", marginBottom: "1rem" }}>
        {chat.map((msg, i) => (
          <p key={i}><strong>{msg.sender}:</strong> {msg.text}</p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === "Enter" && handleSend()}
        style={{ width: "80%", padding: "0.5rem" }}
      />
      <button onClick={handleSend} style={{ padding: "0.5rem 1rem", marginLeft: "0.5rem" }}>
        Send
      </button>
    </div>
  );
}

export default App;
