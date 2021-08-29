import React from 'react';
import {Box, Button, Typography} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import product1 from "../image/products/productimage.png";
// import { classes } from 'istanbul-lib-coverage';
import { makeStyles } from '@material-ui/core/styles';
import { FavoriteBorder } from '@material-ui/icons';
import brand1 from "../image/brand1.png";

const useStyle = makeStyles((theme) => ({

productimage: {
height: 370,
width: "100%",

},
relatedproductimg: {
height: 140,
},
paginatn: {
    '& > *': {
      marginTop: theme.spacing(2),
      marginLeft: "380px",
    },
  },
}));


export default function ProductItem() {
const classes = useStyle();
return(
    <Box style={{marginTop: "66px"}}>
        <Grid container>
            <Grid item xs={2}>

            </Grid>
            <Grid item xs={3}>
            <Card style={{marginTop: "60px"}}>
            <CardActions style={{display: "flex", flexDirection: "row"}}>
                <CardMedia className={classes.productimage} image={product1} title="Product Image" />
                </CardActions>
            </Card>
                        
                </Grid>
                <Grid item xs={4}>
                <Box style={{marginTop: "60px"}}>
                    <Typography style={{paddingLeft: "25px", margin: "10px 0px"}}>Valeo</Typography>
                    <Typography variant="h6" style={{paddingLeft: "25px", margin: "10px 0px"}}>Air Filter</Typography>
                    <Box style={{display: "flex", flexDirection: "row"}}>
                    <Typography style={{paddingLeft: "25px", margin: "10px 0px", fontSize: 12}} color="textSecondary">Sold by </Typography><Typography style={{paddingLeft: "5px", fontSize: 12, margin: "10px 0px"}} component="p">AVI</Typography>
                    </Box>
                 <Box style={{display: "flex", flexDirection: "row"}}>
                    <Typography variant="h6" style={{paddingLeft: "25px", margin: "10px 0px"}}>Price</Typography>
                    {/* <Button style={{padding: "0px"}}>Unlock Premium</Button> */}
                   </Box>
                    <Typography variant="h6" style={{paddingLeft: "25px", margin: "10px 0px"}}>Quantity</Typography>  
                    {/* Incrementor */}
                    <Box style={{display: "flex", flexDirection: "row", margin: "10px 0px"}}>
                    <Typography style={{paddingLeft: "25px",  fontSize: 12}} color="textSecondary">Product Number</Typography>
                    <Typography style={{marginLeft: " 30px",  fontSize: 12}} color="textSecondary"> Origin</Typography>
                    <Typography style={{marginLeft: " 50px",  fontSize: 12}} color="textSecondary">Class</Typography>
                    </Box>
                    <Box style={{display: "flex", flexDirection: "row", margin: "10px 0px"}}>
                    <Typography style={{paddingLeft: "25px",  fontSize: 12}} >58991</Typography>
                    <Typography style={{marginLeft: " 80px",  fontSize: 12}} > AfterMarket</Typography>
                    <Typography style={{marginLeft: " 20px",  fontSize: 12}} >Air Filter</Typography>
                    </Box>
                    <Typography variant="h6" style={{paddingLeft: "25px"}}>Description</Typography>
                    <Typography style={{ paddingLeft: "25px",fontSize: 12}}>Air Filter for Chevrolet 1st gen 585991 VALEO</Typography>
                    <Button style={{margin: "25px", width: "45%"}}>Add to Cart</Button>
                    <Button style={{width: "45%"}}>Buy Now</Button>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                
                </Grid>
            </Grid>

        <Box>
            <Typography variant="h5" style={{marginLeft: "45px", margin: "25px"}}>Products Related to this item</Typography>
            <Grid container>

                <Grid item xs={2} style={{marginLeft: "30px"}}>
                <Card style={{margin: "10px 10px"}}>

<CardActions style={{display: "block"}}>

    <CardMedia className={classes.relatedproductimg}   image={brand1} title="Product image" > 

    <FavoriteBorder style={{marginLeft: 170,  marginTop: 10, position: 'absolute'}}></FavoriteBorder>
    </CardMedia>

    <CardContent>
        <Box>
        <Typography>Product name</Typography>
        <Box style={{display: "flex", flexDirection: "row"}}>
        <Typography>Product description</Typography>
        {/* <Button style={{backgroundColor: "black", color: "white",  marginLeft: '40px'}}>Add to Cart</Button> */}
        </Box>
        </Box>
    </CardContent>
 
</CardActions>

</Card>
                </Grid>
                <Grid item xs={2} style={{margin: "0px 25px"}}>
                <Card style={{margin: "10px 10px"}}>

<CardActions style={{display: "block"}}>
 

    <CardMedia  className={classes.relatedproductimg}  image={brand1} title="Product image" > 
    
    <FavoriteBorder style={{marginLeft: 170,  marginTop: 10, position: 'absolute'}}></FavoriteBorder>
    </CardMedia>
    <CardContent>
        <Box>
        <Typography>Product name</Typography>
        <Box style={{display: "flex", flexDirection: "row"}}>
        <Typography>Product description</Typography>
        {/* <Button style={{backgroundColor: "black", color: "white",  marginLeft: '40px'}}>Add to Cart</Button> */}
        </Box>
        </Box>
    </CardContent>
 
</CardActions>

</Card>
                </Grid>
                <Grid item xs={2} style={{margin: "0px 25px"}}>
                <Card style={{margin: "10px 10px"}}>

<CardActions style={{display: "block"}}>
 

    <CardMedia  className={classes.relatedproductimg}  image={brand1} title="Product image" > 
    
    <FavoriteBorder style={{marginLeft: 170,  marginTop: 10, position: 'absolute'}}></FavoriteBorder>
    </CardMedia>
    <CardContent>
        <Box>
        <Typography>Product name</Typography>
        <Box style={{display: "flex", flexDirection: "row"}}>
        <Typography>Product description</Typography>
        {/* <Button style={{backgroundColor: "black", color: "white",  marginLeft: '40px'}}>Add to Cart</Button> */}
        </Box>
        </Box>
    </CardContent>
 
</CardActions>

</Card>
                </Grid>
                <Grid item xs={2} style={{margin: "0px 25px"}}>
                <Card style={{margin: "10px 10px"}}>

<CardActions style={{display: "block"}}>
 

    <CardMedia  className={classes.relatedproductimg}  image={brand1} title="Product image" > 
    
    <FavoriteBorder style={{marginLeft: 170,  marginTop: 10, position: 'absolute'}}></FavoriteBorder>
    </CardMedia>
    <CardContent>
        <Box>
        <Typography>Product name</Typography>
        <Box style={{display: "flex", flexDirection: "row"}}>
        <Typography>Product description</Typography>
        {/* <Button style={{backgroundColor: "black", color: "white",  marginLeft: '40px'}}>Add to Cart</Button> */}
        </Box>
        </Box>
    </CardContent>
 
</CardActions>

</Card>
                </Grid>
                <Grid item xs={2} style={{margin: "0px 25px"}}>
                <Card style={{margin: "10px 10px"}}>

<CardActions style={{display: "block"}}>
 

    <CardMedia  className={classes.relatedproductimg}  image={brand1} title="Product image" > 
    
    <FavoriteBorder style={{marginLeft: 170,  marginTop: 10, position: 'absolute'}}></FavoriteBorder>
    </CardMedia>
    <CardContent>
        <Box>
        <Typography>Product name</Typography>
        <Box style={{display: "flex", flexDirection: "row"}}>
        <Typography>Product description</Typography>
        {/* <Button style={{backgroundColor: "black", color: "white",  marginLeft: '40px'}}>Add to Cart</Button> */}
        </Box>
        </Box>
    </CardContent>
 
</CardActions>

</Card>
                </Grid>
                
            </Grid>
        </Box>
        <Box className={classes.paginatn}>
        <Pagination count={10} variant="outlined" shape="rounded" />
        </Box>
    </Box>
)

}