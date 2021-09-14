import React from 'react';
import {Box,Typography,Grid} from "@material-ui/core";
import Navbar from './Navbar';
import Footer from './Footer'; 
import {Link} from 'react-router-dom';
// import profile from '../image/profile.svg'; 
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ShoppingCart from '@material-ui/icons/ShoppingCartOutlined';
import MyprofileIcon from '@material-ui/icons/Person';
import LocationIcon from '@material-ui/icons/PinDrop';
import List from '@material-ui/icons/ListAlt';
import Credit from '@material-ui/icons/CreditCard';
import LinearProgress from '@material-ui/core/LinearProgress';
import PropTypes from 'prop-types';
function LinearProgressWithLabel(props) {
    return (
      <Box display="flex" alignItems="center">
        <Box width="100%" mr={1}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box minWidth={35}>
          <Typography variant="body2" color="textSecondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }
  
  LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
  };

  const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 2,
      borderRadius: 5,
      
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      width: "201%",
      borderRadius: 5,
      backgroundColor: '#1a90ff',
    },
  }))(LinearProgress);
const useStyles = makeStyles((theme)=>({
    imagessteps: {
    backgroundColor: theme.palette.grey[50],
    border: `1px solid ${theme.palette.info.main}`,
    color: theme.palette.info.main,
    width: "80px",
    height: "80px",
    marginRight: "50px",
  },

  remainingsteps:{
    backgroundColor: theme.palette.grey[50],
    border: `1px solid ${theme.palette.info.main}`,
    color: theme.palette.info.main,
    width: "80px",
    height: "80px",

  },
  prgrsbar: {
      width: "100%",
  },
}));
export default function Shoppingcart() {
    const classes = useStyles();
    const [progress, setProgress] = React.useState(10);

    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
        // console.log(progress);
      }, 800);
      return () => {
        clearInterval(timer);
      };
      
    }, [progress]);
    return(
        <Box>
         <Navbar />
         <Box>
            <Box style={{width: "100%", height: "200px", marginTop: "66px"}} bgcolor="white" >
                <Grid container style={{padding: "50px"}}>
                
                    <Grid item xs={2}  style={{display: "flex"}} justify="flex-end" >
                   
                    <Avatar className={classes.remainingsteps}>

                    <ShoppingCart fontSize="large"/>
                    </Avatar>
                  
                    
                   
                    </Grid>
                     <Grid item xs={1}>
                    <Box style={{marginTop: "35px", width: "300px"}}>
                    {/* <LinearProgress   value={progress} /> */}
                    <BorderLinearProgress variant="determinate" value={50} />
                     </Box>
                     </Grid> 
                     
                    <Grid item xs={1}  style={{display: "flex"}} justify="flex-start">
                  <Avatar className={classes.remainingsteps}>

                    <MyprofileIcon fontSize="large"/>
                    </Avatar>
                    </Grid>
                    <Grid item xs={1}>
                    <Box style={{marginTop: "35px", width: "300px"}}>
                    {/* <LinearProgress   value={progress} /> */}
                    <BorderLinearProgress variant="determinate" value={50} />
                     </Box>
                     </Grid> 
                    <Grid item xs={1}  style={{display: "flex"}} justify="flex-start">
                 <Avatar className={classes.remainingsteps}>

                    <LocationIcon fontSize="large"/>
                    </Avatar>
                    </Grid>
                    <Grid item xs={1}>
                    <Box style={{marginTop: "35px", width: "350px"}}>
                    {/* <LinearProgress   value={progress} /> */}
                    <BorderLinearProgress variant="determinate" value={50} />
                     </Box>
                     </Grid> 
                    <Grid item xs={1}  style={{display: "flex"}} justify="flex-start">
                    <Avatar className={classes.remainingsteps}>

                    <List fontSize="large"/>
                    </Avatar>
                    </Grid>
                    <Grid item xs={1}>
                    <Box style={{marginTop: "35px", width: "100px"}}>
                    {/* <LinearProgress   value={progress} /> */}
                    <BorderLinearProgress variant="determinate" value={50} />
                     </Box>
                     </Grid> 
                    <Grid item xs={1}  style={{display: "flex"}} justify="flex-end">
                    <Avatar className={classes.imagessteps}>

                    <Credit fontSize="large"/>
                    </Avatar>
                    </Grid>
 
  
                </Grid>
            </Box>
            <Box style={{marginLeft: "20px"}}>
             <Typography style={{marginBottom: "10px"}}>
                 Shopping cart is empty
             </Typography>
             <Link to="/productlist"> 
             <Button variant="outlined">
                 Continue shopping
             </Button>
             </Link>
             </Box>
         </Box>
        <Footer />
        </Box>
    )
}