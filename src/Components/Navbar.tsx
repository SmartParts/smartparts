import React, { Fragment,useState } from 'react';
import {Menu,MenuItem,AppBar,Typography,Toolbar,Button,IconButton,Switch} from "@material-ui/core";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import {UserAgentApplication} from 'msal';
import {config} from'../config';
import Box from '@material-ui/core/Box';
import { MailOutline } from '@material-ui/icons';
import { FavoriteBorder } from '@material-ui/icons';
import { PersonOutline } from '@material-ui/icons';
import logo from '../image/logo22.png';
import { createMuiTheme } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
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
import Phoneicon from '@material-ui/icons/Phone';
import Personicon from '@material-ui/icons/Person';
import Helpicon from '@material-ui/icons/Help';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Lock from '@material-ui/icons/Lock';
import Language from '@material-ui/icons/Language';
import SettingsIcon from '@material-ui/icons/Settings';
const drawerWidth = 240;
const useStyles = makeStyles((theme) =>({
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")] :{
            display:"flex"
        }
    },
    hideIcon:{
        [theme.breakpoints.up("md")]:{
            display:"block"
        }
    },
    root:{
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
        
}))


export default function Navbar(props) {
    const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null);
    const classes = useStyles();
    const theme = useTheme();

   
    
    const isMobileMenuOpen = Boolean(mobileMenuAnchorEl);

    const openMobileMenu = (event) =>{
        setMobileMenuAnchorEl(event.currentTarget)
    }
    const closeMobileMenu = () =>{
        setMobileMenuAnchorEl(null);
    }

    const login= async ()=>{
        var client = new UserAgentApplication(config);
        var request ={
            scopes: ['https://o365mon.kusto.windows.net/user_impersonation']
        }
        let loginResponse= await client.loginPopup(request);
        console.log(loginResponse);
    }

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

        const [open, setOpen] = React.useState(false);
        const [settingopen, setSettingopen] = React.useState(false);
        const [isClicked, setIsClicked] = React.useState(false);
   
        const handleDrawerOpen = () => {
          setOpen(true);
        };
              const handleSettingDrawerOpen = () => {
          setSettingopen(true);
        };
        const handleDrawerClose = () => {
          setOpen(false);
        };  
        const handleSettingDrawerClose = () => {
          setSettingopen(false);
        };  
         const helpsupport = () => {
         console.log("hello");
          setIsClicked(true);
         };
    return (
        <>
        <AppBar position="fixed"  className={classes.root} >
            <Toolbar>
               
                <Typography variant="h6"  style={{flexGrow:1}}>
                <Link to="/" ><img style={{marginTop: 10, width: 80 ,height:40}} src={logo} /></Link>
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
            />  */}

                <div className={classes.sectionDesktop}>
                    {/* <Button color="inherit"  component={Link} to="/">wishlist</Button>   */}
                    {/*  component={Link} to="/" */}
                    {/* <Button color="inherit" component={Link} to="/result">Messages</Button> */}
                    <Button color="inherit" variant="outlined"  style={{borderRadius: "25px", padding: "0px", marginRight: "30px", border: "1px solid white", backgroundColor: "white", color: "black"}}><Link to="/registration">Sign Up</Link></Button>
                    <Button color="inherit" variant="outlined" onClick={login} style={{borderRadius: "25px", padding: "0px",  border: "1px solid white", backgroundColor: "white", color: "black"}}>Login</Button>
                    <Link to="/shoppingcart"><AddShoppingCart  style={{marginLeft: 30,  marginTop: 10}}></AddShoppingCart></Link>
                    <Link to="/wishlist"><FavoriteBorder style={{marginLeft: 30,  marginTop: 10}}></FavoriteBorder></Link>
                    <Link to="/myprofile"><PersonOutline style={{marginLeft: 30, marginTop: 10}}></PersonOutline></Link>
                    {/* <Button color="inherit" component={Link} to="/result">My Profile</Button> */}
                    <SettingsIcon style={{marginLeft: 30, marginRight: 30, marginTop: 10}} onClick={handleSettingDrawerOpen}></SettingsIcon>
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
        open={open}
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
          {['Search by Vehicle', 'Search by VIN', 'Cart', 'Legal'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index  === 1 || index === 0 ? <InboxIcon /> : <div>{index === 2 ? <CartIcon /> : <Infoicon />}</div>}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Contact US', 'FAQs', 'About Us'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index  === 0 ? <Phoneicon /> : <div>{index === 1 ? <Helpicon /> : <Personicon />}</div>}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
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
              <ListItemIcon>{ index === 0 ?  <Switch onChange={props.onThemeChangeHandler}></Switch> : <div>{index === 1 ? <Language /> : <div>{index === 2  ? <AttachMoney /> : <div>{index === 3  ? <div ><Button onClick={helpsupport}></Button></div> : <Link to="/unlockpremium"><Lock /></Link>}</div>}</div>}</div>}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
          {isClicked === true ?  <div><Typography>Hi</Typography></div> : ""}
        {/* <List>
          {['Contact US', 'FAQs', 'About Us'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index  === 0 ? <Phoneicon /> : <div>{index === 1 ? <Helpicon /> : <Personicon />}</div>}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>

      


        </>
    )
}
