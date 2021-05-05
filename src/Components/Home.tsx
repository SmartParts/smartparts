import React from 'react';
import {Box,Typography,Grid,Paper,Divider} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({
    root:{
        width: "100%",
        height:"60%",
        padding:"20px",
        margin:"30px",
    },
    bodyStyle:{
        marginTop:"10px"
    },
    innerPaper:{
        width:"100%",
        padding:"7px",
        margin:"4px 0px 20px 5px"
    },
}))
export default function Home() {
    const  classes= useStyles();
    return (
        <Paper className={classes.root} >
            <Grid item container>
                <Grid item xs={12}>
                   <Typography  variant="h4">Warm Path</Typography>
                   <Divider />
                   <Typography variant="body1" className={classes.bodyStyle}>How: Here and Kusto. Cluster information:</Typography>
                </Grid>
                <Grid item  xs={12}>
                    <Paper className={classes.innerPaper}>
                        <Typography  variant="body2">
                           <Grid container direction="column" spacing={1}>
                               <Grid item>Cloud settings: Public cloud (windows.net)</Grid>
                               <Grid item>Cluster connection: https://o365monwus.kusto.windows.net</Grid>
                               <Grid item>Database: o365monitoring</Grid>
                               <Grid item>See O365 Core Wiki for more information.</Grid>
                            </Grid> 
                        </Typography> 
                    </Paper>
                    </Grid>
                    <Grid item  xs={12}>
                        <Typography  variant="body2">
                           <Grid container direction="column" spacing={1}>
                               <Grid item>When: Delayed ~15 minutes, up to 30 days</Grid>
                               <Grid item>Where:</Grid>
                               <Grid item>SDF - All requests</Grid>
                               <Grid item>MSIT - All requests, 404s excluded</Grid>
                               <Grid item>SIP, PROD - All non-2xx or latency `{'>'}` 1000ms requests, 404s excluded</Grid>
                            </Grid> 
                        </Typography> 
                    </Grid>
             </Grid>
        </Paper>
    )
}
