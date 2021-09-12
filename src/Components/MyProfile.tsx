import React from 'react';
import {Box, Typography, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Card from '@material-ui/core/Card';
import  CardActions from '@material-ui/core/CardActions';
import   CardContent from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { AddressMap } from './AddressMap';
import Checkbox from '@material-ui/core/Checkbox';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import logo from '../image/logo22.png';
import {Link} from 'react-router-dom';
import Chart from 'react-google-charts';
import {ResponsiveContainer} from 'recharts';
import { useMediaQuery } from '@material-ui/core';
const useStyles = makeStyles((theme) =>({
sizeofcheckbox: {
    transform: "scale(0.8)",
},
mapgrid: {
width: "10%",
}, 
firstsection: {
    [theme.breakpoints.down("sm")] :{
        display: "none",

    },
},
secondsection: {
    [theme.breakpoints.down("sm")] :{
        overflowX: "hidden",
        width: "188px",
    },
    [theme.breakpoints.down("md")] :{

        width: "688px",
    },
},
graphsection: {
    
    [theme.breakpoints.down("md")] :{
        
        width: "288px",
    },
},
dailyanalysis: {
    height: "100px",
     marginTop: "25px",
     width:"220px", 
    borderRadius: "15px",
    marginRight: "25px",
    [theme.breakpoints.down("sm")] :{
        width: "28px",
    },
  
    [theme.breakpoints.down("md")] :{

        width: "178px",
    },
},
}));
export default function MyProfile(){
    const classes = useStyles();
     const theme = useTheme();
     const issmallscreen = useMediaQuery(theme.breakpoints.down('sm'));
     const ismediumscreen = useMediaQuery(theme.breakpoints.down('md'));
 
    return(
        <Box>
        <Grid container>
            {/* {isMatchmediumscreen ? "" :  */}
            <Grid item xs={2} className={classes.firstsection} style={{ backgroundColor: "#141A26", marginRight: "25px"}}>
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
          {/* } */}
          <Grid item  className={classes.secondsection} style={{marginTop: "100px"}}>
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

                
                <Box>
                    <Box style={{display: "flex", flexDirection: "row"}}>
                    {issmallscreen ? "" :
                    <Grid container  style={{display: "block", width: "40%"}}>
                        <Grid item xs={2} >
                            <Card className={classes.dailyanalysis}>
                                <CardActions>
                                    <CardContent>
                        <Typography>Avg. Daily Views</Typography>
                        </CardContent>
                        </CardActions>
                        </Card>
                        </Grid>
                        <Grid item xs={2}>
                        <Card className={classes.dailyanalysis} >
                                <CardActions>
                                    <CardContent>
                        <Typography>User Increase</Typography>
                        </CardContent>
                        </CardActions>
                        </Card>                        
                        </Grid>
                        <Grid item xs={2}>
                        <Card className={classes.dailyanalysis} >
                                <CardActions>
                                    <CardContent>
                        <Typography>New Users</Typography>
                        </CardContent>
                        </CardActions>
                        </Card>
                        </Grid>
                    </Grid>
                }
                    {issmallscreen ?   <Grid container>
                        <Grid item xs={10} className={classes.graphsection}  style={{marginTop: "25px"}}>
                        <ResponsiveContainer width="320px" height="100%">
                            <Chart
                            
                            // width={'680px'}
                            // height={'350px'}
                            chartType="Bar"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['Year', 'Sales', 'Expenses', 'Profit'],
                                ['2014', 1000, 400, 200],
                                ['2015', 1170, 460, 250],
                                ['2016', 660, 1120, 300],
                                ['2017', 1030, 540, 350],
                            ]}
                            options={{
                                // Material design options
                                chart: {
                                title: 'Company Performance',
                                subtitle: 'Sales, Expenses, and Profit: 2014-2017',
                                },
                            }}
                            // For tests
                            rootProps={{ 'data-testid': '2' }}
                            />
                              </ResponsiveContainer>
                        </Grid>
                    </Grid> : <>  
                    {ismediumscreen ? 
                    <Grid container>
                        <Grid item xs={10} className={classes.graphsection}  style={{marginTop: "25px"}}>
                        <ResponsiveContainer width="480px" height="100%">
                            <Chart
                            
                            // width={'680px'}
                            // height={'350px'}
                            chartType="Bar"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['Year', 'Sales', 'Expenses', 'Profit'],
                                ['2014', 1000, 400, 200],
                                ['2015', 1170, 460, 250],
                                ['2016', 660, 1120, 300],
                                ['2017', 1030, 540, 350],
                            ]}
                            options={{
                                // Material design options
                                chart: {
                                title: 'Company Performance',
                                subtitle: 'Sales, Expenses, and Profit: 2014-2017',
                                },
                            }}
                            // For tests
                            rootProps={{ 'data-testid': '2' }}
                            />
                              </ResponsiveContainer>
                        </Grid>
                    </Grid> : <><Grid container>
                        <Grid item xs={10} className={classes.graphsection}  style={{marginTop: "25px"}}>
                     
                            <Chart
                            
                             width={'680px'}
                             height={'350px'}
                            chartType="Bar"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['Year', 'Sales', 'Expenses', 'Profit'],
                                ['2014', 1000, 400, 200],
                                ['2015', 1170, 460, 250],
                                ['2016', 660, 1120, 300],
                                ['2017', 1030, 540, 350],
                            ]}
                            options={{
                                // Material design options
                                chart: {
                                title: 'Company Performance',
                                subtitle: 'Sales, Expenses, and Profit: 2014-2017',
                                },
                            }}
                            // For tests
                            rootProps={{ 'data-testid': '2' }}
                            />
                           
                        </Grid>
                    </Grid></>}</>}
                    </Box>
                    <Grid container>
                        <Grid item className={classes.mapgrid}>
                           <AddressMap />
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            </Grid>
 
    </Box>
    )
}