import { useState } from "react";
import { sendMessage } from "../../services/messageService";

const MessageForm = ({ onMessageSent }) => {
  const [formData, setFormData] = useState({
    receiverId: "",
    text: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newMessage = await sendMessage(formData);
      onMessageSent(newMessage);
      setFormData({ receiverId: "", text: "" });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Send Message</h2>
      <input
        type="text"
        placeholder="Receiver ID"
        value={formData.receiverId}
        onChange={(e) =>
          setFormData({ ...formData, receiverId: e.target.value })
        }
      />
      <textarea
        placeholder="Message"
        value={formData.text}
        onChange={(e) => setFormData({ ...formData, text: e.target.value })}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default MessageForm;
