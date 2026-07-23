import Message from "./Message.jsx";
import { useEffect, useState } from "react";
import NoChatSelected from "./NoChatSelected.jsx";
import { BsSend } from "react-icons/bs";
import { Loader } from "lucide-react";

export const demoMessages = [
  // Sarah Johnson
  {
    id: 1,
    conversationId: 1,
    sender: "other",
    text: "Hey! Are we still meeting tomorrow?",
    time: "9:35 PM",
  },
  {
    id: 2,
    conversationId: 1,
    sender: "me",
    text: "Yes! Around 3 PM sounds good.",
    time: "9:37 PM",
  },
  {
    id: 3,
    conversationId: 1,
    sender: "other",
    text: "Perfect. See you tomorrow! 😊",
    time: "9:45 PM",
  },

  // Michael Brown
  {
    id: 4,
    conversationId: 2,
    sender: "other",
    text: "Thanks for helping me with the React issue.",
    time: "8:10 PM",
  },
  {
    id: 5,
    conversationId: 2,
    sender: "me",
    text: "No problem! Happy to help.",
    time: "8:15 PM",
  },
  {
    id: 6,
    conversationId: 2,
    sender: "other",
    text: "Thanks for your help!",
    time: "8:20 PM",
  },

  // Emma Wilson
  {
    id: 7,
    conversationId: 3,
    sender: "other",
    text: "Hey, did you finish the UI design?",
    time: "7:00 PM",
  },
  {
    id: 8,
    conversationId: 3,
    sender: "me",
    text: "Almost done. I'll send it tonight.",
    time: "7:08 PM",
  },
  {
    id: 9,
    conversationId: 3,
    sender: "other",
    text: "Can you send me the files?",
    time: "7:12 PM",
  },

  // David Miller
  {
    id: 10,
    conversationId: 4,
    sender: "other",
    text: "Did you see that meme I sent? 😂",
    time: "6:32 PM",
  },
  {
    id: 11,
    conversationId: 4,
    sender: "me",
    text: "Haha yes! I couldn't stop laughing.",
    time: "6:36 PM",
  },
  {
    id: 12,
    conversationId: 4,
    sender: "other",
    text: "😂😂 That's hilarious!",
    time: "6:40 PM",
  },
];

function MessageContainer({ selectedUser }) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!selectedUser) {
      setMessages([]);
      return;
    }

    const conversationMessages = demoMessages.filter(
      (message) => message.conversationId === selectedUser.id,
    );

    setMessages(conversationMessages);
  }, [selectedUser]);

  if (!selectedUser) {
    return (
      <div className="min-w-[450px] w-full h-full flex flex-col p-4">
        <NoChatSelected />
      </div>
    );
  }

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    setLoading(true);

    const userMessage = text;

    setTimeout(() => {
      const newMessage = {
        id: Date.now(),
        conversationId: selectedUser.id,
        sender: "me",
        text: userMessage,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, newMessage]);
      setText("");
      setLoading(false);

      // Auto reply
      setTimeout(() => {
        const replies = [
          "Sounds good! 👍",
          "Haha 😂",
          "I'll let you know.",
          "Perfect!",
          "See you then 😊",
          "Thanks!",
          "Okay 👌",
        ];

        const reply = {
          id: Date.now() + 1,
          conversationId: selectedUser.id,
          sender: "other",
          text: replies[Math.floor(Math.random() * replies.length)],
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };

        setMessages((prev) => [...prev, reply]);
      }, 1000);
    }, 500);
  };
  return (
    <div className="min-w-[450px] w-full h-full flex flex-col p-4 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl">
      {/* Header */}
      <div className="chat-bubble-success rounded px-4 py-2 mb-2">
        <span className="label-text text-black">To:</span>{" "}
        <span className="text-black font-bold">{selectedUser.name}</span>
      </div>

      {/* Messages */}
      <div className="px-4 flex-1 overflow-auto">
        {messages.length > 0 ? (
          messages.map((message) => (
            <Message
              key={message.id}
              receiver={selectedUser}
              message={message}
            />
          ))
        ) : (
          <p className="text-gray-400 text-center">No messages yet</p>
        )}
      </div>

      {/* Input */}
      <form className="px-4 my-3" onSubmit={handleSendMessage}>
        <div className="w-full relative">
          <input
            type="text"
            name="message"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full text-md block p-2.5 outline-none border border-gray-400 rounded-lg bg-gray-800 text-white"
            placeholder="Type a message..."
          />
          <button
            type="submit"
            disabled={loading}
            className="absolute inset-y-0 end-0 flex items-center justify-center h-[35px] px-3 mt-1.5 mr-2 gap-1 rounded-2xl text-black chat-bubble-success"
          >
            {loading ? (
              <Loader className="w-6 h-6 animate-spin mx-auto" />
            ) : (
              <>
                Send <BsSend className="size-5" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default MessageContainer;
