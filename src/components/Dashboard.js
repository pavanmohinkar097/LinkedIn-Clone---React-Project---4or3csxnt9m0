import React, { useEffect } from "react";
import userMap from "../mock_backend/UserList";
import { useNavigate, useParams } from "react-router-dom";
import "./../styles/Dashboard.css";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.value);

  useEffect(() => {
    if (user.isLoggedIn === false) navigate("/");
    else console.log(user);
  }, []);

  return <div>Hello ID : {id}</div>;
};

export default Dashboard;
