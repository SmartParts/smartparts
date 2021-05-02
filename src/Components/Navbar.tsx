import React, { Fragment,useState } from 'react';
import {Menu,MenuItem,AppBar,Typography,Toolbar,Button,IconButton} from "@material-ui/core";
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
    }
}))

export default function Navbar() {
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
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h5" style={{flexGrow:1}}>
                       OneLogView
                </Typography>
                <div className={classes.sectionDesktop}>
                    <Button color="inherit">Home</Button>  
                    {/*  component={Link} to="/" */}
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Contact</Button>
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
