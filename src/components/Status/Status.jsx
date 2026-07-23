import { Plus, Eye } from "lucide-react";

const demoStatus = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://i.pravatar.cc/150?img=1",
    time: "10 minutes ago",
    viewed: false,
  },
  {
    id: 2,
    name: "Michael Brown",
    avatar: "https://i.pravatar.cc/150?img=12",
    time: "35 minutes ago",
    viewed: false,
  },
  {
    id: 3,
    name: "Emma Wilson",
    avatar: "https://i.pravatar.cc/150?img=5",
    time: "1 hour ago",
    viewed: true,
  },
  {
    id: 4,
    name: "David Miller",
    avatar: "https://i.pravatar.cc/150?img=15",
    time: "2 hours ago",
    viewed: true,
  },
];

export default function Status() {
  return (
    <div className="flex flex-col h-full">
      <h1 className="text-3xl font-bold text-white mb-5">Status</h1>

      {/* My Status */}
      <div className="flex items-center justify-between p-3 rounded-xl bg-gray-700/40 hover:bg-gray-700 transition cursor-pointer">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src="https://i.pravatar.cc/150?img=68"
              alt="Me"
              className="w-14 h-14 rounded-full"
            />

            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center border-2 border-gray-800">
              <Plus size={14} className="text-white" />
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold">My Status</h3>
            <p className="text-gray-400 text-sm">Tap to add a status update</p>
          </div>
        </div>
      </div>

      {/* Recent Updates */}
      <h2 className="text-sm text-gray-400 uppercase tracking-wider mt-6 mb-2">
        Recent Updates
      </h2>

      <div className="flex-1 overflow-y-auto space-y-2">
        {demoStatus.map((status) => (
          <div
            key={status.id}
            className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-700 transition cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div
                className={`p-[2px] rounded-full ${
                  status.viewed
                    ? "border-2 border-gray-500"
                    : "border-2 border-green-500"
                }`}
              >
                <img
                  src={status.avatar}
                  alt={status.name}
                  className="w-14 h-14 rounded-full"
                />
              </div>

              <div>
                <h3 className="text-white font-semibold">{status.name}</h3>
                <p className="text-sm text-gray-400">{status.time}</p>
              </div>
            </div>

            <Eye
              size={18}
              className={status.viewed ? "text-gray-500" : "text-green-500"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
