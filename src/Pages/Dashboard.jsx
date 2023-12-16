import { Link } from "@mui/material";
import React from "react";

const Dashboard = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome to Dashboard Page</h1>

      <Link mr={3} href="/login" variant="body2">
        Login
      </Link>
      <Link href="/sign-up" variant="body2">
        Sign Up
      </Link>
    </div>
  );
};

export default Dashboard;
