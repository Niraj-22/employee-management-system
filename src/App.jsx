import "./assets/main.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import DisplayTask from "./components/DisplayData";
import DashBoard from "./components/DashBoard";
import AddTask from "./components/AddTask";
import UpdateTask from "./components/UpdateTask";
import DeleteTask from "./components/DeleteTask";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/tasks" element={<DisplayTask />}></Route>
        <Route path="/tasks/add" element={<AddTask />} />
        <Route path="/tasks/update" element={<UpdateTask />} />
        <Route path="/tasks/delete" element={<DeleteTask />} />

        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </>
  );
};

export default App;
