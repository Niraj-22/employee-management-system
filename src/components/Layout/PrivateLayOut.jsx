import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/user";
import { taskActions } from "../../store/task";
const PrivateLayOut = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userActions.logout());
    dispatch(userActions.logout());
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
