import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "../assets/form.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { taskActions } from "../store/task";
import { useLocation } from "react-router-dom";
const UpdateTask = () => {
  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");

  const [select, setSelect] = useState("");
  const [user, setUser] = useState();
  const userData = useSelector((state) => state.user[0]) || {
    name: "Guest",
    email: "Not Available",
    id: "Not Available",
  };
  const location = useLocation();
  const taskGot = location.state;
  const taskName = taskGot.task || "";
  const taskDeadline = taskGot.deadline || "";
  const taskDescription = taskGot.description || "";
  const taskId = taskGot.task_id || "";
  const taskStatus = taskGot.select || "";
  useEffect(() => {
    setTask(taskName);
    setDeadline(taskDeadline);
    setSelect(taskStatus);
    setDescription(taskDescription);
  }, [taskDeadline, taskDescription, taskName, taskStatus]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cancel = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  const updateData = () => {
    const user12 = JSON.parse(localStorage.getItem(`user_${userData.email}`));
    const getTask = user12.tasks || [];
    for (let obj of getTask) {
      if (obj.task_id == taskId) {
        obj.task = task;
        obj.deadline = deadline;
        obj.description = description;

        (obj.select = select), (obj.task_id = taskId);
      }
    }

    setUser({
      email: userData.email,
      name: userData.name,
      id: userData.id,
      password: userData.password,
      tasks: getTask,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const user1 = JSON.parse(localStorage.getItem(`user_${userData.email}`));
    if (user1 != null) {
      localStorage.setItem(`user_${userData.email}`, JSON.stringify(user));
      dispatch(taskActions.add(user));
      toast.success("Task updated Successfully");
    } else {
      toast.error("Enter valid task");
    }
    setTask("");
    setDeadline("");
    setDescription("");
    setSelect("");
    navigate("/tasks");
  };
  return (
    <div className="form-container">
      <form className="inner-container" onSubmit={handleSubmit}>
        <h2 className="form-title">
          <i>Update task </i>
        </h2>
        <div className="form-group">
          <label>Task Name :</label>
          <input
            type="text"
            value={task}
            className="form-control"
            name="task"
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter Task Name"
            required
          />
        </div>

        <div className="form-group">
          <label>Task Deadline :</label>
          <input
            type="date"
            value={deadline}
            className="form-control"
            name="deadline"
            onChange={(e) => setDeadline(e.target.value)}
            placeholder="Enter a  Deadline"
            required
          />
        </div>
        <div className="form-group">
          <label>Task Description :</label>
          <input
            type="text"
            value={description}
            className="form-control"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter Task Description "
            required
          />
        </div>
        <div className="form-group">
          <label>Task Status :</label>
          <select
            value={select}
            onChange={(e) => setSelect(e.target.value)}
            required
            className="form-control"
          >
            <option value="ONGOING">Ongoing</option>
            <option value="COMPLETED">Completed</option>
            <option value="ONHOLD">Onhold</option>
          </select>
        </div>

        <div className="form-group sign">
          <button className="button" onClick={cancel}>
            Cancel
          </button>
          <button type="submit" className="button" onClick={updateData}>
            Update Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateTask;
