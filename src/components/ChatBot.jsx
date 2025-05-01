import { useState } from 'react';
import { FaPaperPlane, FaTimes } from 'react-icons/fa';

const Chatbot = () => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi there! How can we help you today?' }
  ]);
  const [input, setInput] = useState('');

  const toggleChat = () => setShowChat((prev) => !prev);

  const handleSend = () => {
    if (input.trim() === '') return;

    setMessages((prev) => [...prev, { sender: 'user', text: input }]);
    setInput('');

    // Simulate dynamic bot reply based on user input
    const botReply = getBotReply(input);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: botReply },
      ]);
    }, 1000);
  };

  const getBotReply = (userMessage) => {
    // Simple keyword-based logic for dynamic responses
    const lowerCaseMessage = userMessage.toLowerCase();

    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
      return 'Hello! How can I assist you today?';
    }

    if (lowerCaseMessage.includes('price') || lowerCaseMessage.includes('cost')) {
      return 'Could you please specify which product you are inquiring about?';
    }

    if (lowerCaseMessage.includes('support') || lowerCaseMessage.includes('help')) {
      return 'I am here to help! What do you need assistance with?';
    }

    if (lowerCaseMessage.includes('thank') || lowerCaseMessage.includes('thanks')) {
      return 'You’re welcome! Let me know if you need further assistance.';
    }

    return 'Thanks for your message! We’ll get back to you soon.';
  };

  return (
    <>
      {/* Ask Us Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300"
      >
        <FaPaperPlane />
        <span>Ask Us</span>
      </button>

      {/* Chat Window */}
      {showChat && (
        <div className="fixed bottom-20 right-6 w-80 bg-white shadow-xl rounded-xl z-50 overflow-hidden border border-gray-300 flex flex-col">
          <div className="bg-orange-200 text-white px-4 py-3 flex justify-between items-center">
            <h3 className="font-semibold">Chat with Us</h3>
            <button onClick={toggleChat}>
              <FaTimes />
            </button>
          </div>

          <div className="flex-1 p-4 space-y-3 overflow-y-auto max-h-64">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`text-sm px-3 py-2 rounded-lg max-w-[80%] ${
                  msg.sender === 'bot'
                    ? 'bg-gray-100 text-gray-800 self-start'
                    : 'bg-orange-100 text-orange-800 self-end ml-auto'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="p-3 border-t flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 px-3 py-2 border rounded-lg text-sm outline-none"
            />
            <button
              onClick={handleSend}
              className="text-white bg-orange-500 hover:bg-orange-600 px-3 py-2 rounded-lg"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
