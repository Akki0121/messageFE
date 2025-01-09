const UserCard = ({ user, onDelete }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Role: {user.role}</p>
      <button onClick={() => onDelete(user._id)}>Delete</button>
    </div>
  );
};

export default UserCard;
