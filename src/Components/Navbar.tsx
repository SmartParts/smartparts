import React, { Fragment,useState } from 'react';
import {Menu,MenuItem,AppBar,Typography,Toolbar,Button,IconButton,Switch} from "@material-ui/core";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
 import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import {UserAgentApplication} from 'msal';
import {config} from'../config';
import Box from '@material-ui/core/Box';
// import { MailOutline } from '@material-ui/icons';
import { FavoriteBorder } from '@material-ui/icons';
import { PersonOutline } from '@material-ui/icons';
import logo from '../image/logo22.png';
// import { createMuiTheme } from '@material-ui/core';
// import { green } from '@material-ui/core/colors';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Search';
import CartIcon from '@material-ui/icons/ShoppingCart';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Infoicon from '@material-ui/icons/Info';
// import Phoneicon from '@material-ui/icons/Phone';
// import Personicon from '@material-ui/icons/Person';
// import Helpicon from '@material-ui/icons/Help';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Lock from '@material-ui/icons/Lock';
import Language from '@material-ui/icons/Language';
import SettingsIcon from '@material-ui/icons/Settings';
import FavoriteIcon from '@material-ui/icons/Favorite';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
// import Helpsupport from './Helpsupport';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
const drawerWidth = 240;
const useStyles = makeStyles((theme) =>({
    sectionDesktop: {
      display: "none",
        [theme.breakpoints.up("sm")] :{
            display:"flex"
        },

    },
    hideIcon:{
        [theme.breakpoints.up("xs")]:{
            display:"block"
        }
    },
    hyperlinksignup: {
      textDecoration: "none", 
      color: "black",
      '&:hover': {
    color: "white"},
    },
    hyperlinklogin: {
      textDecoration: "none", 
      color: "black",
      '&:hover': {
    color: "white"},
    },
    hideIconsignup: {
      backgroundColor: "white",
      color: "black",
      '&:hover': {backgroundColor: "#8517FF",
  },
      [theme.breakpoints.up("xs")]:{
        display:"block"
    }
    },
    hideIconlogin: {
      backgroundColor: "white",
      color: "black",
      '&:hover': {backgroundColor: "#8517FF",
  },
      [theme.breakpoints.up("xs")]:{
        display:"block"
    }
    },
    root:{
        backgroundColor:theme.palette.type=='dark'?'black':'white',
        color:theme.palette.text.primary, 

    },
    myprofilebar: {
      backgroundColor:theme.palette.type=='dark'?'black':'white',
      color:theme.palette.text.primary, 
    },
     searchbar: {
         width: "30%",
         alignItems: 'center'
     },
     menuButton: {
         marginRight: theme.spacing(2),
       },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
      },
      helpsupport: {
        position: 'absolute',
        width: 900,
        marginBottom: "90px",
         backgroundColor: "white",
        border: '2px solid #000',
        // boxShadow: theme.shadows[5],
        // padding: theme.spacing(2, 4, 3),
        
      },
      feedbackbtn: {
        backgroundColor: "#8517FF",
        color: "#ffff",
    },
      
}))


export default function Navbar(props) {
    const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null);
    const classes = useStyles();
    const theme = useTheme();

