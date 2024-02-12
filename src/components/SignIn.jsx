import { useState } from "react";
import "../assets/form.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, setUser] = useState({
    email: null,
    password: null,
    name: null,
    id: null,
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user1 = JSON.parse(localStorage.getItem(`user_${email}`));
    if (user1 === null) {
      localStorage.setItem(`user_${user.email}`, JSON.stringify(user));
      toast.success("Sign - in Successfully");
    } else {
      toast.error("Enter valid email");
    }
    setEmail("");
    setPassword("");
    setName("");
    navigate("/");
  };
  return (
    <div className="form-container">
      <form className="inner-container" onSubmit={handleSubmit}>
        <h2 className="form-title">Sign-in Form</h2>
        <div className="form-group">
          <input
            type="text"
            value={name}
            className="form-control"
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your Name"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            value={email}
            className="form-control"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter a Email ID"
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

        <div className="form-group">
          <button
            type="submit"
            className="button"
            onClick={() =>
              setUser({
                email: email,
                name: name,
                password: password,
                id: Date.now(),
                tasks: [],
              })
            }
          >
            Sign-in
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
