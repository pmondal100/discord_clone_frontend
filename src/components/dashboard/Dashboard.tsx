import React, { Dispatch, useEffect } from "react";
import classes from "./css/Dashboard.module.css";
import Sidebar from "./Sidebar/Sidebar";
import FriendsSidebar from "./FriendsSidebar/FriendsSidebar";
import Messenger from "./Messenger/Messenger";
import AppBar from "./AppBar/AppBar";
import Grid from "@mui/material/Grid";
import { dispatchBodyStructure } from "../common/utils/commonInterfaces";
import { connect } from "react-redux";
import { setUserData } from "../../store/actions/authActions";
import { connectWithSocketServer } from "../../realTimeCommunication/realTimeCommunication";

interface propStructure {
  setUserData: Function;
}

const Dashboard = (props: propStructure) => {
  const { setUserData } = props;
  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("user") || "{}");
    if (Object.keys(userDetails).length === 0) {
      localStorage.clear();
      window.location.assign("/login");
    } else {
      console.log('here');
      connectWithSocketServer(userDetails);
      setUserData(userDetails);
    }
  }, []);

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

const mapDispatchToProps = (dispatch: Dispatch<dispatchBodyStructure>) => {
  return {
    setUserData: (userData: { token: string; email: string }) =>
      dispatch(setUserData(userData)),
  };
};

export default connect(null, mapDispatchToProps)(Dashboard);