const [myprofilescreen, setMyProfielScreen] = React.useState(true);

    
  //  const isMatch = theme.breakpoints.down("md");
    
    const isMobileMenuOpen = Boolean(mobileMenuAnchorEl);

    // const openMobileMenu = (event) =>{
    //     setMobileMenuAnchorEl(event.currentTarget)
    // }
    // const closeMobileMenu = () =>{
    //     setMobileMenuAnchorEl(null);
    // }

    // const login= async ()=>{
    //     var client = new UserAgentApplication(config);
    //     var request ={
    //         scopes: ['https://o365mon.kusto.windows.net/user_impersonation']
    //     }
    //     let loginResponse= await client.loginPopup(request);
    //     console.log(loginResponse);
    // }

    const mobileMenu =(
        <Menu id="mobile-menu" anchorEl={mobileMenuAnchorEl} keepMounted open={isMobileMenuOpen} >
            <MenuItem>Home</MenuItem>
            <MenuItem>Contact</MenuItem>
            <MenuItem>About</MenuItem>
        </Menu>
    );
    
     const products = [
         { name: 'The Shawshank Redemption', year: 1994 },
         { name: 'The Godfather', year: 1972 },
         { name: 'The Godfather: Part II', year: 1974 }];

        const [opend, setOpend] = React.useState(false);
        const [settingopen, setSettingopen] = React.useState(false);
        const [isClicked, setIsClicked] = React.useState(false);
        const [colorred, setColorred] = React.useState(false);
      const [legalIsClicked, setLegalIsClicked] = React.useState(false);
      const [open, setOpen] = React.useState(false);
        const handleDrawerOpen = () => {
          setOpend(true);
        };
              const handleSettingDrawerOpen = () => {
          setSettingopen(true);
        };
        const handleDrawerClose = () => {
          setOpend(false);
        };  
        const handleSettingDrawerClose = () => {
          setSettingopen(false);
        };  
         const helpsupport = () => { // modal should be displayed on screen
         console.log("hello");
            // if clicked again the list should not be displayed
     
        setIsClicked(true);
         };
         const legaldetails = () => { // modal should be displayed on screen
          console.log("hello");
             // if clicked again the list should not be displayed
          setLegalIsClicked(!legalIsClicked);
          };
         const addedtowishlist = () => {
           setColorred(!colorred);
         }
         const ScreenIsClicked = () => {
        console.log('hi');
          setMyProfielScreen(false);
         }
         const [array, setarray] = useState(['Search by Vehicle', 'Search by VIN','Cart', 'Legal and others']);
  
         const [modalStyle] = React.useState(getModalStyle);
   const [darktheme, setDarkTheme] = React.useState(false);
         function rand() {
             return Math.round(Math.random() * 20) - 10;
           }
         function getModalStyle() {
             const top = 50 + rand();
             const left = 50 + rand();
          
             return {
              top: `${top}%`,
               left: `${left}%`,
               transform: `translate(-${top}%, -${left}%)`,
             };
           }
          
         
         const body = (
             <Box style={modalStyle} className={classes.helpsupport} justifyContent="flex" alignItems="center">
               <Box style={{display: "flex", justifyContent: "center"}}> 
               <h2 id="simple-modal-title">Help & Support</h2>
               </Box>
               <Box >
               <form  noValidate autoComplete="off">
               <Box style={{display: "flex", justifyContent: "center"}}>
               <TextField id="outlined-basic" style={{marginBottom: "10px"}} label="Email" variant="outlined" />
               </Box>
               <Box style={{display: "flex", justifyContent: "center"}}>
               <TextField id="outlined-basic"  style={{marginBottom: "10px"}} label="Name" variant="outlined" />
        </Box>
        <Box style={{display: "flex", justifyContent: "center"}}>
               <TextField id="outlined-basic"  style={{marginBottom: "10px"}} label="Comment" variant="outlined" />
               </Box>
               <Box style={{display: "flex", justifyContent: "center"}}>
               <TextField id="outlined-basic"  style={{marginBottom: "10px"}} label="Question Type" variant="outlined" />
            </Box>
            <Box style={{display: "flex", justifyContent: "center"}}>
               
               <Button  className={classes.feedbackbtn} style={{width: "30%"}}>Send Feedback</Button>
               </Box>
               </form>
               </Box>
               <Box style={{margin: "10px"}}>
                   <Card style={{backgroundColor: "black"}}>
                       <CardActions></CardActions>
                       <CardContent><span style={{color: "white"}}> Note <br /><br />
                            Our customer service team is available 24hrs everyday. 
                            Please, write to Email: smartparts07@gmail.com or use Contact Form, Chat, Support Form
                            available on website and application.
                            <br />
                            <br />
                            Smart parts exports customer care number: +91-88264 77077
                            <br />
                            <br />
                            !WARNING! Do not call any other numbers except mentioned above.Please note, Smart parts exports
                            never calls & asks for bank account details, UPI id, OTP, etc. from the customer. We urge you not to
                            share such information with anyone. In case of any fraudulent transaction,immediately notify your bank.
                            <br />
                            <br />
                            Our head office address:
                            <br />
                            <br />
                            33, Sri Nagar Colony Rd, Ashok Vihar Phase 3, Sri Nagar Colony,
                            Sidora Kalan Village, Ashok Vihar, New Delhi, Delhi 110052</span></CardContent>
                   
                   </Card>
               </Box>
             </Box>
           );

           const handleOpen = () => {
             setOpen(true);
           };
        
           const handleClose = () => {
             setOpen(false);
           };     
  
  
  const changedtodarktheme = () => {
setDarkTheme(true);
  };
  
  
  
         return ( 
      
        <>
        {myprofilescreen ? <>
        <AppBar position="fixed"  className={classes.root}>
            <Toolbar>
               
                <Typography variant="h6"  style={{flexGrow:1}}>                                           
                <Link to="/" ><img style={{marginTop: 10, width: 80 ,height:40}} src={logo} alt="logo" /></Link>
                     {/* <Box component="span" style={{position: 'relative',bottom:12 }} >Smart Export</Box>   */}
                </Typography>
                  {/* <Autocomplete
                
                className={classes.searchbar}
                id=" "
                disableClearable
                options={products.map((option) => option.name)}
                renderInput={(params) => (
                <TextField
                    
                    {...params}
                    label="Search"
                    size="small"
                    margin="normal"
                    variant="outlined"
                    InputProps={{ ...params.InputProps, type: 'search' }}
                />
                )}
            />   */}

                <div className={classes.sectionDesktop}>
                    {/* <Button color="inherit"  component={Link} to="/">wishlist</Button>   */}
                    {/*  component={Link} to="/" */}
                    {/* <Button color="inherit" component={Link} to="/result">Messages</Button> */}
                    <Button color="inherit" variant="outlined" className={classes.hideIconsignup}  style={{borderRadius: "25px", padding: "5px", marginRight: "30px", border: "1px solid black"}}><Link to="/registration" className={classes.hyperlinksignup} >Sign Up</Link></Button>
                    <Button color="inherit" variant="outlined" className={classes.hideIconlogin} style={{borderRadius: "25px", padding: "5px",  border: "1px solid black",  textDecoration: "none"}}><Link to="/login" className={classes.hyperlinklogin}>Login</Link></Button>
                    <Link to="/shoppingcart">{darktheme ?<AddShoppingCart  className={classes.hideIcon} style={{marginLeft: 30,  marginTop: 10, color: "white"}}></AddShoppingCart> :<AddShoppingCart  className={classes.hideIcon} style={{marginLeft: 30,  marginTop: 10, color: "black"}}></AddShoppingCart>}</Link>
                    {colorred ?  <Link to="/wishlist"><FavoriteIcon onClick={addedtowishlist}  style={{marginLeft: 30,  marginTop: 10, color:  "red"}}></FavoriteIcon></Link>:
                    <Link to="/wishlist">{darktheme ?<FavoriteBorder onClick={addedtowishlist} className={classes.hideIcon} style={{marginLeft: 30,  marginTop: 10, color: "white"}}></FavoriteBorder>: <FavoriteBorder onClick={addedtowishlist} className={classes.hideIcon} style={{marginLeft: 30,  marginTop: 10, color: "black"}}></FavoriteBorder>}</Link>}
                    <Link to="/myprofile">{darktheme ?<PersonOutline className={classes.hideIcon} onClick={ScreenIsClicked} style={{marginLeft: 30, marginTop: 10, color: "white"}}></PersonOutline>:<PersonOutline className={classes.hideIcon} onClick={ScreenIsClicked} style={{marginLeft: 30, marginTop: 10, color: "black"}}></PersonOutline>}</Link>
                    {/* <Button color="inherit" component={Link} to="/result">My Profile</Button> */}
                    <SettingsIcon style={{marginLeft: 30, marginRight: 30, marginTop: 10}}className={classes.hideIcon} onClick={handleSettingDrawerOpen}></SettingsIcon>
                    {/* <Switch onChange={props.onThemeChangeHandler}></Switch> */}
                </div>
                <IconButton className={classes.hideIcon} color="inherit"  onClick={handleDrawerOpen}>
                    <MenuIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
        {mobileMenu}

        <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={opend}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {array.map((text, index) => (
            <ListItem button key={text}>
              {index!=3?<><ListItemIcon>{index  === 1 || index === 0 ? <InboxIcon /> : <div>{index === 2 ? <CartIcon  /> : <div><Infoicon /><KeyboardArrowDownOutlinedIcon onClick={legaldetails} /></div>}</div>}</ListItemIcon>
              <ListItemText primary={text} /></>:<><ListItemIcon><Infoicon /><ListItemText primary={text} style={{paddingLeft: "33px", color: "black"}}/><div><KeyboardArrowDownOutlinedIcon onClick={legaldetails} /></div></ListItemIcon>
              </>}
              
            </ListItem>
          ))}
              {legalIsClicked === true ?  <div style={{marginLeft: "75px"}}><Typography color={'textSecondary'}>Contact us</Typography>
              
              <Typography color={'textSecondary'} style={{marginTop: "8px"}}>FAQs</Typography>
              <Typography color={'textSecondary'} style={{marginTop: "8px"}}>About us</Typography>
              <Typography color={'textSecondary'} style={{marginTop: "8px"}}>Careers</Typography>
              <Typography color={'textSecondary'} style={{marginTop: "8px"}}>supplier Relations</Typography>
              <Typography color={'textSecondary'} style={{marginTop: "8px"}}>Return Policy</Typography>
              <Typography color={'textSecondary'} style={{marginTop: "8px"}}>Privacy Policy</Typography>
              <Typography color={'textSecondary'} style={{marginTop: "8px"}}>Disclaimer</Typography>
              <Typography color={'textSecondary'} style={{marginTop: "8px"}}>Terms of Use</Typography>
              <Typography color={'textSecondary'} style={{marginTop: "8px"}}>Buyers Policy</Typography>
              <Typography color={'textSecondary'} style={{marginTop: "8px"}}>Seller Policy</Typography>
              <Typography color={'textSecondary'} style={{marginTop: "8px"}}>Self Collection Policy</Typography>
              
              
              
              
              </div> : " " }
        </List>
        {/* <Divider />
        <List>
          {['Contact US', 'FAQs', 'About Us'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index  === 0 ? <Phoneicon /> : <div>{index === 1 ? <Helpicon /> : <Personicon />}</div>}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
             {mobileMenu}
        <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={settingopen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleSettingDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Light Mode', 'Language', 'Currency','Help & Support', 'Unlock Premium'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{ index === 0 ?  <Switch onChange={props.onThemeChangeHandler} onClick={changedtodarktheme}></Switch> : <div>{index === 1 ? <Language /> : <div>{index === 2  ? <AttachMoney /> : <div>{index === 3  ? <div ><Infoicon  ></Infoicon ></div> : <Link to="/unlockpremium"><Lock /></Link>}</div>}</div>}</div>}</ListItemIcon>

              {index === 3  ? <><ListItemText primary={text} onClick={handleOpen} /></>: <><ListItemText primary={text} /></> 
              }
            </ListItem>
          ))}
        </List>
        <Divider />

        <Modal open={open} onClose={handleClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
            {body}
        </Modal>
        <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={3}></Grid>
        </Grid>



          {/* {isClicked === true ?  <div><Helpsupport  /></div> : ""} */}
        {/* <List>
          {['Contact US', 'FAQs', 'About Us'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index  === 0 ? <Phoneicon /> : <div>{index === 1 ? <Helpicon /> : <Personicon />}</div>}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>

      
</> : " "}

        </>

        )
}
