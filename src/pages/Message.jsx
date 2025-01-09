import MessageList from "../components/Message/MessageList";
import MessageForm from "../components/Message/MessageForm";

const Messages = () => {
  return (
    <div className="messages-page">
      <MessageForm
        onMessageSent={(newMessage) => console.log("Message sent:", newMessage)}
      />
      <MessageList />
    </div>
  );
};

export default Messages;
