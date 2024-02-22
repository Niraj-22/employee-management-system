import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/user";
import { taskActions } from "../../store/task";
const PrivateLayOut = () => {
  const userData = useSelector((state) => state.user[0]) || {
    name: "Guest",
    email: "Not Available",
    id: "Not Available",
  };
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem(`user_${userData.email}`);
    dispatch(userActions.logout());
    dispatch(taskActions.logout());
  };
  return (
    <div>
      <nav className="primary-link">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/tasks">Tasks</NavLink>
        <NavLink to="/dashboard">DashBoard</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/" onClick={handleLogout}>
          Logout
        </NavLink>
      </nav>
    </div>
  );
};

export default PrivateLayOut;
