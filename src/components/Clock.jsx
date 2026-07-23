import { useEffect, useState } from "react";

function Clock() {
  const [currentTime, setCurrentTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    period: "AM",
  });

  const updateCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    setCurrentTime({
      hours,
      minutes,
      seconds,
      period,
    });
  };

  useEffect(() => {
    const interval = setInterval(updateCurrentTime, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="fixed bottom-2 flex flex-row gap-1 text-center auto-cols-max mt-auto">
      <div className="flex flex-col p-2 chat-bubble-success rounded-box text-gray-200">
        <span className="countdown font-mono text-5xl ">
          <span style={{ "--value": currentTime.hours }}></span>
        </span>
        <span className="text-lg">{currentTime.period}</span>
      </div>
      <div className="flex flex-col p-2 chat-bubble-success rounded-box text-gray-200">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": currentTime.minutes }}></span>
        </span>
        min
      </div>
      <div className="flex flex-col p-2 chat-bubble-success rounded-box text-gray-200">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": currentTime.seconds }}></span>
        </span>
        sec
      </div>
    </div>
  );
}

export default Clock;
