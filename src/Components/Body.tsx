import React from 'react';
import {Grid,Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Sidebar from './Sidebar';
import { Route, Switch} from 'react-router-dom';
import Home from './Home';
import Results from './Results';

const useStyles = makeStyles((theme)=>({
    root:{
        height:"91.35%"
    },
    item1:{
        backgroundColor:theme.palette.grey[200],
        height:"100%"
    },
    item2:{
        height:"100%"
    }
}))


export default function Body() {
    const classes= useStyles();
    return (
        <Grid container className={classes.root}> 
            <Grid item xs={3} className={classes.item1} container><Sidebar/></Grid>
            <Grid item xs={9} className={classes.item2} container>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/result" component={Results}/>
                    <Route exact path="/login" component={Home}/>
                </Switch> 
            </Grid>
        </Grid>
    )
}
