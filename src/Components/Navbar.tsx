import React, { Fragment,useState } from 'react';
import {Menu,MenuItem,AppBar,Typography,Toolbar,Button,IconButton,Switch} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';



const useStyles = makeStyles((theme) =>({
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")] :{
            display:"flex"
        }
    },
    hideIcon:{
        [theme.breakpoints.up("md")]:{
            display:"none"
        }
    },
    root:{
        backgroundColor:theme.palette.primary.dark
    }
}))

export default function Navbar(props) {
    const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null);
    const classes = useStyles();
    const isMobileMenuOpen = Boolean(mobileMenuAnchorEl);

    const openMobileMenu = (event) =>{
        setMobileMenuAnchorEl(event.currentTarget)
    }
    const closeMobileMenu = () =>{
        setMobileMenuAnchorEl(null);
    }

    const mobileMenu =(
        <Menu id="mobile-menu" anchorEl={mobileMenuAnchorEl} keepMounted open={isMobileMenuOpen} >
            <MenuItem>Home</MenuItem>
            <MenuItem>Contact</MenuItem>
            <MenuItem>About</MenuItem>
        </Menu>
    );
    return (
        <>
        <AppBar position="sticky" className={classes.root}>
            <Toolbar>
                <Typography variant="h5" style={{flexGrow:1}}>
                       OneLogView
                </Typography>
                <div className={classes.sectionDesktop}>
                    <Button color="inherit" component={Link} to="/">Home</Button>  
                    {/*  component={Link} to="/" */}
                    <Button color="inherit" component={Link} to="/result">Result</Button>
                    <Button color="inherit" component={Link} to="/login">Login</Button>
                    <Switch onChange={props.onThemeChangeHandler}></Switch>
                </div>
                <IconButton className={classes.hideIcon} color="inherit" onClick={openMobileMenu}>
                    <MenuIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
        {mobileMenu}
        </>
    )
}
