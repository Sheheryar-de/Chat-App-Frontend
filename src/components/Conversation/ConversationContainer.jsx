import { useState, useEffect } from "react";
import SearchInput from "./SearchInput.jsx";
import { MessageSquare, Users } from "lucide-react";
import { Loader } from "lucide-react";
import { CiLogout } from "react-icons/ci";
import { useAuthStore } from "../../store/authStore.js";

export default function ConversationContainer({ onSelectUser }) {
  const [activeTab, setActiveTab] = useState("conversations");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const { logout } = useAuthStore();

  const handleLogout = async (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <div className="flex flex-col flex-1 h-full scrollbar">
      {" "}
      {/* // All the conversations appear here */}
      <h1 className="text-3xl font-bold text-white mb-2">
        {activeTab === "conversations" ? "Chats" : " Users"}
      </h1>
      <div className="flex flex-1 flex-col overflow-auto">
        {/* Tabs */}
        <div className="flex mb-2 rounded-lg overflow-hidden">
          <button
            onClick={() => {
              setActiveTab("conversations");
              setSearch("");
            }}
            className={`flex-1 py-2 text-center font-medium transition flex items-center justify-center gap-2 ${
              activeTab === "conversations"
                ? "chat-bubble-success text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            <MessageSquare className="w-5 h-5" />
          </button>
          <button
            onClick={() => {
              setActiveTab("users");
              setSearch("");
            }}
            className={`flex-1 py-2 text-center font-medium transition flex items-center justify-center gap-2 ${
              activeTab === "users"
                ? "chat-bubble-success text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            <Users className="w-5 h-5" />
          </button>
        </div>
        <SearchInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* adding loader if the conversation loads */}
        {loading ? (
          <Loader className="w-6 h-6 animate-spin mx-auto mt-4 text-gray-200" />
        ) : (
          <div className="flex-1 overflow-auto mt-2">
            {activeTab === "conversations" ? (
              demoConversations.length > 0 ? (
                demoConversations.map((chat) => (
                  <div
                    key={chat.id}
                    onClick={() => onSelectUser(chat)}
                    className="flex items-center justify-between gap-3 py-3 px-3 hover:bg-gray-700 rounded-lg cursor-pointer transition"
                  >
                    {/* Left */}
                    <div className="flex items-center gap-3">
                      <div
                        className={`avatar ${chat.online ? "online" : "offline"}`}
                      >
                        <div className="w-12 rounded-full">
                          <img src={chat.avatar} alt={chat.name} />
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <span className="font-semibold text-gray-200">
                          {chat.name}
                        </span>
                        <span className="text-sm text-gray-400 truncate max-w-[170px]">
                          {chat.lastMessage}
                        </span>
                      </div>
                    </div>

                    {/* Right */}
                    <div className="flex flex-col items-end">
                      <span className="text-xs text-gray-400">{chat.time}</span>

                      {chat.unread > 0 && (
                        <span className="mt-1 w-5 h-5 rounded-full bg-green-500 text-white text-xs flex items-center justify-center">
                          {chat.unread}
                        </span>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-400 text-center mt-4">
                  No conversations
                </p>
              )
            ) : (
              <p className="text-gray-400 text-center mt-4">No users found</p>
            )}
          </div>
        )}
      </div>
      {/* // All the conversations end here */}
      {/* logout button */}
      <div className="mt-auto pt-4">
        <span
          onClick={handleLogout}
          className="flex items-center gap-1 cursor-pointer w-max text-gray-200 font-semibold"
        >
          <CiLogout className="size-6" />
          Logout
        </span>
      </div>
    </div>
  );
}

export const demoConversations = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://i.pravatar.cc/150?img=1",
    lastMessage: "See you tomorrow! 😊",
    time: "9:45 PM",
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: "Michael Brown",
    avatar: "https://i.pravatar.cc/150?img=12",
    lastMessage: "Thanks for your help!",
    time: "8:20 PM",
    unread: 0,
    online: false,
  },
  {
    id: 3,
    name: "Emma Wilson",
    avatar: "https://i.pravatar.cc/150?img=5",
    lastMessage: "Can you send me the files?",
    time: "7:12 PM",
    unread: 1,
    online: true,
  },
  {
    id: 4,
    name: "David Miller",
    avatar: "https://i.pravatar.cc/150?img=15",
    lastMessage: "😂😂 That's hilarious!",
    time: "6:40 PM",
    unread: 0,
    online: false,
  },
  {
    id: 5,
    name: "Michael Brown",
    avatar: "https://i.pravatar.cc/150?img=12",
    lastMessage: "Thanks for your help!",
    time: "8:20 PM",
    unread: 0,
    online: false,
  },
  {
    id: 6,
    name: "Emma Wilson",
    avatar: "https://i.pravatar.cc/150?img=5",
    lastMessage: "Can you send me the files?",
    time: "7:12 PM",
    unread: 1,
    online: true,
  },
  {
    id: 7,
    name: "David Miller",
    avatar: "https://i.pravatar.cc/150?img=15",
    lastMessage: "😂😂 That's hilarious!",
    time: "6:40 PM",
    unread: 0,
    online: false,
  },
];
