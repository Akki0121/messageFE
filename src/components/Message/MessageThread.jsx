// import { useEffect, useState } from "react";
// import { getMessages, sendMessage } from "../../services/messageService";

// const MessageThread = () => {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");

//   useEffect(() => {
//     const fetchMessages = async () => {
//       const data = await getMessages();
//       setMessages(data);
//     };
//     fetchMessages();
//   }, []);

//   const handleSend = async () => {
//     try {
//       const message = await sendMessage(newMessage);
//       setMessages([...messages, message]);
//       setNewMessage("");
//     } catch (err) {
//       alert("Failed to send message");
//     }
//   };

//   return (
//     <div className="message-thread">
//       <h2>Messages</h2>
//       <ul>
//         {messages.map((msg) => (
//           <li key={msg._id}>
//             <strong>{msg.sender}</strong>: {msg.content}
//           </li>
//         ))}
//       </ul>
//       <input
//         type="text"
//         placeholder="Type your message"
//         value={newMessage}
//         onChange={(e) => setNewMessage(e.target.value)}
//       />
//       <button onClick={handleSend}>Send</button>
//     </div>
//   );
// };

// export default MessageThread;

const MessageThread = ({ message }) => {
  return (
    <div className="message-thread">
      <h3>From: {message.sender.name}</h3>
      <p>{message.text}</p>
      <p>
        <strong>To:</strong> {message.receiver.name}
      </p>
      <hr />
    </div>
  );
};

export default MessageThread;
