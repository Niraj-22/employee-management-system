import { useSelector } from "react-redux";
import PrivateLayOut from "./Layout/PrivateLayOut";
import Joyride from "react-joyride";
import "../App.css";
const UserProfile = () => {
  const userData = useSelector((state) => state.user[0]) || {
    name: "Guest",
    email: "Not Available",
    id: "Not Available",
  };

  const steps = [
    {
      target: ".email",
      content: "This is user email",
    },
    {
      target: ".id",
      content: "This is users id",
    },
    {
      target: ".name",
      content: "This is users name",
    },
  ];

  return (
    <div>
      <PrivateLayOut />
      <Joyride
        steps={steps}
        continuous={true}
        showSkipButton={true}
        styles={{
          tooltipContainer: {
            textAlign: "left",
          },
          buttonNext: {
            backgroundColor: "green",
          },
          buttonBack: {
            marginRight: 10,
          },
        }}
        locale={{
          last: "End tour",
          skip: "Close tour",
        }}
      />
      <div className="container">
        <p className="email">
          <i> Email : {userData.email}</i>
        </p>
        <p className="id">
          <i> Id : {userData.id}</i>
        </p>
        <p className="name">
          <i>Name: {userData.name}</i>
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
