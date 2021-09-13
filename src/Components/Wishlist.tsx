import React ,{useState} from 'react';
import {Box,Typography,Grid} from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import { CardMedia, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FavoriteBorder } from '@material-ui/icons';
import brand1 from "../image/home/HYUNDAI OIL.jpg";
import brand2 from "../image/home/Front Pad Set.jpg";
import brand3 from "../image/home/SUZUKI AIR FILTER.jpg";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import ReorderIcon from '@material-ui/icons/Reorder';
import AppsIcon from '@material-ui/icons/Apps';
const useStyles = makeStyles((theme) =>({
productimage: {
    height: 220,
    margin: "10px",
},
// addtocartbttn: {
//     width: "10%",
// },
listviewimage: {
    height: 160,
    width: "20%",
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
  const [reorderlist, setReorderList] = useState(false);
 const reorderlistbtnClicked =() => {
    setReorderList(true);

  }
  const listview = () => {
      setReorderList(false);
  }

return(
    <Box style={{marginTop: "60px", marginLeft: "120px"}}>
       
       <Box style={{display: "flex", flexDirection: "row"}}>

           <Grid container>
          
               <Grid item xs={10}>
                <Typography variant="h4" style={{padding: '20px'}}>My <span style={{color: "#8517FF"}}>Wishlist</span></Typography>
        
        </Grid>
        <Grid item xs={2}>
        <ReorderIcon fontSize="large" onClick={listview} style={{ marginLeft: "50px", marginTop: "30px"}}></ReorderIcon>
        <AppsIcon onClick={reorderlistbtnClicked} fontSize="large"></AppsIcon>
        </Grid>
        </Grid>
        </Box>
        
        {reorderlist ? 
       
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
                            <Typography style={{fontSize: "15px"}}>HUNDAI OIL</Typography>
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
                     
                    
                        <CardMedia  className={classes.productimage}  image={brand2} title="Product image"  > 
                        <DeleteIcon className={classes.icon} />
                        <FavoriteBorder style={{marginLeft: 230,  marginTop: 10, position: 'absolute'}}></FavoriteBorder>
                        </CardMedia>
                        <CardContent>
                            <Box >
                            <Typography style={{fontSize: "15px"}}>FRONT PAD SET</Typography>
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
                     
                    
                        <CardMedia  className={classes.productimage}  image={brand3} title="Product image" > 
                        <DeleteIcon className={classes.icon} />
                        <FavoriteBorder style={{marginLeft: 230,  marginTop: 10, position: 'absolute'}}></FavoriteBorder>
                        </CardMedia>
                        <CardContent>
                            <Box >
                            <Typography style={{fontSize: "15px"}}>SUZUKI AIR FILTER</Typography>
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
       : 
  <Grid container>
      <Grid item xs={11}>
        <Card >
            <CardActions>
                <CardMedia image={brand1} className={classes.listviewimage}  />
                    
                
                <CardContent>
                <Box style={{display: "flex", flexDirection: "row"}}>
                    
                <Grid container >
                    <Grid item xs={9} style={{width: "900px"}}>
                    <Typography variant="h5" style={{marginTop: "20px"}}><strong>HYUNDAI OIL</strong></Typography>
                    <Typography>Number</Typography>
                    </Grid>
                    <Box style={{marginTop: "40px"}}>
                    <Button variant="outlined"  style={{backgroundColor: "black", color: "white" }}>Add to Cart</Button> 
                    </Box>
                    <Box style={{display: "flex", justifyContent: "flex-end" ,flexDirection: "column"}}>
                    <FavoriteBorder fontSize="large" style={{marginBottom: "50px", marginLeft: "45px"}}></FavoriteBorder>
                    <DeleteIcon fontSize="large" style={{marginLeft: "45px"}}></DeleteIcon>
                    </Box>
                    
                    </Grid>
                    </Box>
                    
                </CardContent>
            </CardActions>
            </Card>   
      </Grid>
      <Grid item xs={12}>
          
          </Grid>
          <Grid item xs={12}>
          
          </Grid>
  </Grid>}
    </Box>
)


 }