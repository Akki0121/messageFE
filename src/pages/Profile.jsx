import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { userdata, userProfile } = useContext(AuthContext);

  useEffect(() => {
    userProfile();
  }, []);

  if (!userdata) return <p>Loading...</p>;

  return (
    <div className="profile">
      <h2>Profile</h2>
      <p>
        <strong>Name:</strong> {userdata.name}
      </p>
      <p>
        <strong>Email:</strong> {userdata.email}
      </p>
      <p>
        <strong>Role:</strong> {userdata.role}
      </p>
    </div>
  );
};

export default Profile;
