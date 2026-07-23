const Message = ({ message, receiver }) => {
  const fromMe = message.sender === "me";

  return (
    <div className={`chat ${fromMe ? "chat-end" : "chat-start"}`}>
      <div className="chat-image avatar">
        <div className="w-12 rounded-full">
          <img
            src={fromMe ? "https://i.pravatar.cc/150?img=65" : receiver.avatar}
            alt={receiver.name}
          />
        </div>
      </div>

      <div
        className={`chat-bubble ${
          fromMe ? "chat-bubble-success" : "chat-bubble"
        } text-white`}
      >
        {message.text}
      </div>

      <div className="chat-footer text-xs text-gray-400">{message.time}</div>
    </div>
  );
};

export default Message;
