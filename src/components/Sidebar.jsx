import { MessageCircleMore } from "lucide-react";
import { Phone } from "lucide-react";
import { Disc2 } from "lucide-react";
import { Settings } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import useActiveStore from "../store/store.js";

function Sidebar() {
  const { activeTab, setActiveTab } = useActiveStore();

  return (
    <div className="flex flex-col items-center justify-between py-4 pr-2">
      <div className="space-y-6">
        <div
          title="Messages"
          onClick={() => setActiveTab("messages")}
          className={`p-3 rounded-xl cursor-pointer transition ${
            activeTab === "messages"
              ? "chat-bubble-success text-white"
              : "text-gray-400 hover:bg-gray-700 hover:text-white"
          }`}
        >
          <MessageCircleMore size={22} title="Messages" />
        </div>

        <div
          title="Calls"
          onClick={() => setActiveTab("calls")}
          className={`p-3 rounded-xl cursor-pointer transition ${
            activeTab === "calls"
              ? "chat-bubble-success text-white"
              : "text-gray-400 hover:bg-gray-700 hover:text-white"
          }`}
        >
          <Phone size={22} title="Calls" />
        </div>

        <div
          title="Status"
          onClick={() => setActiveTab("status")}
          className={`p-3 rounded-xl cursor-pointer transition ${
            activeTab === "status"
              ? "chat-bubble-success text-white"
              : "text-gray-400 hover:bg-gray-700 hover:text-white"
          }`}
        >
          <Disc2 size={22} title="Status" />
        </div>
      </div>
      <div className="space-y-6">
        <div title="Setting">
          <Settings className="cursor-pointer text-gray-400" />
        </div>
        <div title="Profile">
          <CircleUserRound className="cursor-pointer text-gray-400" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
