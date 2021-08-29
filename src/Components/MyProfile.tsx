import React from 'react';
import {Box, Typography, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Card from '@material-ui/core/Card';
import  CardActions from '@material-ui/core/CardActions';
import   CardContent from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { AddressMap } from './AddressMap';
import Checkbox from '@material-ui/core/Checkbox';
import {makeStyles} from '@material-ui/core/styles';
import logo from '../image/logo22.png';
import {Link} from 'react-router-dom';
const useStyles = makeStyles((theme) =>({
sizeofcheckbox: {
    transform: "scale(0.8)",
},
}));
export default function MyProfile(){
    const classes = useStyles();

 
    return(
        <Box>
        <Grid container>
            <Grid item xs={2} style={{ backgroundColor: "#141A26", marginRight: "25px"}}>
              <img src={logo} style={{marginTop: 10, width: 80 ,height:40}}  alt="logo" />
             <IconButton  style={{color: "white", marginLeft: "95px", top: "-16px"}}>
                    <MenuIcon/>
                </IconButton>
            <Box style={{display: "flex", flexDirection: "row",  marginTop: "35px"}}>
        <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        className={classes.sizeofcheckbox}
      />   
            <Link to="/dashboard" ><Typography style={{color: "white", marginTop: "8px"}}>Dashboard</Typography></Link> </Box>


                  <Box style={{display: "flex", flexDirection: "row"}}>
        <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        className={classes.sizeofcheckbox}
      />  <Typography style={{color: "white",  marginTop: "8px"}}>Products</Typography>    </Box>
    
                  <Box style={{display: "flex", flexDirection: "row"}}>
        <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        className={classes.sizeofcheckbox}
      /><Typography style={{color: "white",  marginTop: "8px"}}>Messages</Typography>    </Box>
      
      <Box style={{display: "flex", flexDirection: "row"}}>
        <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        className={classes.sizeofcheckbox}
      /><Typography style={{color: "white",  marginTop: "8px"}}>Others</Typography>    </Box>
      
            </Grid>
            <Grid item style={{marginTop: "100px", width: "60%"}}>
                <Typography variant="h6">Overview</Typography>
                <Typography variant="h4">Analytics</Typography>
                <Grid container style={{marginTop: "25px"}}>
                <Grid item xs={3} >
                <Card style={{height: "100px", borderRadius: "15px 0px 0px 15px"}}>
                    <CardActions>
                        <CardContent>
                        <Typography>Earnings</Typography>
                        </CardContent>
                    </CardActions>
                </Card>
                </Grid>
                <Grid item xs={3}>
                <Card style={{height: "100px",  marginLeft: "8px"}}>
                    <CardActions>
                        <CardContent>
                        <Typography>Avg. Selling Price</Typography>
                        </CardContent>
                    </CardActions>
                </Card>
                </Grid>
                <Grid item xs={3}>
                <Card style={{height: "100px",  marginLeft: "8px"}}>
                    <CardActions>
                        <CardContent>
                        <Typography>Orders Completed</Typography>
                        </CardContent>
                    </CardActions>
                </Card>
                </Grid>
                <Grid item xs={3}>
                <Card style={{height: "100px", marginLeft: "8px", borderRadius: "0px 15px 15px 0px"}}>
                    <CardActions>
                        <CardContent>
                        <Typography>Earned in August</Typography>
                        </CardContent>
                    </CardActions>
                </Card>
                </Grid>
                </Grid>
                <Box >
                    <Box style={{display: "flex", flexDirection: "row"}}>
                    <Grid container style={{display: "block"}}>
                        <Grid item xs={4} >
                            <Card style={{height: "100px", marginTop: "25px", borderRadius: "15px"}}>
                                <CardActions>
                                    <CardContent>
                        <Typography>Avg. Daily Views</Typography>
                        </CardContent>
                        </CardActions>
                        </Card>
                        </Grid>
                        <Grid item xs={4}>
                        <Card style={{height: "100px", marginTop: "25px", borderRadius: "15px"}}>
                                <CardActions>
                                    <CardContent>
                        <Typography>User Increase</Typography>
                        </CardContent>
                        </CardActions>
                        </Card>
                        
                        </Grid>
                        <Grid item xs={4}>
                        <Card style={{height: "100px", marginTop: "25px", borderRadius: "15px"}}>
                                <CardActions>
                                    <CardContent>
                        <Typography>New Users</Typography>
                        </CardContent>
                        </CardActions>
                        </Card>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item>
                            {/* Graph */}
                            
                        </Grid>
                    </Grid>
                    </Box>
                    <Grid container>
                        <Grid item>
                           <AddressMap />
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            </Grid>
 
    </Box>
    )
}