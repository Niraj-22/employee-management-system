import "./assets/main.css";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
const Login = lazy(() => import("./components/Login"));
const UserProfile = lazy(() => import("./components/UserProfile"));
const Home = lazy(() => import("./components/Home"));
const SignIn = lazy(() => import("./components/SignIn"));
const DisplayTask = lazy(() => import("./components/DisplayData"));
const DashBoard = lazy(() => import("./components/DashBoard"));
const AddTask = lazy(() => import("./components/AddTask"));
const UpdateTask = lazy(() => import("./components/UpdateTask"));
const DeleteTask = lazy(() => import("./components/DeleteTask"));
import "./App.css";
const App = () => {
  return (
    <>
      <Suspense>
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
      </Suspense>
    </>
  );
};

export default App;
