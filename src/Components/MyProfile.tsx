import React from 'react';
import {Box, Typography} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import  CardActions from '@material-ui/core/CardActions';
import   CardContent from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { AddressMap } from './AddressMap';

export default function MyProfile(){
    return(
        <Box >
        <Grid container >
            <Grid item xs={3} style={{width: "30%"}}>
                {/* Side bar */}
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