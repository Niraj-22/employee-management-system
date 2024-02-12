import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "../assets/form.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { taskActions } from "../store/task";
import { useLocation } from "react-router-dom";

const DeleteTask = () => {
  const [user, setUser] = useState();
  const userData = useSelector((state) => state.user[0]) || {
    name: "Guest",
    email: "Not Available",
    id: "Not Available",
  };
  const location = useLocation();
  const taskID = location.state;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cancel = (e) => {
    e.preventDefault();
    navigate("/tasks");
  };
  const handleDelete = () => {
    const user12 = JSON.parse(localStorage.getItem(`user_${userData.email}`));
    const getTask = user12.tasks || [];
    const deletedData = getTask.filter((task) => task.task_id != taskID);

    setUser({
      email: userData.email,
      name: userData.name,
      id: userData.id,
      password: userData.password,
      tasks: deletedData,
    });
  };
  const handleSubmit = () => {
    const user1 = JSON.parse(localStorage.getItem(`user_${userData.email}`));
    if (user1 != null) {
      localStorage.setItem(`user_${userData.email}`, JSON.stringify(user));
      dispatch(taskActions.add(user));
      toast.success("Task deleted Successfully");
    } else {
      toast.error("Enter valid task");
    }

    navigate("/tasks");
  };

  return (
    <div className="form-container">
      <form className="inner-container" onSubmit={handleSubmit}>
        <h4 className="form-title">
          Do you really want to delete task with ID : {taskID}
        </h4>

        <div className="form-group sign">
          <button className="button" onClick={cancel}>
            Cancel
          </button>
          <button className="button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeleteTask;
