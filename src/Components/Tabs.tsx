import React from 'react';
import {Tab,Divider,Tabs,Paper} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import BasicDetails from "./BasicDetails";

const useStyles = makeStyles((theme)=>({
    paper:{
      width:"100%",
    }
}))
export default function DisabledTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes= useStyles();

  return (
    <Paper square className={classes.paper}>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Basic" />
        <Tab label="Graph Logs"/>
        <Tab label="Rest Logs"/>
        <Tab label="Cafe Logs"/>
        <Tab label="Entity Logs" />
        <Tab label="Latency" />
      </Tabs>
      <Divider/> 
      <BasicDetails/>     
    </Paper>
  );
}
