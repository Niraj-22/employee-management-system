import { useSelector } from "react-redux";
import PrivateLayOut from "./Layout/PrivateLayOut";

const UserProfile = () => {
  const userData = useSelector((state) => state.user[0]) || {
    name: "Guest",
    email: "Not Available",
    id: "Not Available",
  };
  return (
    <div>
      <PrivateLayOut />

      <p>
        <i> Email : {userData.email}</i>
      </p>
      <p>
        <i> Id : {userData.id}</i>
      </p>
      <p>
        <i>Name: {userData.name}</i>
      </p>
    </div>
  );
};

export default UserProfile;
