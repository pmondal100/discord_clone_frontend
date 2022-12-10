import React from "react";
import classes from "./css/Dashboard.module.css";
import Sidebar from "./Sidebar/Sidebar";
import FriendsSidebar from "./FriendsSidebar/FriendsSidebar";
import Messenger from "./Messenger/Messenger";
import AppBar from "./AppBar/AppBar";
import Grid from "@mui/material/Grid";

const Dashboard = () => {
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
    >
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <div className={classes.wrapper}>
          <Sidebar />
          <FriendsSidebar />
          <Messenger />
          <AppBar />
        </div>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
