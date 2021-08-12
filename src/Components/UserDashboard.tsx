import React from 'react';
import { Box, Typography, Grid } from '@material-ui/core';
import { CardMedia, CardActions, Card } from '@material-ui/core';
export default function UserDashboard(){

    return(
        <Box style={{marginTop: "66px"}}>
            <Grid container>
                <Grid item xs={3} style={{width: "30%"}}>
                    {/* Side bar */}
                </Grid>
                <Grid item style={{marginTop: "100px"}}>
                    {/* avatar */}
                    <Typography component="p"><strong>Good afternoon, Saloni!</strong></Typography>
                    <Typography color="textSecondary" component="p">Welcome to Smart Parts Export! This is your home page where you can quickly see your wishlist and previous orders.</Typography>
                    <Typography component="p"><strong>Post Orders</strong></Typography>
                    <hr />
                    <Typography component="p"><strong>Recent Products</strong></Typography>
                    <hr />
                    <Grid container>
                    <Grid item xs={2} >
                    <Card style={{height: "125px", width: "125px", borderRadius: "25px"}}>
                        <CardActions>
                            <CardMedia>

                            </CardMedia>
                        </CardActions>
                    </Card>
                    </Grid>
                    <Grid item xs={2}>
                    <Card style={{height: "125px", width: "125px", borderRadius: "25px"}}>
                        <CardActions>
                            <CardMedia>
                                    {/* + icon      */}
                            </CardMedia>
                        </CardActions>
                    </Card>
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}