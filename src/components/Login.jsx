import { useState } from "react";
import "../assets/form.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../store/user";
import { taskActions } from "../store/task";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user1 = JSON.parse(localStorage.getItem(`user_${email}`));
    if (user1 && user1.email === email && user1.password === password) {
      toast.success("Login Successfully");
      dispatch(userActions.login(user1));
      dispatch(taskActions.add(user1));

      navigate("/home");
    } else {
      toast.error("Enter Valid Credentials");
    }
    setEmail("");
    setPassword("");
  };
  return (
    <div className="form-container">
      <form className="inner-container" onSubmit={handleSubmit}>
        <h2 className="form-title">Log-in Form</h2>
        <div className="form-group">
          <input
            type="email"
            value={email}
            className="form-control"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter a Valid Email ID"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            value={password}
            className="form-control"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            required
          />
        </div>

        <div className="form-group sign">
          <button type="submit" className="button">
            Log-in
          </button>
          <button
            type="button"
            className="button"
            onClick={() => navigate("/sign-in")}
          >
            Sign - Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
