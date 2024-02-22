import React from "react";
import { useSelector } from "react-redux";
import PrivateLayOut from "./Layout/PrivateLayOut";
const Home = () => {
  const userData = useSelector((state) => state.user[0]) || {
    name: "Guest",
    email: "Not Available",
    id: "Not Available",
  };

  return (
    <div>
      <PrivateLayOut />
      <div className="container">
        <p>
          <i>Welcome {userData.name}</i>
        </p>
      </div>
    </div>
  );
};

export default Home;
