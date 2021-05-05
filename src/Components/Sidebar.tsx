import {Grid,Paper,TextField, Typography,Button} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({
    root:{
        width: "100%",
        height:"94%",
        margin:"20px",
        borderRadius:"5px",
        boxShadow:"rgba(0, 0, 0, 0.1) 0px 4px 12px",
        padding:"20px 20px"
    },
    item:{
        width: "100%",
        margin:"10px",
    },
    dateTime:{
        width:"100%",
        marginTop:"5px"
    },
    button:{
        margin:"10px"
    }
}))

const Sidebar=()=> {
    const classes= useStyles();

    return (
        <React.Fragment>
            <Paper className={classes.root}>
                <Grid item container>
                 <Grid className={classes.item}>
                    <TextField id="standard-basic" label="Request Id" fullWidth={true} />
                  </Grid> 
                  <Grid className={classes.item}>
                    <TextField id="standard-basic" label="Client  Request Id" fullWidth={true} />
                  </Grid>
                  <Grid className={classes.item}>
                    <TextField id="standard-basic" label="Mailbox Guid" fullWidth={true} />
                  </Grid>
                  <Grid className={classes.item}>
                    <TextField id="standard-basic" label="Tenant Id" fullWidth={true} />
                  </Grid>  
                  <Grid className={classes.item}>
                    <TextField className={classes.dateTime} id="datetime-local"
                            label="Start DateTime"
                            type="datetime-local"
                            defaultValue="2017-05-24T10:30"
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                  </Grid>
                  <Grid className={classes.item}>
                    <TextField className={classes.dateTime} id="datetime-local"
                            label="End DateTime"
                            type="datetime-local"
                            defaultValue="2017-05-24T10:30"
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                  </Grid>
                  <Button  className={classes.button} variant="contained" color="primary">Submit</Button>  
                </Grid>
            </Paper>
        </React.Fragment>
    )
}

export default Sidebar

