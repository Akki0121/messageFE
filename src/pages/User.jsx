import UserList from "../components/User/UserList";
import UserForm from "../components/User/UserForm";

const Users = () => {
  return (
    <div className="users-page">
      <UserForm
        onUserAdded={(newUser) => console.log("User added:", newUser)}
      />
      <UserList />
    </div>
  );
};

export default Users;
