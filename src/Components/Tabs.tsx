import React from 'react';
import {Tab,Divider,Tabs,Paper} from '@material-ui/core';

export default function DisabledTabs() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <Paper square>
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
      </Tabs>
      <Divider/>      
    </Paper>
  );
}
