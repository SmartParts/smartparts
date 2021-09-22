import React from 'react';
import {Box,Typography,Grid} from "@material-ui/core";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Link} from 'react-router-dom';
import logo from '../image/logo22.png';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import singaporeimg from '../image/other/Singapore.svg';
import indiaimg from '../image/other/India.svg';
import dubaiimg from '../image/other/Dubai.svg';
import CardMedia from "@material-ui/core/CardMedia";
import googleplay from '../image/home/Google Play.svg';
import appstore from '../image/home/App Store.svg';
import { useMediaQuery } from '@material-ui/core';
import facebookicon from '../image/sociallinks/facebook.png';
import twittericon from '../image/sociallinks/twitter.png';
import youtubeicon from '../image/sociallinks/youtube.png';
import linkedinicon from '../image/sociallinks/linkedin.png';
import instagramicon from '../image/sociallinks/instagram.png';


const useStyles = makeStyles((theme)=>({

    footer: {
      
        // borderTop: "1px solid ",
        textAlign: "center",
        padding: "20px",
        [theme.breakpoints.down("sm")] :{
            fontSize: 12,
        },

      },  
      logoimage: {
        width: "175px",
         height: "85px",
          marginLeft: '35px',
        //   [theme.breakpoints.down("sm")] :{
        // //     width: "55px",
        // //  height: "35px",
        // //   marginLeft: "0px",
        // display: "none",
        // },
      },

      logocontent: {
        paddingLeft: "48px",
          fontSize: '1.2rem',
        fontFamily: 'nano-sans',
        //     [theme.breakpoints.down("sm")]: {
        //     // paddingLeft: "0px",
        //     // fontSize: "1rem"
        //         display: "none",
        // },
      },
      logotext:{
        fontSize: '1.2rem',
        fontFamily: 'nano-sans',
            // [theme.breakpoints.down("sm")]: {
            // // paddingLeft: "0px",
            // // fontSize: "1rem"
            // // },

            // display: "none",
            // },
        },

      footerheadings: {
        fontSize: "15",
        
        fontFamily: 'nano-sans',
        [theme.breakpoints.down("md")] :{ 
            fontSize: "1.3rem",
             },

        [theme.breakpoints.down("sm")] :{ 
            fontSize: "1.3rem",
             },
      },
      hiddenlinksforsmallscreen: {
        [theme.breakpoints.down("sm")] :{ 
        display: "none",
             },
      },
      countries: {
        backgroundColor: 'white',
        borderRadius: "25px",

    },    
      category: {
        margin: "20px",
        height: "20%",
        backgroundColor: "#8517FF",
        padding: "50px",
        borderRadius: "25px",
    },  
    padding: {
        padding: "60px",
    },
    zoomtext: {
        
        transition: "transform 0.15s ease-in-out",
        '&:hover': {
            transform: "scale3d(1.05, 1.05, 1)",
        }
    },
    downloadimages: {
        height: 140,
        width: "15%",

      },
      footercontent:{
        fontSize: '1.1rem',
        fontFamily: 'nano-sans',
        [theme.breakpoints.down("sm")] :{
            fontSize: '0.9rem',
            
        },
      },
      footertext: {
        [theme.breakpoints.down("sm")] :{
          padding: " 4px 0px",

        },
      },
      downloadsection: {
          display: "block",
        [theme.breakpoints.down("sm")] :{
            display: "none",
  
          },
      },
      addresssection: {
        display: "block",
        [theme.breakpoints.down("sm")] :{
            display: "none",
  
          },
      },
      locationone: {
        width: "115px",
         height: "115px", 
        marginLeft: "155px",
        [theme.breakpoints.down("md")]: {
            marginLeft: "100px",
        },
      },
      locationtwo: {
        width: "115px",
         height: "115px", 
        marginLeft: "130px",
        [theme.breakpoints.down("md")]: {
            marginLeft: "70px",
        },
      },
      locationthree: {
        width: "115px", 
        height: "115px", 
        marginLeft: "130px",
        [theme.breakpoints.down("md")]: {
            marginLeft: "70px",
        },
      },

}));
export default function Footer(){
    const  classes= useStyles();
    const theme = useTheme();
    const issmallscreen = useMediaQuery(theme.breakpoints.down("sm"));

    const youtubeClick = () => {
        window.location.assign('https://www.youtube.com/channel/UCbhzF_ASa4zUSqaM__tbMHQ');
    }

    const instagramClick = () => {
        window.location.assign('https://www.instagram.com/smartpartsexports/');
    }
    const facebookClick = () => {
        window.location.assign('https://www.facebook.com/smartpartsexports');
    }
    const linkedinClick = () => {
        window.location.assign('https://www.linkedin.com/company/14630168/admin/');
    }
    const twitterClick = () => {
        window.location.assign('https://twitter.com/SmartParts4');
    }
    return (
        <Box >
    <Box className={classes.addresssection}>
                    <Card className={classes.countries}>
                        <CardActions>
                            <Box style={{display: "flex", flexDirection:"row"}}>
                         <Typography align="center" variant="h5"><strong>Our Branches</strong></Typography>
                        </Box>
                        <Grid container justify="space-evenly">
                        <Grid item xs={3} alignItems="center" style={{margin:"90px 0px"}}>
                        <Box className={classes.locationone} >
                            <img src={singaporeimg} width="100%" height="100%" alt="Singapore" />
                            </Box>
                            <Box className={classes.zoomtext}>

                            <Typography variant="h5" style={{color: "black"}} align="center">Singapore</Typography>
                            {/* <Typography style={{color: "black"}} align="center"> Sri Nagar Colony Road, Ashok Vihar Phase 3, Sri Nagar Colony, Sidora Kalan Village, Ashok Vihar, New Delhi, Delhi</Typography> */}
                        </Box>
                        </Grid>
                        <Grid item xs={3} style={{margin:"90px 0px"}}>
                        <Box className={classes.locationtwo} >
                            <img src={indiaimg} width="100%" height="100%" alt="India" />
                            </Box>
                        <Box className={classes.zoomtext}>

                            <Typography variant="h5" style={{color: "black"}} align="center">India</Typography>
                            {/* <Typography style={{color: "black"}} align="center"> Sri Nagar Colony Road, Ashok Vihar Phase 3, Sri Nagar Colony, Sidora Kalan Village, Ashok Vihar, New Delhi, Delhi</Typography> */}
                            </Box>
                            </Grid>

                            <Grid item xs={3} style={{margin:"90px 0px"}}>
                            <Box className={classes.locationthree} >
                            <img src={dubaiimg} width="100%" height="100%" alt="Dubai"/>
                            </Box>
                            <Box className={classes.zoomtext}>
                            
                            <Typography variant="h5" style={{color: "black"}} align="center">Dubai</Typography>
                            {/* <Typography style={{color: "black"}} align="center"> Sri Nagar Colony Road, Ashok Vihar Phase 3, Sri Nagar Colony, Sidora Kalan Village, Ashok Vihar, New Delhi, Delhi</Typography> */}
                            </Box>
                            </Grid>
                    </Grid>
                        </CardActions>
                    </Card>
                   
                </Box>
  
  
            <Box className={classes.downloadsection}>
        <Card className={classes.category}>
        <CardActions>
        
        <Typography variant="h4" style={{ color: "white",  fontSize: '15',
       fontFamily: 'nano-sans' }} className={classes.padding}>
            Download
            <Box>Our Mobile App</Box>
            <Typography variant="h6" style={{ color: "white",  fontSize: '15',
       fontFamily: 'nano-sans', }}>
                And get the full smart parts experience in one go
            </Typography>
        </Typography>
        
        <CardMedia className={classes.downloadimages} image={appstore}/> 
        <CardMedia className={classes.downloadimages} image={googleplay}/>
      
        </CardActions>
    </Card>
    </Box>
  

{issmallscreen ? 

<Box className={classes.footer}>
<Grid container justify="space-evenly">
    
<Grid item xs={5}>
                <Box component="span">
                    <Typography variant="h5" align="left" className={classes.footerheadings}>
                        
                        About Us
                    </Typography>
                    <Box pt={3} pb={1} className={classes.footertext}>
                        <Typography variant="h6" align="left" color="textSecondary" className={classes.footercontent} >
                            Contact Us
                        </Typography>
                    </Box>
                    <Box pb={1} className={classes.footertext}>
                        <Typography variant="h6" align="left" color="textSecondary" className={classes.footercontent} >
                            FAQs
                        </Typography>
                    </Box>
                    <Box pb={1} className={classes.footertext}>
                        <Typography variant="h6" align="left" color="textSecondary" className={classes.footercontent} >
                            Career
                        </Typography>
                    </Box>

                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box component="span">
                    <Typography variant="h5" align="left" className={classes.footerheadings}>
                        
                        Privacy Policy
                    </Typography>
                    <Box pb={1} pt={3} className={classes.footertext}>
                        <Typography variant="h6" align="left" color="textSecondary" className={classes.footercontent} >
                            Return Policy
                        </Typography>
                    </Box>
                    <Box pb={1} className={classes.footertext}>
                    <Link to="/privacypolicy"><Typography variant="h6" align="left" color="textSecondary" className={classes.footercontent} >
                          Privacy Policy
                        </Typography></Link>
                    </Box>
                    <Box pb={1} className={classes.footertext}>
                        <Typography variant="h6" align="left" color="textSecondary" className={classes.footercontent} >
                            Disclaimer
                        </Typography>
                    </Box>
                    <Box pb={1} className={classes.footertext}>
                    <Link to="/termsofuse"> <Typography variant="h6" align="left" color="textSecondary"  className={classes.footercontent} >
                            Terms of Use
                        </Typography></Link>
                    </Box>
                    <Box pb={1} className={classes.footertext}>
                        <Typography variant="h6" align="left" color="textSecondary" className={classes.footercontent} >
                            Buyers Policy
                        </Typography>
                    </Box>
                    <Box pb={1} className={classes.footertext}>
                        <Typography variant="h6" align="left" color="textSecondary" className={classes.footercontent} >
                            Sellers Policy
                        </Typography>
                    </Box>
                    <Box pb={1} className={classes.footertext}>
                        <Typography variant="h6" align="left" color="textSecondary" className={classes.footercontent} >
                            Useful Links
                        </Typography>
                    </Box>
                </Box>
            </Grid> </Grid>
            </Box> : 
    <Box className={classes.footer}>
        <Grid container justify="space-evenly">
            <Grid item alignItems="stretch" xs={3}>
                <Box className={classes.logoimage} >
                    <img src={logo} style={{ width: "100%", height: "100%" }} alt="logo" />
                </Box>
                <Box component="span" pt={3}>
                    <Typography variant="h5" align="left" className={classes.logotext}>
                        India's biggest online marketplace{" "}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h5" className={classes.logocontent}  align="left">
                        for car spare parts
                    </Typography>
                </Box>
                <Box>
                    <Box style={{display: "flex", flexDirection: "row", marginTop: "100px", marginLeft: "48px"}}>
                      
                        <Box style={{width: "30px", height: "30px"}}>
                    
                    <img src={youtubeicon} onClick={youtubeClick} style={{ width: "100%", height: "100%"}} alt="youtube" />
                
                    </Box>
                    <Box style={{width: "30px", height: "30px"}}>
                    
                    <img src={facebookicon} onClick={facebookClick} style={{ width: "100%", height: "100%"}} alt="facebook" />
                    
                    </Box>
                    <Box style={{width: "30px", height: "30px"}}>
                    
                    <img src={twittericon} onClick={twitterClick} style={{ width: "100%", height: "100%"}} alt="twitter" />
                    
                    </Box>
                    <Box style={{width: "30px", height: "30px"}}>
                    
                    <img src={instagramicon} onClick={instagramClick} style={{ width: "100%", height: "100%"}} alt="instagram" />
                    
                    </Box>
                    <Box style={{width: "30px", height: "30px"}}>
                    
                    <img src={linkedinicon} onClick={linkedinClick} style={{ width: "100%", height: "100%"}} alt="linkedin" />
                    
                    </Box>
                    </Box>
                    <Typography style={{marginLeft: "5px",   marginTop: "10px"}}>Follow Us</Typography>
                </Box>
            </Grid>
            <Grid item xs={2}>
                <Box component="span">
                    <Typography variant="h5" align="left" className={classes.footerheadings}>
                        
                        About Us
                    </Typography>
                    <Box pt={3} pb={1} className={classes.footertext}>
                        <Typography variant="h6" align="left" className={classes.footercontent} >
                            Contact Us
                        </Typography>
                    </Box>
                    <Box pb={1} className={classes.footertext}>
                        <Typography variant="h6" align="left" className={classes.footercontent} >
                            FAQs
                        </Typography>
                    </Box>
                    <Box pb={1} className={classes.footertext}>
                        <Typography variant="h6" align="left" className={classes.footercontent} >
                            Career
                        </Typography>
                    </Box>
                  
                </Box>
            </Grid>
            <Grid item xs={2}>
                <Box component="span">
                <Link to="/privacypolicy"><Typography variant="h5" align="left" className={classes.footerheadings}>
                        
                        Privacy Policy
                    </Typography></Link>
                    <Box pb={1} pt={3} className={classes.footertext}>
                        <Typography variant="h6" align="left" className={classes.footercontent} >
                            Return Policy
                        </Typography>
                    </Box>
                    <Box pb={1} className={classes.footertext}>
                    <Link to="/privacypolicy">    <Typography variant="h6" align="left" className={classes.footercontent} >
                            Privacy Policy
                        </Typography></Link>
                    </Box>
                    <Box pb={1} className={classes.footertext}>
                        <Typography variant="h6" align="left" className={classes.footercontent} >
                            Disclaimer
                        </Typography>
                    </Box>
                    <Box pb={1} className={classes.footertext}>
                    <Link to="/termsofuse"><Typography variant="h6" align="left" className={classes.footercontent} >
                            Terms of Use
                        </Typography></Link>
                    </Box>
                    <Box pb={1} className={classes.footertext}>
                        <Typography variant="h6" align="left" className={classes.footercontent} >
                            Buyers Policy
                        </Typography>
                    </Box>
                    <Box pb={1} className={classes.footertext}>
                        <Typography variant="h6" align="left" className={classes.footercontent} >
                            Sellers Policy
                        </Typography>
                    </Box>
                    <Box pb={1} className={classes.footertext}>
                        <Typography variant="h6" align="left" className={classes.footercontent} >
                            Useful Links
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={2} className={classes.hiddenlinksforsmallscreen} >
                <Box component="span">
                    <Typography variant="h5" align="left" style={{ fontSize: '12',
       fontFamily: 'nano-sans'}}>
                        
                        Useful Links
                    </Typography>
                    <Box pb={1} pt={3}>
                        <Typography variant="h6" align="left" style={{ fontSize: '1.1rem',
       fontFamily: 'nano-sans'}}>
                            Articles
                        </Typography>
                    </Box>
                    <Box pb={1}>
                        <Typography variant="h6" align="left" style={{ fontSize: '1.1rem',
       fontFamily: 'nano-sans'}}>
                            Brands
                        </Typography>
                    </Box>
                    <Box pb={1}>
                        <Typography variant="h6" align="left" style={{ fontSize: '1.1rem',
       fontFamily: 'nano-sans'}}>
                            Catalogue
                        </Typography>
                    </Box>
                    <Box pb={1}>
                        <Typography variant="h6" align="left" style={{ fontSize: '1.1rem',
       fontFamily: 'nano-sans'}}>
                            Car Makers
                        </Typography>
                    </Box>
                    <Box pb={1}>
                        <Typography variant="h6" align="left" style={{ fontSize: '1.1rem',
       fontFamily: 'nano-sans'}}>
                            Site Map
                        </Typography>
                    </Box>
                    
                </Box>
            </Grid>
        </Grid>
    </Box> }
    </Box>
    )

}