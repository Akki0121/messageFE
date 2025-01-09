import { useEffect, useState } from "react";
import { getMessages } from "../../services/messageService";
import MessageThread from "./MessageThread";

const MessageList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const data = await getMessages();
        setMessages(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMessages();
  }, []);

  return (
    <div className="message-list">
      <h2>Messages</h2>
      {messages.map((msg) => (
        <MessageThread key={msg._id} message={msg} />
      ))}
    </div>
  );
};

export default MessageList;
