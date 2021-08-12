import React from 'react';
import {Box,Typography,Grid,Paper,Divider} from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import { CardMedia, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FavoriteBorder } from '@material-ui/icons';
import brand1 from "../image/brand1.png";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) =>({
productimage: {
    height: 150,
    margin: "10px",
},
icon: {
    margin: 10,
    fontSize: 24,
  },
  addtocartbtn: {
      fontSize: 12,
  }
}));
export default function Wishlist() {
const classes = useStyles();
return(
    <Box style={{marginTop: "60px", marginLeft: "120px"}}>
        <Typography variant="h4" style={{padding: '20px'}}>My <span style={{color: "#8517FF"}}>Wishlist</span></Typography>
       <Grid container >
            <Grid item xs={3}>
                <Card style={{marginTop: "10px", marginBottom: "10px", borderRadius: "35px"}}>
                    <CardActions style={{display: "block"}}>
                     
                    
                        <CardMedia  className={classes.productimage}  image={brand1} title="Product image" > 
                        <DeleteIcon className={classes.icon} />
                        <FavoriteBorder style={{marginLeft: 230,  marginTop: 10, position: 'absolute'}}></FavoriteBorder>
                        </CardMedia>
                        <CardContent>
                            <Box >
                            <Typography style={{fontSize: "15px"}}>Product name</Typography>
                            <Box style={{display: "flex", flexDirection: "row"}}>
                            <Typography style={{fontSize: "15px"}}>Product description</Typography>
                            <Button className={classes.addtocartbtn} style={{backgroundColor: "black", color: "white",  marginLeft: '40px'}}>Add to Cart</Button>
                            </Box>
                            </Box>
                        </CardContent>
                     
                    </CardActions>
                    
                </Card>
            </Grid>
            <Grid item  xs={3} style={{ marginLeft: "120px"}}>
            <Card style={{marginTop: "10px ",  borderRadius: "35px"}}>
                    <CardActions style={{display: "block"}}>
                     
                    
                        <CardMedia  className={classes.productimage}  image={brand1} title="Product image"  > 
                        <DeleteIcon className={classes.icon} />
                        <FavoriteBorder style={{marginLeft: 230,  marginTop: 10, position: 'absolute'}}></FavoriteBorder>
                        </CardMedia>
                        <CardContent>
                            <Box >
                            <Typography style={{fontSize: "15px"}}>Product name</Typography>
                            <Box style={{display: "flex", flexDirection: "row"}}>
                            <Typography style={{fontSize: "15px"}}>Product description</Typography>
                            <Button className={classes.addtocartbtn} style={{backgroundColor: "black", color: "white",  marginLeft: '40px'}}>Add to Cart</Button>
                            </Box>
                            </Box>
                        </CardContent>
                     
                    </CardActions>
                    
                </Card>
                </Grid>
                <Grid item  xs={3} style={{ marginLeft: "120px"}}>
            <Card style={{marginTop: "10px", marginBottom: "10px",  borderRadius: "35px"}}>
                    <CardActions style={{display: "block"}}>
                     
                    
                        <CardMedia  className={classes.productimage}  image={brand1} title="Product image" > 
                        <DeleteIcon className={classes.icon} />
                        <FavoriteBorder style={{marginLeft: 230,  marginTop: 10, position: 'absolute'}}></FavoriteBorder>
                        </CardMedia>
                        <CardContent>
                            <Box >
                            <Typography style={{fontSize: "15px"}}>Product name</Typography>
                            <Box style={{display: "flex", flexDirection: "row"}}>
                            <Typography style={{fontSize: "15px"}}>Product description</Typography>
                            <Button className={classes.addtocartbtn} style={{backgroundColor: "black", color: "white",  marginLeft: '40px'}}>Add to Cart</Button>
                            </Box>
                            </Box>
                        </CardContent>
                     
                    </CardActions>
                    
                </Card>
                </Grid>
             
       </Grid>
    </Box>
)


 }