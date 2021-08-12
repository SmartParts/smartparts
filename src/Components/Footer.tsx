import React, {useState} from 'react';
import {Box,Typography,Grid,Paper,Divider} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import logo from '../image/logo22.png';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';

const useStyles = makeStyles((theme)=>({

    footer: {
      
        // borderTop: "1px solid ",
        textAlign: "center",
        padding: "20px",


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

}));
export default function Footer(){
    const  classes= useStyles();

    return (
        <Box>
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
        </CardActions>
    </Card>
    <Box>
                    <Card className={classes.countries}>
                        <CardActions>
                        <Grid container justify="space-evenly">
                        <Grid item xs={3} alignItems="center" style={{margin:"150px 0px"}}>
                            <Box className={classes.zoomtext}>
                            <img src="" />
                            <Typography variant="h5" style={{color: "black"}}>Singapore</Typography>
                            <Typography style={{color: "black"}}> Sri Nagar Colony Road, Ashok Vihar Phase 3, Sri Nagar Colony, Sidora Kalan Village, Ashok Vihar, New Delhi, Delhi</Typography>
                        </Box>
                        </Grid>
                        <Grid item xs={3} style={{margin:"150px 0px"}}>
                        <Box className={classes.zoomtext}>
                        <img src="" />
                            <Typography variant="h5" style={{color: "black"}}>India</Typography>
                            <Typography style={{color: "black"}}> Sri Nagar Colony Road, Ashok Vihar Phase 3, Sri Nagar Colony, Sidora Kalan Village, Ashok Vihar, New Delhi, Delhi</Typography>
                            </Box>
                            </Grid>
                            <Grid item xs={3} style={{margin:"150px 0px"}}>
                            <Box className={classes.zoomtext}>
                            <img src="" />
                            <Typography variant="h5" style={{color: "black"}}>Dubai</Typography>
                            <Typography style={{color: "black"}}> Sri Nagar Colony Road, Ashok Vihar Phase 3, Sri Nagar Colony, Sidora Kalan Village, Ashok Vihar, New Delhi, Delhi</Typography>
                            </Box>
                            </Grid>
                    </Grid>
                        </CardActions>
                    </Card>
                   
                </Box>
    <Box className={classes.footer}>
        <Grid container justify="space-evenly">
            <Grid item alignItems="stretch" xs={3}>
                <Box style={{ width: "175px", height: "85px", marginLeft: '35px' }}>
                    <img src={logo} style={{ width: "100%", height: "100%" }} />
                </Box>
                <Box component="span" pt={3}>
                    <Typography variant="h5" align="left" style={{ fontSize: '1.2rem',
                    fontFamily: 'nano-sans'}}>
                        India's biggest online marketplace{" "}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h5" style={{ paddingLeft: "48px",  fontSize: '1.2rem',
       fontFamily: 'nano-sans' }} align="left">
                        for car spare parts
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={1}>
                <Box component="span">
                    <Typography variant="h5" align="left" style={{ fontSize: '15',
       fontFamily: 'nano-sans'}}>
                        
                        About Us
                    </Typography>
                    <Box pt={3} pb={1}>
                        <Typography variant="h6" align="left" style={{ fontSize: '1.1rem',
       fontFamily: 'nano-sans'}}>
                            Contact Us
                        </Typography>
                    </Box>
                    <Box pb={1}>
                        <Typography variant="h6" align="left" style={{ fontSize: '1.1rem',
       fontFamily: 'nano-sans'}}>
                            FAQs
                        </Typography>
                    </Box>
                    <Box pb={1}>
                        <Typography variant="h6" align="left" style={{ fontSize: '1.1rem',
       fontFamily: 'nano-sans'}}>
                            Career
                        </Typography>
                    </Box>
                    <Box pb={1}>
                        <Typography variant="h6" align="left" style={{ fontSize: '1.1rem',
       fontFamily: 'nano-sans'}}>
                            Career
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={1}>
                <Box component="span">
                    <Typography variant="h5" align="left" style={{ fontSize: '1.3rem',
       fontFamily: 'nano-sans'}}>
                        
                        Privacy Policy
                    </Typography>
                    <Box pb={1} pt={3}>
                        <Typography variant="h6" align="left" style={{ fontSize: '1.1rem',
       fontFamily: 'nano-sans'}}>
                            Return Policy
                        </Typography>
                    </Box>
                    <Box pb={1}>
                        <Typography variant="h6" align="left" style={{ fontSize: '1.1rem',
       fontFamily: 'nano-sans'}}>
                            Privacy Policy
                        </Typography>
                    </Box>
                    <Box pb={1}>
                        <Typography variant="h6" align="left" style={{ fontSize: '1.1rem',
       fontFamily: 'nano-sans'}}>
                            Disclaimer
                        </Typography>
                    </Box>
                    <Box pb={1}>
                        <Typography variant="h6" align="left" style={{ fontSize: '1.1rem',
       fontFamily: 'nano-sans'}}>
                            Terms of Use
                        </Typography>
                    </Box>
                    <Box pb={1}>
                        <Typography variant="h6" align="left" style={{ fontSize: '1.1rem',
       fontFamily: 'nano-sans'}}>
                            Buyers Policy
                        </Typography>
                    </Box>
                    <Box pb={1}>
                        <Typography variant="h6" align="left" style={{ fontSize: '1.1rem',
       fontFamily: 'nano-sans'}}>
                            Sellers Policy
                        </Typography>
                    </Box>
                    <Box pb={1}>
                        <Typography variant="h6" align="left" style={{ fontSize: '1.1rem',
       fontFamily: 'nano-sans'}}>
                            Useful Links
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={2}>
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
                    <Box pb={1}>
                        <Typography variant="h6" align="left" style={{ fontSize: '1.1rem',
       fontFamily: 'nano-sans'}}>
                            Site Map2
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </Box>
    </Box>
    )

}