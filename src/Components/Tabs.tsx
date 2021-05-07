import React from 'react';
import {Tab,Divider,Tabs,Paper} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import Overview from './Overview';

const useStyles = makeStyles((theme)=>({
    paper:{
      width:"100%",
    },
    tabStructure:{
      padding:"30px",
      height:"93.5%"
    }
}))
export default function DisabledTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes= useStyles();

  return (
    <Paper square className={classes.paper} elevation={0}>
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
      <Paper square className={classes.tabStructure}>
        <Overview/>
      </Paper>    
    </Paper>
  );
}
