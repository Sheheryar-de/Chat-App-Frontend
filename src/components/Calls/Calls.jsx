import {
  Phone,
  Video,
  ArrowDownLeft,
  ArrowUpRight,
  PhoneMissed,
} from "lucide-react";

const callHistory = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://i.pravatar.cc/150?img=1",
    type: "incoming",
    mode: "voice",
    time: "Today, 9:45 AM",
  },
  {
    id: 2,
    name: "Michael Brown",
    avatar: "https://i.pravatar.cc/150?img=12",
    type: "outgoing",
    mode: "video",
    time: "Today, 8:10 AM",
  },
  {
    id: 3,
    name: "Emma Wilson",
    avatar: "https://i.pravatar.cc/150?img=5",
    type: "missed",
    mode: "voice",
    time: "Yesterday, 7:30 PM",
  },
  {
    id: 4,
    name: "David Miller",
    avatar: "https://i.pravatar.cc/150?img=15",
    type: "incoming",
    mode: "video",
    time: "Yesterday, 5:15 PM",
  },
  {
    id: 5,
    name: "Sophia Davis",
    avatar: "https://i.pravatar.cc/150?img=32",
    type: "outgoing",
    mode: "voice",
    time: "Monday",
  },
  {
    id: 6,
    name: "Emma Wilson",
    avatar: "https://i.pravatar.cc/150?img=5",
    type: "missed",
    mode: "voice",
    time: "Yesterday, 7:30 PM",
  },
  {
    id: 7,
    name: "David Miller",
    avatar: "https://i.pravatar.cc/150?img=15",
    type: "incoming",
    mode: "video",
    time: "Yesterday, 5:15 PM",
  },
  {
    id: 8,
    name: "Sophia Davis",
    avatar: "https://i.pravatar.cc/150?img=32",
    type: "outgoing",
    mode: "voice",
    time: "Monday",
  },
];

export default function Calls() {
  return (
    <>
      <h1 className="text-3xl font-bold text-white mb-5">Calls</h1>

      <div className="flex-1 space-y-2 ">
        {callHistory.map((call) => (
          <div
            key={call.id}
            className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-700 transition cursor-pointer"
          >
            {/* Left */}
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src={call.avatar} alt={call.name} />
                </div>
              </div>

              <div>
                <h3 className="text-white font-semibold">{call.name}</h3>

                <div className="flex items-center gap-1 text-sm text-gray-400">
                  {call.type === "incoming" && (
                    <ArrowDownLeft className="w-4 h-4 text-green-500" />
                  )}

                  {call.type === "outgoing" && (
                    <ArrowUpRight className="w-4 h-4 text-green-500" />
                  )}

                  {call.type === "missed" && (
                    <PhoneMissed className="w-4 h-4 text-red-500" />
                  )}

                  <span>{call.time}</span>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="text-green-500">
              {call.mode === "voice" ? (
                <Phone className="w-5 h-5" />
              ) : (
                <Video className="w-5 h-5" />
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
