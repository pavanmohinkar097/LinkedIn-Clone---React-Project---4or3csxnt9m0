import React from "react";
import userMap from "../mock_backend/UserList";
import { useParams } from "react-router-dom";
import "./../styles/Dashboard.css";

const Dashboard = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default Dashboard;
