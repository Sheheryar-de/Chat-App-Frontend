import { useState } from "react";
import MessageContainer from "../components/Message/MessageContainer.jsx";
import ConversationContainer from "../components/Conversation/ConversationContainer.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Calls from "../components/Calls/Calls.jsx";
import Status from "../components/Status/Status.jsx";
import useActiveStore from "../store/store.js";

const DashboardPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const activeTab = useActiveStore((state) => state.activeTab);

  return (
    <div className="max-w-7xl w-full h-[95vh] mx-auto mt-4 p-4 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800 flex gap-1">
      <Sidebar />
      <div className="max-w-[370px] h-full w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl p-4 overflow-auto">
        {activeTab === "messages" && (
          <ConversationContainer onSelectUser={setSelectedUser} />
        )}
        {activeTab === "calls" && (
          <div>
            <Calls />
          </div>
        )}
        {activeTab === "status" && (
          <div>
            <Status />
          </div>
        )}
      </div>

      {activeTab === "messages" && (
        <div className="flex-1">
          <MessageContainer selectedUser={selectedUser} />
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
