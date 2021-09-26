import React from 'react';
import { useEffect} from 'react';
import {Box,Typography,Grid} from "@material-ui/core";
// import CardActions from "@material-ui/core/CardActions";
// import Card from "@material-ui/core/Card";
// import { CardMedia, CardContent } from '@material-ui/core';
import { makeStyles , withStyles} from '@material-ui/core/styles';
// import { FavoriteBorder } from '@material-ui/icons';
// import suzukipartone from '../../image/brands/Air Filter.jpg';
// import suzukiparttwo from '../image/brands/CLUTCH SETDISC & COVER.jpg';
// import suzukipartthree from '../image/brands/STRUT ASSY FRT SUSPENSION RH.jpg';
// import suzukipartfour from '../image/home/SUZUKI AIR FILTER.jpg';
// import DeleteIcon from '@material-ui/icons/Delete';
// import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
// import InputLabel from '@material-ui/core/InputLabel';
import productbanner from '../../image/brands_banner/chevrolet.jpg';
import Pagination from '@material-ui/lab/Pagination';
import SingleProduct from './SingleProduct';
const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 8,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      marginRight: "8px",
      fontSize: 16,

      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);
const useStyles = makeStyles((theme) =>({
productimage: {
    height: 140,
},
icon: {
    margin: 10,
    fontSize: 32,
  },
  size: {
      transform: "scale(0.8)",
  },
  selectionbox: {
    margin: theme.spacing(1),
    width: "265px",

  },
  page: {
    '& > *': {
      marginTop: theme.spacing(2),
      marginLeft: "380px",
    },
  },
}));



// const addToCart = async(e) => {            //useEffect

// const res = await fetch("https://smart-parts.herokuapp.com/products/vehicle/chevrolet", {  //https://smart-parts.herokuapp.com/logout     //proxy:  { "/products/vehicle/**": { "target": "https://smart-parts.herokuapp.com", "secure": false }  },

//     method: "GET",
//    headers: {
//     "Content-Type": "application/json",
  
//    },
  


//   })
//   console.log(res);
//   const data = await res.json();
//   console.log(data);
// }
export default function Chevrolet() {
    
const [products, setProducts] = React.useState(null);
    const [age, setAge] = React.useState('');
    const vehicleSelect = (event) => {
      setAge(event.target.value);
    };
    
    // const res = await fetch("/vehicle/chevrolet", {  //https://smart-parts.herokuapp.com/logout
    //     method: "GET",
    //    headers: {
    //     "Content-Type": "application/json",
      
    //    },
      
       
    
    //   })
    // console.log(res);
    // }
    const classes = useStyles();
    useEffect(() => {

        fetch('https://smart-parts.herokuapp.com/products/vehicle/chevrolet')
        .then(res =>{
            return res.json();
        })
        .then(data => {
            setProducts(data);
            console.log(products);
        });
    },[]);
    return(
    <Grid container >
        <Grid container item xs={3} style={{marginTop: "60px", maxWidth: "18%", display: "block",  backgroundColor: "#141A26",height: "690px", color: "white"}}>
        <Box style={{ marginLeft: "5px", marginTop: "25px"}}>
        <Typography variant="h6">Maintenance Service Parts </Typography>
    
        <Box style={{display: "flex", flexDirection: "row", marginTop: "15px"}}>
        <Typography variant="h5">Filter</Typography>
        <Typography variant="h5" style={{marginLeft: "140px"}}>Reset</Typography> 
        </Box>
        
        <Typography style={{marginTop: "15px"}}>Origin</Typography>
        <Box style={{display: "flex", flexDirection: "row"}}>
        <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        className={classes.size}
      />
      <Typography component="p" style={{fontSize: "13px", marginTop: "12px"}}>After Market</Typography>
      </Box>
      
      
      <Box style={{display: "flex", flexDirection: "row"}}>
        <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        className={classes.size}        
      />
      
      <Typography component="p" style={{fontSize: "13px", marginTop: "12px"}}>Oem</Typography>
      </Box>
      <Box style={{display: "flex", flexDirection: "row"}}>
        
      <Typography>Vehicle</Typography>
      </Box>
     
      <FormControl className={classes.selectionbox}>
        {/* <InputLabel htmlFor="demo-customized-select-native">Age</InputLabel> */}
        <NativeSelect
          id="demo-customized-select-native"
          value={age}
          onChange={vehicleSelect}
          input={<BootstrapInput />}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl>
      
      <Typography>Brands</Typography> 
      <Box style={{display: "flex", flexDirection: "row"}}>
        <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        className={classes.size}
      />
      <Typography component="p" style={{fontSize: "13px", marginTop: "12px"}}>Suzuki</Typography>
      </Box>
      
      
      <Box style={{display: "flex", flexDirection: "row"}}>
        <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        className={classes.size}        
      />
      
      <Typography component="p" style={{fontSize: "13px", marginTop: "12px"}}>Hyundai</Typography>
      </Box>
      {/* // 30 */}
      <Typography>Class</Typography>
      <Box style={{display: "flex", flexDirection: "row"}}>
        <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        className={classes.size}
      />
      <Typography component="p" style={{fontSize: "13px", marginTop: "12px"}}>Air/Electrical Horn</Typography>
      </Box>
      
      
      <Box style={{display: "flex", flexDirection: "row"}}>
        <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        className={classes.size}        
      />
      
      <Typography component="p" style={{fontSize: "13px", marginTop: "12px"}}>Air Filter</Typography>
      </Box>
      <Typography>Category</Typography>
      <Typography style={{margin: "5px 0px"}}>Maintenance Service Parts </Typography>
      <Typography>Air Conditioning</Typography>
      <Typography>Belts Chains and Rollers</Typography>
      <Typography>Body</Typography>
      <Typography>Break Sytem</Typography>
      </Box>
        </Grid>


    
    <Grid container item xs={11} style={{marginTop: "60px", maxWidth: "82%" }}>
    
       <Grid container  >
       <Grid item>
         <Box >
          <img src={productbanner} width="100%" height="100%" alt="product" />
          </Box>
         </Grid>
            {/*  */}
            <Grid item xs={3} style={{marginLeft: "20px"}}>
            <Box>
                { <SingleProduct products={products} />}
            </Box>

                  </Grid>
       </Grid>
       <Box className={classes.page}>
       <Pagination count={10} variant="outlined" shape="rounded" />
       </Box>
       </Grid>
        </Grid>
)


 }