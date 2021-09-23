import React, {useState} from 'react';
import {Box,Typography,Grid} from "@material-ui/core";
import {makeStyles, useTheme,withStyles} from "@material-ui/core/styles";
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import TextTransition, { presets } from "react-text-transition";
import {Accordion,  AccordionSummary, AccordionDetails} from '@material-ui/core';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@material-ui/icons/KeyboardArrowUpOutlined';
// import Container from "@material-ui/core/Container";
import mainimage from '../image/home/mainimage.png';
import Autocomplete from '@material-ui/lab/Autocomplete';
// import {green} from "@material-ui/core/colors";
import CardMedia from '@material-ui/core/CardMedia';
import ChatIcon from '@material-ui/icons/Chat';
import ChatBot from '../Components/chatbot.js';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import Popper from '@material-ui/core/Popper';
import workflowlogo from '../image/ordermanagementworkflow/logoworkflow.png';
// import image2 from '../image/logo2.png';
// import image3 from '../image/aboutus.jpg';
// import LinearProgress from '@material-ui/core/LinearProgress';
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
//import bannerVideo from '../../src/video/bannervideo.mp4';
import Card from '@material-ui/core/Card';
import {Link, NavLink} from 'react-router-dom';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import logo from '../image/logo22.png';
// import brand1 from '../image/brand1.png';
import ShowMoreText from "react-show-more-text";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
// import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Footer from './Footer';
// import Collapse from '@material-ui/core/Collapse';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Switch from '@material-ui/core/Switch';
import Avatar from '@material-ui/core/Avatar';
// import EmailIcon from '@material-ui/icons/Email';
import Fab from '@material-ui/core/Fab';
import maintainanceimg from '../image/home/Maintenance Service Parts.svg';
import airimg from '../image/home/air conditioning (1).svg';
import beltsimg from '../image/home/Belts Chains and Rollers.svg';
import bodyimg from '../image/home/Body.svg';
import breaksystemimg from '../image/home/Brake System.svg';
import engineimg from '../image/home/Engine.svg';
import clutchimg from '../image/home/Clutch System.svg';
import enginecoolingimg from '../image/home/Engine Cooling System.svg';
import exhaustsystemimg from '../image/home/Exhaust System.svg';
import filtersimg from '../image/home/Filters.svg';
import fuelsupplyimg from '../image/home/Fuel Supply System.svg';
import gasketsimg from '../image/home/Gaskets and Sealing Rings.svg';
import ignitionimg from '../image/home/Ignition and Glowplug System.svg';
import interiorimg from '../image/home/Interior and comfort.svg';
import lighteningimg from '../image/home/Lighting.svg';
import oilsimg from '../image/home/Oils and Fluids.svg';
import pipesimg from '../image/home/Pipes and Hoses.svg';
import repairkitsimg from '../image/home/Repair Kits.svg';
import sensorsimg from '../image/home/Sensors Relays and Control units.svg';
import steeringimg from '../image/home/Steering.svg';
import suspensionimg from '../image/home/Suspension and Arms.svg';
//import Slider from "react-slick";
import boschimg from '../image/brands/Bosch.svg';
import hyundaiimg from '../image/brands/Hyundai Xteer.svg';
import Valeoimg from '../image/brands/Valeo.svg';
import donaldsonimg from '../image/brands/Donaldson.svg';
import ZFimg from '../image/brands/Zf.svg';
import Delphiimg from '../image/brands/Delphi.svg';
import wabcoimg from '../image/brands/Wabco.svg';
import mandoimg from '../image/brands/Mando.svg';
import ngkimg from '../image/brands/Ngk.svg';
import lumaximg from '../image/brands/Lumax.svg';
import mannfilterimg from '../image/brands/Mann Filters.svg';
import knorrimg from '../image/brands/Knorr Bremse.svg';
import fleetguardimg from '../image/brands/Fleetguard.svg';
import nissanimg from '../image/brands/Nissan.svg';
import Hyundaiimg from '../image/brands/Hyundai.svg';
import suzukiimg from '../image/brands/Suzuki.svg';
import fordimg from '../image/brands/Ford.svg';
import tataimg from '../image/brands/Tata.svg';
import mahindraimg from '../image/brands/Mahindra.svg';
import hondaimg from '../image/brands/Honda.svg';
import renaultimg from '../image/brands/Renault.svg';
import manimg from '../image/brands/Man.svg';
import ashokimg from '../image/brands/Ashok Leyland.svg';
import volkswagenimg from '../image/brands/volkswagen.svg';
import cheveroletimg from '../image/brands/Chevrolet.svg';
// import Item from './Item';
import originalprodimg from '../image/other/Original Products.svg';
import widevarietyimg from '../image/other/Wide variety.svg';
import affordableratesimg from '../image/other/Affordable Rates.svg';
import Shippedimg from '../image/other/Shipped.svg';
import confirmedorderimg from '../image/other/Confirmed Order.svg';
import Paymentimg from '../image/other/Payment & Dispatch Order.svg';
import deliveredimg from '../image/other/Delivered.svg';
import transmissionimg from '../image/home/Transmission.svg';
import wheelsimg from '../image/home/Wheels (1).svg';
import trimsimg from '../image/home/trims (1).svg';
import invoiceimg from '../image/other/Generate Invoice.svg';
import requirenmentimg from '../image/other/Requirement.svg';
import { useMediaQuery } from '@material-ui/core';
import articleoneimage from '../image/article/Untitled-2.jpg';
import articletwoimage from '../image/article/Untitled-3.jpg';
import articlethreeimage from '../image/article/Untitled-4.jpg';
import Tooltip from '@material-ui/core/Tooltip';
// import Navbar from './Navbar';
import Carousel from './Carousel';
// import { ArrowRight } from '@material-ui/icons';
// const bannerVideo = require('../../src/video/bannervideo.mp4');
import workflowimage from '../image/ordermanagementworkflow/workflow.png';
// import { url } from 'inspector';
const TEXTS = [
    "FAST",
    "GENUINE",
    "RELIABLE",
    
  ];
  const TextOnlyTooltip = withStyles({
    tooltip: {
        fontSize: 15,
      color: "black",
      backgroundColor: "white"
    }
  })(Tooltip);
  
// const BorderLinearProgress = withStyles((theme) => ({
//     root: {
//       height: 355,
//       borderRadius: 5,
//     },
    
//     colorPrimary: {
//       backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
//     },
//     bar: {
//       width: "201%",
//       borderRadius: 5,
//       backgroundColor: '#1a90ff',

//     },
//   }))(LinearProgress);
 
const useStyles = makeStyles((theme)=>({

    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        [theme.breakpoints.down("sm")] :{
            display: "none",
        },

    },
        mainheading: {
                animation: "slideIn 2s forwards",
            display: "inline-block",
            marginLeft: "85px",
            color: "white",

        },
        staticheading: {
            marginTop: "8px",
            marginLeft: "85px",
            color: "white",
        },
        headingpart2: {
            marginTop: "8px",
            animation: "slideIn 3s forwards",
            display: "inline-block",
            marginLeft: "85px",
            color: "white",
        },
        headingpart3: {
            marginTop: "8px",
            animation: "slideIn 4s forwards",
            display: "inline-block",
            marginLeft: "85px",
            color: "white",
        },
        chatbox: {
            width: 500,
        },
        mainvideo: {
             marginTop: "45px",
            // position: "absolute",
            
          width: "100%",
          height: "298px",
          [theme.breakpoints.down("md")] :{
            marginTop: "100px",
            height: "188px",
        },
          
      },
      onlysearch: {
        margin: "15px",
      },
    slider: {
        fontFamily: 'sans-serif',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
    },
   

    imagesize:{
        width: "1200px",
        margin: "auto",
    },
    bodyStyle:{
        marginTop:"10px"
    },
    innerPaper:{
        width:"100%",
        padding:"7px",
        margin:"4px 0px 20px 5px"
    },
   
    searchcategory: {
       margin: "10px",
       padding: "10px",
        fontSize: 32,
      //  fontFamily: 'nano-sans',
      marginTop: "66px",
      [theme.breakpoints.down("lg")] :{

        padding: "10px 12px",
        fontSize: 30,
    },
    [theme.breakpoints.down("md")] :{

        margin: "0px",
        padding: "10px 20px",

        fontSize: 30,
    },
    [theme.breakpoints.down("xs")] :{

        margin: "0px",
        padding: "10px 20px",
        fontSize: 20,


    },
      [theme.breakpoints.down("sm")] :{

        margin: "0px",
        padding: "10px 20px",
        fontSize: 20,
        
    },
    },
    vehiclegrid: {
        width:"50%", 
        marginLeft: "350px",
        [theme.breakpoints.down("sm")]:{
        marginLeft: "0px",
        width: "100%",},
    },
    searchbutton: {
        marginTop: "10px",
        backgroundColor: "#8517FF",
        color: "white",
      '&: hover': {
        backgroundColor: "#8517FF",
        color: "white",
      }
    },
    mainform: {
        display: "flex",
        [theme.breakpoints.down("sm")]:{
          display:"block"
      },
    },
    vehiclesection: {
        [theme.breakpoints.down("sm")] :{
            display: "none",
        },
    },
    vehiclebrands: {
        width: "100%", 
       borderRadius: "35px", 
        padding: "15px",
        color: "black",
        '&:hover': {
            color: "white",
        },
    },
    oembrands: {
        width: "100%",
         borderRadius: "35px",
          padding: "15px", 
        color: 'black',
        '&:hover': {
            color: "white",
        },
    },
    searchbyvehicle: {
        margin: "10px",
        padding: "10px",
         fontSize: 32,
       //  fontFamily: 'nano-sans',
       marginTop: "66px",
    },
    featuredproducts: {
        margin: "10px",
        padding: "10px",
         fontSize: 32,
       //  fontFamily: 'nano-sans',
        marginTop: "36px",
       [theme.breakpoints.down("sm")] :{
        fontSize: 20,
        display: "none",
    },
    },
    category: {
        margin: "20px",
        height: "20%",
        backgroundColor: "#8517FF",
        padding: "50px",
        borderRadius: "25px",
        [theme.breakpoints.down("md")] :{
            margin: "5px",
            height: "10%",
            backgroundColor: "#8517FF",
            padding: "0px",
            borderRadius: "25px",
        },

    },

    types: {
        width: "220px", 
        marginLeft: "10px", 
        marginBottom: "10px",  
        borderRadius: "20px",
        [theme.breakpoints.down("sm")] :{
            width: "150px", 
        },
    },
    type1: {
        width: "230px",
        padding: "11px", 
         borderRadius: "20px",
         display: 'flex',
         flexWrap: 'wrap',
         justifyContent: 'space-around',
         overflow: 'hidden',
         [theme.breakpoints.down("lg")] :{
            marginRight: "60px",
            height: "160px",
            width: "150px", 
            padding: "11px 25px",
            marginBottom: "20px", 
             borderRadius: "20px",        },
             [theme.breakpoints.down("md")] :{
                marginRight: "60px",
                height: "160px",
                width: "150px", 
                padding: "11px 25px",
                marginBottom: "20px", 
                 borderRadius: "20px",        },
                 [theme.breakpoints.down("xs")] :{
                    marginRight: "60px",
                    height: "160px",
                    width: "150px", 
                    padding: "11px 25px",
                    marginBottom: "20px", 
                     borderRadius: "20px",        },
         [theme.breakpoints.down("sm")] :{
            marginRight: "60px",
            height: "160px",
            width: "150px", 
            padding: "11px 25px",
            marginBottom: "20px", 
             borderRadius: "20px",        },
    },
    typescontent: {
        padding: "50px",
        [theme.breakpoints.down("sm")] :{
            padding: "0px 20px",
        },
    },
    categorytypes: {
        [theme.breakpoints.down("lg")] :{
            width: "156px",
            
            },
            [theme.breakpoints.down("md")] :{
                width: "156px",
                
                },
                [theme.breakpoints.down("xs")] :{
                    width: "156px",
                    
                    },
        [theme.breakpoints.down("sm")] :{
        width: "156px",
        
        },
    },
     media: {
        height: 240,
        paddingTop: '56.25%', // 16:9
        [theme.breakpoints.down("md")] :{
            height: 151,
           
        },

      },
      hotseller: {
          flexGrow: 1,
      },
      margin: {
        margin: theme.spacing(1),
        [theme.breakpoints.down("md")] :{
            width: "10%",
           
        },
      },
      brandbtn: {
        width: "100%",
        [theme.breakpoints.down("lg")] :{
            width: "100%",
          
           
        },
        [theme.breakpoints.down("md")] :{
            width: "100%",
          
           
        },
        [theme.breakpoints.down("xs")] :{
            width: "100%",
          
           
        },
        [theme.breakpoints.down("sm")] :{
          width: "130%",
          margin: "0px 25px",
         
      },
    },
    bannerimage: {
        marginTop: "-290px",
        marginLeft: "650px",
       // display:"block",
        backgroundImage: `url(${mainimage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
         height: "25rem",

        [theme.breakpoints.down("md")] :{
            marginTop: "-330px",
            marginLeft: "580px",
            backgroundSize: '100%',
            height: "25rem",
           
        },
    },
      workflowsection: {
        display: "block",
     backgroundImage: `url(${workflowimage})`,
     backgroundPosition: 'center',
     backgroundRepeat: 'no-repeat',
     backgroundSize: '100%',  // check
    // borderRadius: "25px",
      [theme.breakpoints.down("sm")] :{
          display: "none",

        },
    },
 
      spacesmallscreen: {
        margin: "15px",
         backgroundColor: "white", 
         color: "black",
         padding: "20px 55px",
         [theme.breakpoints.down("sm")] :{
            margin: "15px",
         backgroundColor: "white", 
         color: "black",
         padding: "20px 0px", 
        
        },
      },
      buttons: {
          width: "90%",
          backgroundColor: 'white',
    color: 'black',
    borderRadius: "25px",
    '&:hover': {
      backgroundColor: '#8517FF',
      color: '#3c52b2',
      borderRadius: "25px",
    },
    [theme.breakpoints.down("sm")] :{
        width: "90%",
        backgroundColor: 'white',
  color: 'black',
  borderRadius: "25px",
  margin: "5px",
  '&:hover': {
    backgroundColor: '#8517FF',
    color: '#3c52b2',
    borderRadius: "25px",
  },
    },


        [theme.breakpoints.up("sm")] :{
        width: "90%",
        backgroundColor: 'white',
  color: 'black',
  borderRadius: "25px",
  margin: "0px 65px",
  '&:hover': {
    backgroundColor: '#8517FF',
    color: '#3c52b2',
    borderRadius: "25px",
  },
    },
    [theme.breakpoints.up("md")] :{
        width: "95%",
        backgroundColor: 'white',
  color: 'black',
  borderRadius: "25px",
  margin: "0px 105px",

  '&:hover': {
    backgroundColor: '#8517FF',
    color: '#3c52b2',
    borderRadius: "25px",
  },    },    
    [theme.breakpoints.up("lg")] :{
        margin: "0px 65px",
    },  


    
          //   '& $appearItem': {
        //     display: "none",
        //  },
        //   '&:hover $appearItem': {
        //     display: "block",
        //  },
      },
      appearItem: {
          height: 140,
      },
      brandimages:{
        width: "150px",
         height: "100px",
      
         [theme.breakpoints.down("sm")] :{
            width: "65px",
            height: "55px",
            margin:"0px",
        },  
      
        },

       space: {
           margin: theme.spacing(3),
           borderRadius: "10px",
         },

         brandButtons: {
            // margin: "15px",
             backgroundColor: "white", 
             color: "black",
             padding: "20px 55px",
             [theme.breakpoints.down("sm")] :{
                margin: "15px",
                width: "20%",
             backgroundColor: "white", 
             color: "black",
             padding: "20px 10px",     
             },
             margin: theme.spacing(3),
                borderRadius: "10px",
              },
      padding: {
          padding: "60px",
      },
      articleheading: {
          margin: "10px",
          padding: "10px",
          fontSize: 32,
          fontFamily: 'nano-sans',
          [theme.breakpoints.down("sm")] :{
          
            fontSize: 20,
        },
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      headingwithform:{
        flex: '1 0 auto',
        //  padding: "40px",
          padding: "68px", width: "80px",
          [theme.breakpoints.down("sm")]:{
            padding: "20px 25px",
            width: "30px",
        },

      },
      vehicleforsmallscreen: {
        display: 'flex',
        marginTop: "60px",
        marginBottom: "60px",
        borderRadius: "25px",
      },
      article: {
          marginLeft: "65px",
          marginRight: "45px", 

          fontSize: 32,
          fontFamily: 'nano-sans',
          borderRadius: "25px",
          [theme.breakpoints.down("md")] :{
            marginLeft: "10px",
            marginRight: "10px",   
        },

          //   backgroundColor: "white",
        //   color: "black",
        //    '&:hover ':{
        //      backgroundColor: "#8517FF",
        //      color: "white",
        //    },
        [theme.breakpoints.down("sm")] :{
          
            //    width: "150px",
            //    height: "208px",
            width: "100px",
            height: "100px", 
                display: "flex", 
               marginLeft: " 25px", 
                fontSize: 32,
                fontFamily: 'nano-sans',
                borderRadius: "25px",
                backgroundColor: "white",
                 color: "black",
                 
    
    
    
              
            },
      },
      whyprod: {
        marginLeft: "65px",
        marginRight: "45px", 

        fontSize: 32,
        fontFamily: 'nano-sans',
        borderRadius: "25px",
      //   backgroundColor: "white",
      //   color: "black",
         '&:hover ':{
           backgroundColor: "#8517FF",
           color: "white",
         },
         [theme.breakpoints.down("md")] :{
            marginLeft: "10px",
            marginRight: "10px",  
        },
        [theme.breakpoints.down("sm")] :{
            marginLeft: "10px",
            marginRight: "10px",  
        },
         [theme.breakpoints.down("xs")] :{
          
        //    width: "150px",
        //    height: "208px",
        width: "100px",
        height: "100px", 
            display: "flex", 
           marginLeft: " 25px", 
            fontSize: 32,
            fontFamily: 'nano-sans',
            borderRadius: "25px",
          //   backgroundColor: "white",
          //   color: "black",
             '&:hover ':{
               backgroundColor: "#8517FF",
               color: "white",
             },



          
        },
    },
      articleimage: {
          height: 240,

      },
      paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
      border: {

        borderRadius: "25px",
          marginLeft: "10px",
          marginRight: "10px",
          [theme.breakpoints.down("md")] :{
            margin: "0px",
           
        },
      },
      feedbackbtn: {
          backgroundColor: "#8517FF",
          color: "#ffff",
      },
      countries: {
          backgroundColor: 'white',
          borderRadius: "25px",

      },
      featuredprod: {
        [theme.breakpoints.down("md")]: {
            display: "flex",
            flexDirection: "row",
        },
      },

     avatar: {
         backgroundColor: theme.palette.grey[50],
         border: `1px solid #8517FF`,
        color: "#8517FF",
      //   margin: "50px 0px 50px 50px",
       //  marginLeft: "88px",
         padding: "15px",
        width: "80px",
        height: "80px",        
        '&:hover': {
            border: `6px solid #8517FF`,

        },
      },
    

      avatarremaining: {
        backgroundColor: theme.palette.grey[50],
        border: `1px solid #8517FF`,
       color: "#8517FF",
        margin: "50px 0px 50px 0px",

        padding: "15px",
       width: "80px",
       height: "80px",        
       '&:hover': {
           border: `6px solid #8517FF`,

       },
     },
      root: {
        height: 180,
      },
      container: {
        display: 'flex',
      },
    
      svg: {
        width: 100,
        height: 100,
      },
      polygon: {
        fill: theme.palette.common.white,
        stroke: theme.palette.divider,
        strokeWidth: 1,
      },
      helpsupport: {
        position: 'absolute',
        width: 900,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        
      },
      MuiLinearProgressRoot: {

        MuiLinearProgressBarColorPrimary: {
            backgroundColor: "white",
        },
    },
    parts: {
        paddingLeft: "50px",
        color: "black",
    },
    productbackground: {
        backgroundColor: "white",
    },
    searchbar: {
        width: "30%",
        alignItems: 'center',

      
    },
    textbelowsearchbar:{
        fontFamily: "Imprint MT Shadow",
        marginLeft: "85px",
        [theme.breakpoints.down("md")] :{
            fontSize: "1.5rem",
           
        },
        
    },
    banner: {
        marginTop: "65px",
         width: "auto" , 
        height: "580px" ,
        background: 'linear-gradient(to bottom, #2A0040 , #8C00DB )',
        [theme.breakpoints.down("md")] :{
            height: "478px" ,
           
        },
   
    },
    MuiFormControlMarginNormal: {
        margin: "160px 85px 40px 85px ",
        backgroundColor:"white",
        borderRadius: "25px",
        textDecoration: "none",
       // padding: "20px",  
     
    
        
    },  
    noBorder: {
        border: "none",

        textDecoration: "none",
      },  
       
}));

//  function rand() {
//      return Math.round(Math.random() * 20) - 10;
//    }
  
//    function getModalStyle() {
//      const top = 50 + rand();
//      const left = 50 + rand();
  
//      return {
//       top: `${top}%`,
//        left: `${left}%`,
//        transform: `translate(-${top}%, -${left}%)`,
//      };
//    }

// const theme = createMuiTheme({
//     palette : {
//         primary: green,
        
//     },
    
// });

// const breakPoints = [
//     { width: 1 ,ItemstoShow: 1},
//     { width: 550 ,ItemstoShow: 2},
//     { width: 700 ,ItemstoShow: 3},
//     { width: 1200 ,ItemstoShow: 4},
// ]
const products = [
    { name: 'Product One', year: 2021 },
    { name: 'Product Two', year: 2021 },
    { name: 'Product Three', year: 2021 }];

export default function Home() {
    const  classes= useStyles();
    const [carmaker, setCarmaker] = React.useState('');
    const [expand, setExpand] = useState(false);
    // const [modalStyle] = React.useState(getModalStyle);
    // const [open, setOpen] = React.useState(false);
    // const [showImage, setShowImage] = React.useState(false);
//    const [checked, setChecked] = React.useState(false);
    const [selectedbutton, setSelectedButton] = React.useState(false);
    const [displaytext, setDisplayText] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openpopper, setOpenPopper] = React.useState(false);
    const [readmoredisappear, setReadmoreDisappear] = React.useState(false);
    const [placement, setPlacement] = React.useState();
    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpenPopper((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
      };
    // const handlingChange = () => {
    //     setChecked((prev) => !prev);
    //   };
  const onClick = () => {
    setExpand(!expand);
  };
//   const onHover = () => {
//     setShowImage(!showImage);
//   };
  const showbrandimages = () => {
    setSelectedButton(true);
    
};

const handleHover = () => {
    setSelectedButton(false);
};

const vehiclehover = () => {
    setSelectedButton(true);
};
const [index, setIndex] = React.useState(0);
const aboutusparagraph = () => {
    setDisplayText(true);
    setReadmoreDisappear(true);
}
const hideaboutusparagraph = () => {
    setDisplayText(false);
    setReadmoreDisappear(false);
    console.log(displaytext);
    
}
  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  const text = "  Our project was established in 2015. Over this time we have been working on our goal – to help customers and suppliers in auto car spare parts sales and communication. This advertising platform was created to make online shopping easier for both automobile owners and parts dealers. Customers get an opportunity to buy car parts online, which are branded and original. Our continuously updated catalogues are filled with replacement parts, with well-known, and highly regarded brands. This provides auto parts suppliers with the ability to offer their products, communicate with clients, and increase sales along with their market share.How do we work: key features of Smartpartsexports.com Clear and transparent offers. We do not promote any particular suppliers, all parts are sorted by producers' information and filtered by customers’ choice. Quick and competent service. If any problems occur, Smartpartsexports.com will put its best foot forward to solve issues. Easy to read catalogues, with the latest offers. Every day  new products with actual prices appear. Simple and easy-to-understand website. We created it be both useful and mobile-friendly, so our visitors can order car parts from personal computer, laptop, tablet or smartphone.3 main reasons to choose Smartpartsexports.com 1. 10 Days Assured Return. If spare part will not be applicable to your car we will initiate return process after your request. The return process is very smooth and simple.   You will get new part or money back by your choice.  2. We are creating our catalogues by collecting relevant information from the market. We are responsible for Product description and keep our Sellers responsible for  offer terms and genuinity of the product sold.  3. Free website usage. There is no additional payment for auto car spare parts buyers. Only sellers have to pay a marketing fee.";
   const smartexportparagraph = (
        <Box>
         <Typography align="left" variant="body1">   We take pride in being among the top most preferred genuine automotive spare parts exporters in India. We specialize in the supply of genuine and aftermarket spare parts for passenger and commercial vehicles manufactured by Tata Motors, Mahindra, Ashok Leyland, Maruti Suzuki, Hyundai, Ford, Honda, MAN and other Indian manufactured vehicles.</Typography>
        <br />
        <Typography align="left" variant="body1">We are already serving our best products and services in more than 80 countries.</Typography>
        <br />
        <Typography align="left" variant="body1">For Genuine automotive spare parts exports, we also have a very large product range and can undertake any customizations as per consumer or market requirements.</Typography>
        <br />
        <Typography align="left" variant="body1">Genuine automotive spare parts component exporter from India specializing in complete product range like following :-</Typography>
        <br />
         
        <Typography align="left" variant="body1">   • Suzuki Spare parts </Typography> 
        <Typography align="left" variant="body1">   • Tata Motors Spare parts </Typography>
        <Typography align="left" variant="body1">   • Ashok Leyland Spare parts </Typography>
        <Typography align="left" variant="body1">   • Mahindra Spare parts </Typography>
        <Typography align="left" variant="body1">   • Chevrolet Spare Parts </Typography>
        <Typography align="left" variant="body1">   • Ford Spare Parts </Typography>
        <Typography align="left" variant="body1">   • Nissan Spare Parts </Typography>
        <Typography align="left" variant="body1">   • Man Spare parts for CLA  </Typography> 
        <Typography align="left" variant="body1">   • Ford Spare parts  </Typography>
        <Typography align="left" variant="body1">   • Hyundai spare parts (aftermarket)
            
            </Typography>
            <br />
         <Typography align="left" variant="body1">Any needs regarding automobile products for any Indian vehicles will be taken care of.</Typography>
         <br />
         <Typography align="left" variant="body1">We deal in a complete range of genuine and aftermarket spare parts of all the top brands.</Typography>
         <br />
         <Typography align="left" variant="body1">Smart Parts Exports is a leading automotive component market player</Typography>
         <br />
         <Typography align="left" variant="body1">With us, You can expect the following:</Typography>
         <br />
         <Typography align="left" variant="body1">• World-class service to all our esteemed clients</Typography>
         <Typography align="left" variant="body1">• Highly efficient team and super quick response </Typography>
         <Typography align="left" variant="body1">• Fulfill the bulk spare parts order of the products as we are strongly supported by our vendors </Typography>
         <Typography align="left" variant="body1">• Superior quality products as there are various rounds of quality assurance tests done before the final delivery to customer</Typography>
         <Typography align="left" variant="body1">• A quick turnaround time for we have lightning fast dispatch facilities and highly efficient agents.</Typography>
    
        </Box>



   );
//    const body = (
//      <Box style={modalStyle} className={classes.helpsupport} justifyContent="flex" alignItems="center">
//        <Box style={{display: "flex", justifyContent: "center"}}> 
//        <h2 id="simple-modal-title">Help & Support</h2>
//        </Box>
//        <Box >
//        <form  noValidate autoComplete="off">
//        <Box style={{display: "flex", justifyContent: "center"}}>
//        <TextField id="outlined-basic" style={{marginBottom: "10px"}} label="Email" variant="outlined" />
//        </Box>
//        <Box style={{display: "flex", justifyContent: "center"}}>
//        <TextField id="outlined-basic"  style={{marginBottom: "10px"}} label="Name" variant="outlined" />
// </Box>
// <Box style={{display: "flex", justifyContent: "center"}}>
//        <TextField id="outlined-basic"  style={{marginBottom: "10px"}} label="Comment" variant="outlined" />
//        </Box>
//        <Box style={{display: "flex", justifyContent: "center"}}>
//        <TextField id="outlined-basic"  style={{marginBottom: "10px"}} label="Question Type" variant="outlined" />
//     </Box>
//     <Box style={{display: "flex", justifyContent: "center"}}>
       
//        <Button  className={classes.feedbackbtn} style={{width: "30%"}}>Send Feedback</Button>
//        </Box>
//        </form>
//        </Box>
//        <Box style={{margin: "10px"}}>
//            <Card style={{backgroundColor: "black"}}>
//                <CardActions></CardActions>
//                <CardContent><span style={{color: "white"}}> Note <br /><br />
//                     Our customer service team is available 24hrs everyday. 
//                     Please, write to Email: smartparts07@gmail.com or use Contact Form, Chat, Support Form
//                     available on website and application.
//                     <br />
//                     <br />
//                     Smart parts exports customer care number: +91-88264 77077
//                     <br />
//                     <br />
//                     !WARNING! Do not call any other numbers except mentioned above.Please note, Smart parts exports
//                     never calls & asks for bank account details, UPI id, OTP, etc. from the customer. We urge you not to
//                     share such information with anyone. In case of any fraudulent transaction,immediately notify your bank.
//                     <br />
//                     <br />
//                     Our head office address:
//                     <br />
//                     <br />
//                     33, Sri Nagar Colony Rd, Ashok Vihar Phase 3, Sri Nagar Colony,
//                     Sidora Kalan Village, Ashok Vihar, New Delhi, Delhi 110052</span></CardContent>
           
//            </Card>
//        </Box>
//      </Box>
//    );
  
//    const handleOpen = () => {
//      setOpen(true);
//    };

//    const handleClose = () => {
//      setOpen(false);
//    };

   
   const handleChange = (event) => {
       setCarmaker(event.target.value);
     };

     const [progress, setProgress] = React.useState(0);
       const [buffer, setBuffer] = React.useState(10);
     const [carsearchclicked, setCarSearchClicked] = React.useState(false);
     const theme = useTheme();
     const [iscollapsed, setIsCollapsed] = React.useState(false);
     const [clickedtwice, setClickedTwice] = React.useState(false);
     const [articletwocollapsed, setArticletwoCollapsed] = React.useState(false);
     const [clickedtwicetwo, setClickedTwiceTwo] = React.useState(false);
     const [articlethreecollapsed, setArticleThreeCollapsed] = React.useState(false);
     const [clickedtwicethree, setClickedTwiceThree] = React.useState(false);
     const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
     const isMatchtabletscreen = useMediaQuery(theme.breakpoints.down('xs'));
     const isMatchmediumscreen = useMediaQuery(theme.breakpoints.down('md'));
     const isMatchlargescreen = useMediaQuery(theme.breakpoints.down("lg"));

const collapsecontent = () => {
    setIsCollapsed(true);
    console.log(iscollapsed);
    setClickedTwice(true);
}
const togglecontent = () => {
    setIsCollapsed(!iscollapsed);

}
const togglecontenttwo = () => {
    setArticletwoCollapsed(!articletwocollapsed);

}
const togglecontentthree = () => {
    setArticleThreeCollapsed(!articlethreecollapsed);

}
const collapsecontenttwo = () => {
    setArticletwoCollapsed(true);
    console.log(articletwocollapsed);
    setClickedTwiceTwo(true);
}
const collapsecontentthree = () => {
    setArticleThreeCollapsed(true);
    console.log(articlethreecollapsed);
    setClickedTwiceThree(true);
}
     const carsearch = () =>{
setCarSearchClicked(!carsearchclicked);
     }
     const progressRef = React.useRef(() => {});
     React.useEffect(() => {
       progressRef.current = () => {
         if (progress > 100) {
           setProgress(0);
           setBuffer(buffer);
         } else {
           const diff = Math.random() * 10;
           const diff2 = Math.random() * 10;
           setProgress(progress + diff);
           setBuffer(progress + diff + diff2);
         }
       };
     });
    //  const [state, setState] = React.useState<{ age: string | number; name: string }>({
    //     age: '',
    //     name: 'hai',
    //   });
     React.useEffect(() => {
       const timer = setInterval(() => {
         progressRef.current();
       }, 500);
   
       return () => {
         clearInterval(timer);
       };
     }, []);
    return (
        
         
            <Box>
                {/* <Box style={{marginTop: "65px"}}>
                  <Autocomplete
                
                className={classes.searchbar}
                id=" "
                disableClearable
                options={products.map((option) => option.name)}
                renderInput={(params) => (
                <TextField
                    className={classes.MuiFormControlMarginNormal}
                    {...params}
                    label="Search"
                    size="small"
                    margin="normal"
                    variant="outlined"
                    InputProps={{ ...params.InputProps, type: 'search' }}
                />
                )}
            />  

            </Box> */}
            {isMatch ?  
            <Box>
                <Box style={{backgroundColor: "white",padding: "10px", margin: "85px 15px 0px 15px"}}>
                <Typography  style={{ fontSize: 13, marginBottom: "5px", color: "#424242"}}>
                    Select the car maker, model and part number of your car or find the needed parts by VIN.
                </Typography>
                <Box style={{display: "flex", flexDirection: "row"}}>
                <Button variant="contained" onClick={carsearch} style={{backgroundColor: "#8517FF", fontSize: 12, color: "white"}}>
                    SEARCH BY CAR
                </Button>
                <Button variant="contained" style={{backgroundColor: "#8517FF", fontSize: 12, marginLeft: "5px", color: "white"}}>
                    SEARCH BY VIN
                    </Button>
                </Box>
                </Box>
            </Box>     
            : ""}
            {/* {carsearchclicked ? <Box>

             <Grid container style={{marginTop: "65px"}} >
            <Grid item  className={classes.vehiclegrid} >
             <Card className={classes.vehicleforsmallscreen}  >

              
                
                <CardContent className={classes.headingwithform} >
                    <Typography component="h5" variant="h5">
                        Search By Vehicle
                    </Typography>
                 
                    <form className={classes.mainform} noValidate autoComplete="off">
                    <div  >
                    <FormControl variant="filled" className={classes.formControl}>
                        <InputLabel htmlFor="filled-age-native-simple">Age</InputLabel>
                        <Select
                        native
                        value={state.age}
                        onChange={handleChange}
                        inputProps={{
                            name: 'age',
                            id: 'filled-age-native-simple',
                        }}
                        >
                        <option aria-label="None" value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                        </Select>
                    </FormControl>
   
          <Button className={classes.searchbutton} style={{width: "100%"}}>
              Search
          </Button>
          </div>
       </form>
                </CardContent>
                
            </Card>

                            
            </Grid>
            </Grid> 
                </Box>: " " } 
                                <iframe src={bannervideo}
                width="100%"
                height="100%"
                 allow='autoplay; encrypted-media'
                title='video'
/>
                
                */}
                {isMatch ? <Box style={{ width: "100%"}}>
                  <Autocomplete
                
               className={classes.onlysearch}
                id=" "
                freeSolo
                disableClearable
                options={products.map((option) => option.name)}
                renderInput={(params) => (
                <TextField
                                        {...params}
                    placeholder="Search"
                    size="small"
                    margin="normal"
                    required
                    variant="outlined"
                    autoFocus
                    InputProps={{ ...params.InputProps, type: 'search',  endAdornment: (
                        <InputAdornment position="end">
                          <SearchIcon className="material-icons" style={{backgroundColor: "#8517FF",color: "white", height: "40px",width:"42px", borderRadius: "0px 25px 25px 0px"}}/>
                        </InputAdornment>
                      ),style: {
                        paddingRight: "0",
                     }, classes:{notchedOutline:classes.noBorder} }}
                    
                />
                )}
            />  

            </Box>   :
                <Box className={classes.banner} >
                
                <Box style={{marginTop: "65px", width: "100%"}}>
                  <Autocomplete
                
                className={classes.searchbar}
                id=" "
                freeSolo
                disableClearable
                options={products.map((option) => option.name)}
                renderInput={(params) => (
                <TextField
                    className={classes.MuiFormControlMarginNormal}
                    {...params}
                    placeholder="Search"
                    size="small"
                    margin="normal"
                    required
                    variant="outlined"
                    autoFocus
                    InputProps={{ ...params.InputProps, type: 'search',  endAdornment: (
                        <InputAdornment position="end">
                          <SearchIcon className="material-icons" style={{backgroundColor: "#8517FF",color: "white", height: "40px",width:"42px", borderRadius: "0px 25px 25px 0px"}}/>
                        </InputAdornment>
                      ),style: {
                        paddingRight: "0",
                     }, classes:{notchedOutline:classes.noBorder} }}
                    
                />
                )}
            />  

            </Box> 
            {/* <Typography className={classes.textbelowsearchbar} variant="h4" style={{color: "white"}}>GENNUINE AUTOMOTIVE SPARE PARTS</Typography>    */}
             <h1>
      <TextTransition
        text={ TEXTS[index % TEXTS.length] }
        springConfig={ presets.wobbly }
        style={{color: "white", fontFamily: "Imprint MT Shadow"}}
        className={classes.textbelowsearchbar}
      />
      <Typography className={classes.textbelowsearchbar} variant="h4" style={{color: "white", marginTop:"10px"}}>SPARE PARTS WORLDWIDE.</Typography>
    </h1>              
    {/* <style>
        {`
            @keyframes slideIn {
                0% {
                  transform: translateX(-900px);
                }
                100% {
                  transform: translateX(0);
                }
              }
              ` }
        </style>
        <Box>
        <Typography variant="h4" className={classes.mainheading}>Fast</Typography>
        </Box>
        <Box>
    <Typography variant="h4" className={classes.headingpart2}>Genuine</Typography>
    </Box>
    <Box>
    <Typography variant="h4" className={classes.headingpart3}>Reliable</Typography>
    </Box>
    <Box>
    <Typography variant="h4" className={classes.staticheading} >WORLDWIDE.</Typography> */}
    {/* </Box> */}
    <Box className={classes.bannerimage}>
                <Box  >
                 <video className={classes.mainvideo} loop autoPlay muted>
                     
        <source src={require('../../src/video/banner video.mp4').default} type="video/mp4" />
</video> 
{/* <video>
<source src={bannerVideo} type="video/mp4" /></video> */}
              {/* <iframe src={bannerVideo}
                width="100%"
                height="100%"
                 allow='autoplay; encrypted-media'
                title='video'
/> */}
                </Box>
                </Box>
                </Box> }
            <Box component="span">
                <Typography variant="h4" className={classes.featuredproducts} >
                    Featured Products
                </Typography>
            </Box>
         {isMatch ?  
       <Box>

           </Box>     
     : <>{isMatchmediumscreen ? "" :<Box>            
         <Carousel />
     {/*  change slide width of carousel using props
     
     
     <Grid container  className={classes.featuredprod}  style={{margin: "0px"}}>
         
         <Grid item xs={2} sm={2} md={2} >
             <Card className={classes.border}>
                 <CardActions>
                     <CardMedia
                       className={classes.media}
                      
                     />
                 </CardActions>
             </Card>
         </Grid>
       
         <Grid item xs={2} sm={2} md={2}>
             <Card className={classes.border}>
                 <CardActions>
                 <CardMedia
                       className={classes.media}
                      
                     />
                 </CardActions>
             </Card>
         </Grid>
         
         <Grid item xs={2} sm={2} md={2}>
             <Card className={classes.border}>
                 <CardActions>
                 <CardMedia
                       className={classes.media}
                      
                     />
                 </CardActions>
             </Card>
         </Grid>
         
         <Grid item xs={2} sm={2} md={2}>
             <Card className={classes.border}>
                 <CardActions>
                 <CardMedia
                       className={classes.media}
                      
                     />
                 </CardActions>
             </Card>
         </Grid>
         
          <Grid item xs={2} sm={2} md={2}>
             <Card className={classes.border}>
                 <CardActions>
                 <CardMedia
                       className={classes.media}
                      
                     />
                 </CardActions>
             </Card>
         </Grid> 
         <Grid item xs={2} sm={2} md={2}>
             <Card className={classes.border}>
                 <CardActions>
                 <CardMedia
                       className={classes.media}
                      
                     />
                 </CardActions>
             </Card>
         </Grid> 
      
     </Grid> */}
 </Box>} </>}
        



            <Box>
            <Typography variant="h4" className={classes.searchcategory}>
                Search By Category
            </Typography>
            </Box>
            <Box>
                
                    <Grid container>
                        <Grid item lg={5}>
                        <Box className={classes.buttons} onMouseOver={handleHover} >
                    <Button variant="outlined"  className={classes.oembrands}>
                        Oem Brands
                    </Button>
                    </Box>
                    </Grid>


                    <Grid item lg={6}>
                    <Box className={classes.buttons}  >
                    <Button variant="outlined" className={classes.vehiclebrands} onClick={showbrandimages} onMouseOver={vehiclehover} >
                        Vehicle Brands
                    </Button>
                    </Box>
                    </Grid>
                    </Grid>
                
                {selectedbutton === false ? <div> 
                <Box  style={{margin: "25px 50px 25px 33px"}}>
                    <Grid container className={classes.appearItem} justify="space-evenly">
                    <Grid item lg={2} >
                           
                           <Box className={classes.brandimages} >
                               
                           <img src={boschimg} style={{width: "100%", height: "100%"}} alt="bosch" />
                           
                           </Box>
                          </Grid>
                        <Grid item lg={2} >
                           
                           <Box className={classes.brandimages} >
                           <img src={hyundaiimg} style={{width: "100%", height: "100%"}} alt="hyundai"/>

                           </Box>
                          </Grid>
                        <Grid item lg={2} >
                           
                           <Box className={classes.brandimages}>
                           <img src={Valeoimg} style={{width: "100%", height: "100%"}} alt="valeo"/>

                           </Box>
                          </Grid>
                        <Grid item lg={2} >
                           
                           <Box className={classes.brandimages}>
                           <img src={donaldsonimg} style={{width: "100%", height: "100%"}} alt="donaldson"/>

                           </Box>
                          </Grid>
                        <Grid item lg={2} >
                           
                           <Box className={classes.brandimages}>
                           <img src={ZFimg} style={{width: "100%", height: "100%"}} alt="ZF"/>

                           </Box>
                          </Grid>
                          <Grid item lg={2} >
                           
                           <Box className={classes.brandimages}>
                           <img src={Delphiimg} style={{width: "100%", height: "100%"}} alt="delphi"/>

                           </Box>
                          </Grid>
                          
                        <Grid item lg={2} >
                           
                           
                          </Grid>
                          <Grid item lg={2} >

                          </Grid>
                    </Grid>

                </Box> <Box style={{margin: "25px 50px 25px 33px"}}>
                   <Grid container className={classes.appearItem} justify="space-evenly">
                    <Grid item lg={2} >
                           
                           <Box className={classes.brandimages}>
                           <img src={wabcoimg} style={{width: "100%", height: "100%"}} alt="wabco"/>

                           </Box>
                          </Grid>
                        <Grid item lg={2} >
                           
                           <Box className={classes.brandimages}>
                           <img src={mandoimg} style={{width: "100%", height: "100%"}} alt="mando"/>

                           </Box>
                          </Grid>
                        <Grid item lg={2} >
                           
                           <Box className={classes.brandimages}>
                           <img src={ngkimg} style={{width: "100%", height: "100%"}} alt="ngk"/>

                           </Box>
                          </Grid>
                        <Grid item lg={2} >
                           
                           <Box className={classes.brandimages}>
                           <img src={lumaximg} style={{width: "100%", height: "100%"}} alt="lumax"/>

                           </Box>
                          </Grid>
                        <Grid item lg={2} >
                           
                           <Box className={classes.brandimages}>
                           <img src={mannfilterimg} style={{width: "100%", height: "100%"}} alt="mann"/>

                           </Box>
                          </Grid>
                        <Grid item lg={2} >
                           
                           <Box className={classes.brandimages}>
                           <img src={knorrimg} style={{width: "100%", height: "100%"}} alt="knorr"/>

                           </Box>
                          </Grid>

                        <Grid item lg={2} >

                           
                          </Grid>
                          <Grid item lg={2} >

                          </Grid>
                    </Grid>
                </Box> 
                <Box style={{margin: "25px 50px 25px 33px"}}>
                   <Grid container className={classes.appearItem} justify="space-evenly">
                    <Grid item lg={2} >
                           
                           <Box className={classes.brandimages}>
                           <img src={fleetguardimg} style={{width: "100%", height: "100%"}} alt="fleetguard"/>

                           </Box>
                          </Grid>
                          <Grid item lg={10}>

                        </Grid>      
                    </Grid>
                    
                </Box> 
                        </div>
                : <div >
                <Box style={{margin: "25px 50px 25px 33px"}}>
                   <Grid container className={classes.appearItem} justify="space-evenly">
                    <Grid item lg={2} >
                           
                           <Box className={classes.brandimages}>
                           <img src={nissanimg} style={{width: "100%", height: "100%"}} alt="nissan"/>

                           </Box>
                          </Grid>
                        <Grid item lg={2} >
                           
                           <Box className={classes.brandimages}>
                           <img src={Hyundaiimg} style={{width: "100%", height: "100%"}} alt="hyundai"/>

                           </Box>
                          </Grid>
                        <Grid item lg={2} >
                           
                           <Box className={classes.brandimages}>
                           <Link to="/brandlist">
                           <img src={suzukiimg} style={{width: "100%", height: "100%"}} alt="suzuki"/>
                            </Link>
                           </Box>
                          </Grid>
                        <Grid item lg={2} >
                           
                           <Box className={classes.brandimages}>
                           <img src={fordimg} style={{width: "100%", height: "100%"}} alt="ford"/>

                           </Box>
                          </Grid>
                        <Grid item lg={2} >
                           
                           <Box className={classes.brandimages}>
                           <img src={tataimg} style={{width: "100%", height: "100%"}} alt="tata"/>

                           </Box>
                          </Grid>
                        <Grid item lg={2} >
                           
                           <Box className={classes.brandimages}>
                           <img src={mahindraimg} style={{width: "100%", height: "100%"}} alt="mahindra"/>

                           </Box>
                          </Grid>

                        <Grid item lg={2} >
                           
                           
                          </Grid>
                          <Grid item lg={2} >

                          </Grid>
                    </Grid>
                </Box>
                <Box style={{margin: "25px 50px 25px 33px"}}>
                   <Grid container className={classes.appearItem} justify="space-evenly">
                    <Grid item lg={2} >
                           
                           <Box className={classes.brandimages}>

                           <img src={hondaimg} style={{width: "100%", height: "100%"}} alt="honda"/>

                           </Box>
                          </Grid>
                        <Grid item lg={2} >
                           
                           <Box className={classes.brandimages}>

                           <img src={renaultimg} style={{width: "100%", height: "100%"}} alt="renault"/>

                           </Box>
                          </Grid>
                        <Grid item lg={2} >
                           
                           <Box className={classes.brandimages}>

                           <img src={manimg} style={{width: "100%", height: "100%"}} alt="man"/>

                           </Box>
                          </Grid>
                        <Grid item lg={2} >
                           
                           <Box className={classes.brandimages}>

                           <img src={ashokimg} style={{width: "100%", height: "100%"}} alt="ashok"/>

                           </Box>
                          </Grid>
                        <Grid item lg={2} >
                           
                           <Box className={classes.brandimages}>

                           <img src={volkswagenimg} style={{width: "100%", height: "100%"}} alt="volkswagen"/>

                           </Box>
                          </Grid>
                        <Grid item lg={2} >
                           
                           <Box className={classes.brandimages}>
                            <NavLink to="/vehicle/chevrolet">
                           <img src={cheveroletimg} style={{width: "100%", height: "100%"}} alt="cheverolet"/>
                            </NavLink>
                           </Box>
                          </Grid>

                        <Grid item lg={2} >
                           
                           
                          </Grid>
                          <Grid item lg={2} >

                          </Grid>
                    </Grid>
                </Box>
                </div>} 
                {/* <Modal open={open} onClose={handleClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
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
                <Box className={classes.buttons} style={{ display: "flex", justifyContent: "center" }}>
                    <Button variant="outlined" style={{ width: "45%" }} className={classes.space}>
                        Vehicle Brands
                    </Button>
                </Box> */}
            
        
        
        
        <Box className={classes.vehiclesection}>
        <Box component="span">
            <Typography variant="h4" className={classes.searchbyvehicle}>
                Search By Vehicle
            </Typography>
        </Box>
        <Card className={classes.category} >
            <CardActions>
            <FormControl className={classes.margin} style={{ backgroundColor: "white", width: "20%", borderRadius: "15px" }}>
                <InputLabel id="demo-customized-select-label">Car Maker</InputLabel>
                <Select labelId="demo-customized-select-label" id="demo-customized-select" value={carmaker} onChange={handleChange}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Hyundai</MenuItem>
                    <MenuItem value={20}>Maruti</MenuItem>
                    <MenuItem value={30}>Zen</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.margin} style={{ backgroundColor: "white", width: "20%", borderRadius: "15px" }}>
                <InputLabel id="demo-customized-select-label">Model Line</InputLabel>
                <Select labelId="demo-customized-select-label" id="demo-customized-select" value={carmaker} onChange={handleChange}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Hyundai</MenuItem>
                    <MenuItem value={20}>Maruti</MenuItem>
                    <MenuItem value={30}>Zen</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.margin} style={{ backgroundColor: "white", width: "20%", borderRadius: "15px" }}>
                <InputLabel id="demo-customized-select-label">Year</InputLabel>
                <Select labelId="demo-customized-select-label" id="demo-customized-select" value={carmaker} onChange={handleChange}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Hyundai</MenuItem>
                    <MenuItem value={20}>Maruti</MenuItem>
                    <MenuItem value={30}>Zen</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.margin} style={{ backgroundColor: "white", width: "20%", borderRadius: "15px" }}>
                <InputLabel id="demo-customized-select-label">Part No.</InputLabel>
                <Select labelId="demo-customized-select-label" id="demo-customized-select" value={carmaker} onChange={handleChange}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Hyundai</MenuItem>
                    <MenuItem value={20}>Maruti</MenuItem>
                    <MenuItem value={30}>Zen</MenuItem>
                </Select>
            </FormControl>
            <ThemeProvider theme={theme}>
                <Button variant="contained"  className={classes.margin} style={{ padding: "12px 65px", backgroundColor: "black", color: "white", borderRadius: "15px" }}>
                    Search
                </Button>
            </ThemeProvider>
            </CardActions>
        </Card>
       </Box>
        </Box>
  
        <Box style={{ width: 200, whiteSpace: 'nowrap' }}>
            <Typography variant="h4" className={classes.searchcategory}>
                Search By Category
            </Typography>
            </Box>
            {isMatch ?
            <Box component="div" overflow="auto">
                <Grid container>
                    <Grid item lg={2} className={classes.categorytypes}>
                <Card className={classes.type1 } >
                    <CardActions>
                        <CardContent>
                            <Box style={{ width:"10rem", height: "5rem"}}>
                            <Link to="/productlist"><img src={maintainanceimg} style={{width: "100%", height: "100%"}} alt="maintenance service parts" /></Link>
                            </Box>
                        <Typography className={classes.typescontent} style={{paddingLeft: "30px"}}>Maintenance Service Parts</Typography>
                        </CardContent>
                    </CardActions>
                </Card>
                </Grid>
                <Grid item lg={2} className={classes.categorytypes}>
                <Card className={classes.type1}>
                    <CardActions>
                    <CardContent>
                    <Box style={{ width:"10rem", height: "5rem"}}>
                            <Link to="/productlist"><img src={airimg} style={{width: "100%", height: "100%"}} alt="air conditioning" /></Link>
                            </Box>
                        <Typography className={classes.typescontent} style={{paddingLeft: "30px"}}>Air Conditioning</Typography>
                        </CardContent>
                    </CardActions>
                </Card>
                </Grid>
                <Grid item lg={2} className={classes.categorytypes}>
                <Card className={classes.type1}>
                    <CardActions>
                    <CardContent>
                    <Box style={{ width:"10rem", height: "5rem"}}>
                            <Link to="/productlist"><img src={beltsimg} style={{width: "100%", height: "100%"}} alt="Belts, Chains and Rollers" /></Link>
                            </Box>
                        <Typography className={classes.typescontent}>Belts, Chains and Rollers</Typography>
                        </CardContent>
                    </CardActions>
                </Card>
                </Grid>
                <Grid item lg={2} className={classes.categorytypes}>
                <Card className={classes.type1}>
                    <CardActions>
                    <CardContent>
                    <Box style={{ width:"10rem", height: "5rem"}}>
                            <Link to="/productlist"><img src={bodyimg} style={{width: "100%", height: "100%"}} alt="body" /></Link>
                            </Box>
                        <Typography className={classes.typescontent} style={{padding: "80px"}}>Body</Typography>
                        </CardContent>
                    </CardActions>
                </Card>
                </Grid>
                <Grid item lg={2} className={classes.categorytypes}>
                <Card className={classes.type1}>
                    <CardActions>
                    <CardContent>
                    <Box style={{ width:"10rem", height: "5rem"}}>
                            <Link to="/productlist"><img src={breaksystemimg} style={{width: "100%", height: "100%"}} alt="break system"/></Link>
                            </Box>
                        <Typography className={classes.typescontent}>Break System</Typography>
                        </CardContent>
                    </CardActions>
                </Card>
                </Grid>
                <Grid item lg={2} className={classes.categorytypes}>
                <Card className={classes.type1}>
                    <CardActions>
                    <CardContent>
                    <Box style={{ width:"10rem", height: "5rem"}}>
                            <Link to="/productlist"><img src={engineimg} style={{width: "100%", height: "100%"}} alt="engine" /></Link>
                            </Box>
                        <Typography className={classes.typescontent} >Engine</Typography>
                        </CardContent>
                    </CardActions>
                </Card>
                </Grid>

                </Grid>
            </Box>
           : <>{isMatchmediumscreen ? <Box>
               
            <Box>
            <Grid container>
                <Grid item xs={2}>
            <Card className={classes.productbackground} style={{width: "230px", marginLeft: "20px", marginBottom: "10px",  borderRadius: "20px"}}>
                <CardActions>
                    <CardContent>
                        <Box style={{ width:"10rem", height: "5rem"}}>
                        <Link to="/productlist"><img src={maintainanceimg} style={{width: "100%", height: "100%"}} alt="maintenance service parts" /></Link>
                        </Box>
                    <Typography className={classes.parts} style={{paddingLeft: "30px"}}>Maintenance Service Parts</Typography>
                    </CardContent>
                </CardActions>
            </Card>
            </Grid>
            <Grid item xs={2}>
            <Card className={classes.productbackground} style={{width: "230px", marginLeft: "95px", padding: "11px",  borderRadius: "20px"}}>
                <CardActions>
                <CardContent>
                <Box style={{ width:"10rem", height: "5rem"}}>
                        <Link to="/productlist"><img src={airimg} style={{width: "100%", height: "100%"}} alt="air conditioning"/></Link>
                        </Box>
                    <Typography className={classes.parts} style={{paddingLeft: "30px"}}>Air Conditioning</Typography>
                    </CardContent>
                </CardActions>
            </Card>
            </Grid>
            <Grid item xs={2}>
            <Card className={classes.productbackground} style={{width: "230px", marginLeft: "175px",  borderRadius: "20px"}}>
                <CardActions>
                <CardContent>
                <Box style={{ width:"10rem", height: "5rem"}}>
                        <Link to="/productlist"><img src={beltsimg} style={{width: "100%", height: "100%"}} alt="belts, chains and rollers"/></Link>
                        </Box>
                    <Typography className={classes.parts}>Belts, Chains and Rollers</Typography>
                    </CardContent>
                </CardActions>
            </Card>
            </Grid>
            <Grid item xs={2}>
            <Card className={classes.productbackground} style={{width: "230px", padding: "10px", marginLeft: "250px",  borderRadius: "20px"}}>
                <CardActions>
                <CardContent>
                <Box style={{ width:"10rem", height: "5rem"}}>
                        <Link to="/productlist"><img src={bodyimg} style={{width: "100%", height: "100%"}} alt="body"/></Link>
                        </Box>
                    <Typography className={classes.parts}>Body</Typography>
                    </CardContent>
                </CardActions>
            </Card>
            </Grid>
            
 
            </Grid>
        </Box>
       
 
        <Box>
            <Grid container>
                <Grid item xs={2}>
            <Card className={classes.productbackground} style={{width: "230px", marginLeft: "20px", marginBottom: "10px", padding: "8px",  borderRadius: "20px"}}>
                <CardActions>
                    <CardContent>
                    <Box style={{ width:"10rem", height: "5rem"}}>
                        <Link to="/productlist"><img src={clutchimg} style={{width: "100%", height: "100%"}} alt="clutch"/></Link>
                        </Box>
                    <Typography className={classes.parts}>Clutch System</Typography>
                    </CardContent>
                </CardActions>
            </Card>
            </Grid>
            <Grid item xs={2}>
            <Card className={classes.productbackground} style={{width: "230px", marginLeft: "95px", padding: "6px",  borderRadius: "20px"}}>
                <CardActions>
                <CardContent>
                <Box style={{ width:"10rem", height: "5rem"}}>
                        <Link to="/productlist"><img src={enginecoolingimg} style={{width: "100%", height: "100%"}} alt="engine cooling system" /></Link>
                        </Box>
                    <Typography className={classes.parts} style={{paddingLeft: "0px"}}>Engine Cooling System</Typography>
                    </CardContent>
                </CardActions>
            </Card>
            </Grid>
            <Grid item xs={2}>
            <Card className={classes.productbackground} style={{width: "230px", marginLeft: "175px", padding: "10px",  borderRadius: "20px"}}>
                <CardActions>
                <CardContent>
                <Box style={{ width:"10rem", height: "5rem"}}>
                        <Link to="/productlist"><img src={exhaustsystemimg} style={{width: "100%", height: "100%"}} alt="exhaust system" /></Link>
                        </Box>
                    <Typography className={classes.parts} style={{paddingLeft: "30px"}}>Exhaust System</Typography>
                    </CardContent>
                </CardActions>
            </Card>
            </Grid>
            <Grid item xs={2}>
            <Card className={classes.productbackground} style={{width: "230px", padding: "10px", marginLeft: "250px",  borderRadius: "20px"}}>
                <CardActions>
                <CardContent>
                <Box style={{ width:"10rem", height: "5rem"}}>
                        <Link to="/productlist"><img src={filtersimg} style={{width: "100%", height: "100%"}} alt="filters"/></Link>
                        </Box>
                    <Typography className={classes.parts} >Filters</Typography>
                    </CardContent>
                </CardActions>
            </Card>
            </Grid>
            
 
            </Grid>
        </Box>
        <Box>
            <Grid container>
                <Grid item xs={2}>
            <Card className={classes.productbackground} style={{width: "230px",  marginLeft: "20px", marginBottom: "10px",  borderRadius: "20px"}}>
                <CardActions>
                    <CardContent>
                    <Box style={{ width:"10rem", height: "5rem"}}>
                        <Link to="/productlist"><img src={ignitionimg} style={{width: "100%", height: "100%"}} alt="ignition and glowplug system"/></Link>
                        </Box>
                    <Typography className={classes.parts}>Ignition and Glowplug System</Typography>
                    </CardContent>
                </CardActions>
            </Card>
            </Grid>
            <Grid item xs={2}>
            <Card className={classes.productbackground} style={{width: "230px", marginLeft: "95px", padding: "10px",  borderRadius: "20px"}}>
                <CardActions>
                <CardContent>
                <Box style={{ width:"10rem", height: "5rem"}}>
                        <Link to="/productlist"><img src={interiorimg} style={{width: "100%", height: "100%"}} alt="interior and comfort"/></Link>
                        </Box>
                    <Typography className={classes.parts} style={{paddingLeft: "15px"}}>Interior and comfort</Typography>
                    </CardContent>
                </CardActions>
            </Card>
            </Grid>
            <Grid item xs={2}>
            <Card className={classes.productbackground} style={{width: "230px", padding: "8px", marginLeft: "175px",  borderRadius: "20px"}}>
                <CardActions>
                <CardContent>
                <Box style={{ width:"10rem", height: "5rem"}}>
                        <Link to="/productlist"><img src={lighteningimg} style={{width: "100%", height: "100%"}} alt="lightening" /></Link>
                        </Box>
                    <Typography className={classes.parts}>Lighting</Typography>
                    </CardContent>
                </CardActions>
            </Card>
            </Grid>
            <Grid item xs={2}>
            <Card className={classes.productbackground} style={{width: "230px", padding: "8px",  marginLeft: "250px", borderRadius: "20px"}}>
                <CardActions>
                <CardContent>
                <Box style={{ width:"10rem", height: "5rem"}}>
                        <Link to="/productlist"><img src={oilsimg} style={{width: "100%", height: "100%"}} alt="oils and fluids"/></Link>
                        </Box>
                    <Typography className={classes.parts}>Oils and Fluids</Typography>
                    </CardContent>
                </CardActions>
            </Card>
            </Grid>

            </Grid>
        </Box>
        <Box>
            <Grid container>
                <Grid item xs={2}>
            <Card className={classes.productbackground} style={{width: "230px",  marginLeft: "20px", marginBottom: "10px",  borderRadius: "20px"}}>
                <CardActions>
                    <CardContent>
                    <Box style={{ width:"10rem", height: "5rem"}}>
                        <Link to="/productlist"><img src={sensorsimg} style={{width: "100%", height: "100%"}} alt="sensors, relays and control units" /></Link>
                        </Box>
                    <Typography className={classes.parts}>Sensors, Relays and Control Units</Typography>
                    </CardContent>
                </CardActions>
            </Card>
            </Grid>
            <Grid item xs={2}>
            <Card className={classes.productbackground} style={{width: "230px",  marginLeft: "95px",padding: "10px",  borderRadius: "20px"}}>
                <CardActions>
                <CardContent>
                <Box style={{ width:"10rem", height: "5rem"}}>
                        <Link to="/productlist"><img src={steeringimg} style={{width: "100%", height: "100%"}} alt="steering"/></Link>
                        </Box>
                    <Typography className={classes.parts}>Steering</Typography>
                    </CardContent>
                </CardActions>
            </Card>
            </Grid>
            <Grid item xs={2}>
            <Card className={classes.productbackground} style={{width: "230px", marginLeft: "175px", padding: "10px",  borderRadius: "20px"}}>
                <CardActions>
                <CardContent>
                <Box style={{ width:"10rem", height: "5rem"}}>
                        <Link to="/productlist"><img src={suspensionimg} style={{width: "100%", height: "100%"}} alt="suspension and arms"/></Link>
                        </Box>
                    <Typography className={classes.parts} style={{paddingLeft: "0px"}}>Suspension and Arms</Typography>
                    </CardContent>
                </CardActions>
            </Card>
            </Grid>
            <Grid item xs={2}>
           <Card className={classes.productbackground} style={{width: "230px", padding: "10px", marginLeft: "250px", borderRadius: "20px"}}>
               <CardActions>
               <CardContent>
               <Box style={{ width:"10rem", height: "5rem"}}>
                       <Link to="/productlist"><img src={transmissionimg} style={{width: "100%", height: "100%"}} alt="transmission"/></Link>
                       </Box>
                   <Typography className={classes.parts}>Transmission</Typography>
                   </CardContent>
               </CardActions>
           </Card>
           </Grid>
            {/* <Grid item xs={2}>
            <Card className={classes.productbackground} style={{width: "230px", padding: "10px",  borderRadius: "20px"}}>
                <CardActions>
                <CardContent>
                <Box style={{ width:"10rem", height: "5rem"}}>
                        <Link to="/productlist"><img src={transmissionimg} style={{width: "100%", height: "100%"}} alt="transmission"/></Link>
                        </Box>
                    <Typography className={classes.parts}>Transmission</Typography>
                    </CardContent>
                </CardActions>
            </Card>
            </Grid>
            <Grid item xs={2}>
            <Card className={classes.productbackground} style={{width: "230px", padding: "10px",  borderRadius: "20px"}}>
                <CardActions>
                <CardContent>
                <Box style={{ width:"10rem", height: "5rem"}}>
                        <Link to="/productlist"><img src={trimsimg} style={{width: "100%", height: "100%"}} alt="trims"/></Link>
                        </Box>
                    <Typography className={classes.parts}>Trims</Typography>
                    </CardContent>
                </CardActions>
            </Card>
            </Grid>
            <Grid item xs={2}>
            <Card className={classes.productbackground} style={{width: "230px", padding: "10px", borderRadius: "20px"}}>
                <CardActions>
                <CardContent>
                <Box style={{ width:"10rem", height: "5rem"}}>
                        <Link to="/productlist"><img src={wheelsimg} style={{width: "100%", height: "100%"}} alt="wheels"/></Link>
                        </Box>
                    <Typography className={classes.parts}>Wheels</Typography>
                    </CardContent>
                </CardActions>
            </Card>
            </Grid> */}
            </Grid>
            </Box></Box> : <>{isMatchlargescreen ? 
           <Box>
               
           <Box>
           <Grid container>
               <Grid item xs={2}>
           <Card className={classes.productbackground} style={{width: "230px", marginLeft: "10px", marginBottom: "10px",  borderRadius: "20px"}}>
               <CardActions>
                   <CardContent>
                       <Box style={{ width:"10rem", height: "5rem"}}>
                       <Link to="/productlist"><img src={maintainanceimg} style={{width: "100%", height: "100%"}} alt="maintenance service parts" /></Link>
                       </Box>
                   <Typography className={classes.parts} style={{paddingLeft: "30px"}}>Maintenance Service Parts</Typography>
                   </CardContent>
               </CardActions>
           </Card>
           </Grid>
           <Grid item xs={2}>
           <Card className={classes.productbackground} style={{width: "230px", padding: "11px",  borderRadius: "20px"}}>
               <CardActions>
               <CardContent>
               <Box style={{ width:"10rem", height: "5rem"}}>
                       <Link to="/productlist"><img src={airimg} style={{width: "100%", height: "100%"}} alt="air conditioning"/></Link>
                       </Box>
                   <Typography className={classes.parts} style={{paddingLeft: "30px"}}>Air Conditioning</Typography>
                   </CardContent>
               </CardActions>
           </Card>
           </Grid>
           <Grid item xs={2}>
           <Card className={classes.productbackground} style={{width: "230px",  borderRadius: "20px"}}>
               <CardActions>
               <CardContent>
               <Box style={{ width:"10rem", height: "5rem"}}>
                       <Link to="/productlist"><img src={beltsimg} style={{width: "100%", height: "100%"}} alt="belts, chains and rollers"/></Link>
                       </Box>
                   <Typography className={classes.parts}>Belts, Chains and Rollers</Typography>
                   </CardContent>
               </CardActions>
           </Card>
           </Grid>
           <Grid item xs={2}>
           <Card className={classes.productbackground} style={{width: "230px", padding: "10px",  borderRadius: "20px"}}>
               <CardActions>
               <CardContent>
               <Box style={{ width:"10rem", height: "5rem"}}>
                       <Link to="/productlist"><img src={bodyimg} style={{width: "100%", height: "100%"}} alt="body"/></Link>
                       </Box>
                   <Typography className={classes.parts}>Body</Typography>
                   </CardContent>
               </CardActions>
           </Card>
           </Grid>
           <Grid item xs={2}>
           <Card className={classes.productbackground} style={{width: "230px", padding: "10px",  borderRadius: "20px"}}>
               <CardActions>
               <CardContent>
               <Box style={{ width:"10rem", height: "5rem"}}>
                       <Link to="/productlist"><img src={breaksystemimg} style={{width: "100%", height: "100%"}} alt="break system" /></Link>
                       </Box>
                   <Typography className={classes.parts}>Break System</Typography>
                   </CardContent>
               </CardActions>
           </Card>
           </Grid>
           <Grid item xs={2}>
           <Card className={classes.productbackground} style={{width: "230px", padding: "10px",  borderRadius: "20px"}}>
               <CardActions>
               <CardContent>
               <Box style={{ width:"10rem", height: "5rem"}}>
                       <Link to="/productlist"><img src={engineimg} style={{width: "100%", height: "100%"}} alt="engine"/></Link>
                       </Box>
                   <Typography className={classes.parts}>Engine</Typography>
                   </CardContent>
               </CardActions>
           </Card>
           </Grid>

           </Grid>
       </Box>
      

       <Box>
           <Grid container>
               <Grid item xs={2}>
           <Card className={classes.productbackground} style={{width: "230px", marginLeft: "10px", marginBottom: "10px", padding: "8px",  borderRadius: "20px"}}>
               <CardActions>
                   <CardContent>
                   <Box style={{ width:"10rem", height: "5rem"}}>
                       <Link to="/productlist"><img src={clutchimg} style={{width: "100%", height: "100%"}} alt="clutch"/></Link>
                       </Box>
                   <Typography className={classes.parts}>Clutch System</Typography>
                   </CardContent>
               </CardActions>
           </Card>
           </Grid>
           <Grid item xs={2}>
           <Card className={classes.productbackground} style={{width: "230px", padding: "6px",  borderRadius: "20px"}}>
               <CardActions>
               <CardContent>
               <Box style={{ width:"10rem", height: "5rem"}}>
                       <Link to="/productlist"><img src={enginecoolingimg} style={{width: "100%", height: "100%"}} alt="engine cooling system" /></Link>
                       </Box>
                   <Typography className={classes.parts} style={{paddingLeft: "0px"}}>Engine Cooling System</Typography>
                   </CardContent>
               </CardActions>
           </Card>
           </Grid>
           <Grid item xs={2}>
           <Card className={classes.productbackground} style={{width: "230px", padding: "10px",  borderRadius: "20px"}}>
               <CardActions>
               <CardContent>
               <Box style={{ width:"10rem", height: "5rem"}}>
                       <Link to="/productlist"><img src={exhaustsystemimg} style={{width: "100%", height: "100%"}} alt="exhaust system" /></Link>
                       </Box>
                   <Typography className={classes.parts} style={{paddingLeft: "30px"}}>Exhaust System</Typography>
                   </CardContent>
               </CardActions>
           </Card>
           </Grid>
           <Grid item xs={2}>
           <Card className={classes.productbackground} style={{width: "230px", padding: "10px",  borderRadius: "20px"}}>
               <CardActions>
               <CardContent>
               <Box style={{ width:"10rem", height: "5rem"}}>
                       <Link to="/productlist"><img src={filtersimg} style={{width: "100%", height: "100%"}} alt="filters"/></Link>
                       </Box>
                   <Typography className={classes.parts}>Filters</Typography>
                   </CardContent>
               </CardActions>
           </Card>
           </Grid>
           <Grid item xs={2}>
           <Card className={classes.productbackground} style={{width: "230px", padding: "10px",  borderRadius: "20px"}}>
               <CardActions>
               <CardContent>
               <Box style={{ width:"10rem", height: "5rem"}}>
                       <Link to="/productlist"><img src={fuelsupplyimg} style={{width: "100%", height: "100%"}} alt="fuel supply system"/></Link>
                       </Box>
                   <Typography className={classes.parts} style={{paddingLeft: "15px"}}>Fuel Supply System</Typography>
                   </CardContent>
               </CardActions>
           </Card>
           </Grid>
           <Grid item xs={2}>
           <Card className={classes.productbackground} style={{width: "230px", marginBottom: "10px",  borderRadius: "20px"}}>
               <CardActions>
               <CardContent>
               <Box style={{ width:"10rem", height: "5rem"}}>
                       <Link to="/productlist"><img src={gasketsimg} style={{width: "100%", height: "100%"}} alt="gaskets and sealing rings"/></Link>
                       </Box>
                   <Typography className={classes.parts}>Gaskets and Sealing Rings</Typography>
                   </CardContent>
               </CardActions>
           </Card>
           </Grid>

           </Grid>
       </Box>
       <Box>
           <Grid container>
               <Grid item xs={2}>
           <Card className={classes.productbackground} style={{width: "230px",  marginLeft: "10px", marginBottom: "10px",  borderRadius: "20px"}}>
               <CardActions>
                   <CardContent>
                   <Box style={{ width:"10rem", height: "5rem"}}>
                       <Link to="/productlist"><img src={ignitionimg} style={{width: "100%", height: "100%"}} alt="ignition and glowplug system"/></Link>
                       </Box>
                   <Typography className={classes.parts}>Ignition and Glowplug System</Typography>
                   </CardContent>
               </CardActions>
           </Card>
           </Grid>
           <Grid item xs={2}>
           <Card className={classes.productbackground} style={{width: "230px", padding: "10px",  borderRadius: "20px"}}>
               <CardActions>
               <CardContent>
               <Box style={{ width:"10rem", height: "5rem"}}>
                       <Link to="/productlist"><img src={interiorimg} style={{width: "100%", height: "100%"}} alt="interior and comfort"/></Link>
                       </Box>
                   <Typography className={classes.parts} style={{paddingLeft: "15px"}}>Interior and comfort</Typography>
                   </CardContent>
               </CardActions>
           </Card>
           </Grid>
           <Grid item xs={2}>
           <Card className={classes.productbackground} style={{width: "230px", padding: "8px",  borderRadius: "20px"}}>
               <CardActions>
               <CardContent>
               <Box style={{ width:"10rem", height: "5rem"}}>
                       <Link to="/productlist"><img src={lighteningimg} style={{width: "100%", height: "100%"}} alt="lightening" /></Link>
                       </Box>
                   <Typography className={classes.parts} >Lighting</Typography>
                   </CardContent>
               </CardActions>
           </Card>
           </Grid>
           <Grid item xs={2}>
           <Card className={classes.productbackground} style={{width: "230px", padding: "8px",  borderRadius: "20px"}}>
               <CardActions>
               <CardContent>
               <Box style={{ width:"10rem", height: "5rem"}}>
                       <Link to="/productlist"><img src={oilsimg} style={{width: "100%", height: "100%"}} alt="oils and fluids"/></Link>
                       </Box>
                   <Typography className={classes.parts}>Oils and Fluids</Typography>
                   </CardContent>
               </CardActions>
           </Card>
           </Grid>
           <Grid item xs={2}>
           <Card className={classes.productbackground} style={{width: "230px", padding: "8px",  borderRadius: "20px"}}>
               <CardActions>
               <CardContent>
               <Box style={{ width:"10rem", height: "5rem"}}>
                       <Link to="/productlist"><img src={pipesimg} style={{width: "100%", height: "100%"}} alt="pipes and hoses"/></Link>
                       </Box>
                   <Typography className={classes.parts} style={{paddingLeft: "30px"}}>Pipes and Hoses</Typography>
                   </CardContent>
               </CardActions>
           </Card>
           </Grid>
           <Grid item xs={2}>
           <Card className={classes.productbackground} style={{width: "230px", padding: "8px",  borderRadius: "20px"}}>
               <CardActions>
               <CardContent>
               <Box style={{ width:"10rem", height: "5rem"}}>
                       <Link to="/productlist"><img src={repairkitsimg} style={{width: "100%", height: "100%"}} alt="repair kits"/></Link>
                       </Box>
                   <Typography className={classes.parts}>Repair Kits</Typography>
                   </CardContent>
               </CardActions>
           </Card>
           </Grid>

           </Grid>
       </Box>
       <Box>
           <Grid container>
               <Grid item xs={2}>
           <Card className={classes.productbackground} style={{width: "230px",  marginLeft: "10px", marginBottom: "10px",  borderRadius: "20px"}}>
               <CardActions>
                   <CardContent>
                   <Box style={{ width:"10rem", height: "5rem"}}>
                       <Link to="/productlist"><img src={sensorsimg} style={{width: "100%", height: "100%"}} alt="sensors, relays and control units" /></Link>
                       </Box>
                   <Typography className={classes.parts}>Sensors, Relays and Control Units</Typography>
                   </CardContent>
               </CardActions>
           </Card>
           </Grid>
           <Grid item xs={2}>
           <Card className={classes.productbackground} style={{width: "230px", padding: "10px",  borderRadius: "20px"}}>
               <CardActions>
               <CardContent>
               <Box style={{ width:"10rem", height: "5rem"}}>
                       <Link to="/productlist"><img src={steeringimg} style={{width: "100%", height: "100%"}} alt="steering"/></Link>
                       </Box>
                   <Typography className={classes.parts}>Steering</Typography>
                   </CardContent>
               </CardActions>
           </Card>
           </Grid>
           <Grid item xs={2}>
           <Card className={classes.productbackground} style={{width: "230px", padding: "10px",  borderRadius: "20px"}}>
               <CardActions>
               <CardContent>
               <Box style={{ width:"10rem", height: "5rem"}}>
                       <Link to="/productlist"><img src={suspensionimg} style={{width: "100%", height: "100%"}} alt="suspension and arms"/></Link>
                       </Box>
                   <Typography className={classes.parts} style={{paddingLeft: "0px"}}>Suspension and Arms</Typography>
                   </CardContent>
               </CardActions>
           </Card>
           </Grid>
           <Grid item xs={2}>
           <Card className={classes.productbackground} style={{width: "230px", padding: "10px",  borderRadius: "20px"}}>
               <CardActions>
               <CardContent>
               <Box style={{ width:"10rem", height: "5rem"}}>
                       <Link to="/productlist"><img src={transmissionimg} style={{width: "100%", height: "100%"}} alt="transmission"/></Link>
                       </Box>
                   <Typography className={classes.parts}>Transmission</Typography>
                   </CardContent>
               </CardActions>
           </Card>
           </Grid>
           <Grid item xs={2}>
           <Card className={classes.productbackground} style={{width: "230px", padding: "10px",  borderRadius: "20px"}}>
               <CardActions>
               <CardContent>
               <Box style={{ width:"10rem", height: "5rem"}}>
                       <Link to="/productlist"><img src={trimsimg} style={{width: "100%", height: "100%"}} alt="trims"/></Link>
                       </Box>
                   <Typography className={classes.parts}>Trims</Typography>
                   </CardContent>
               </CardActions>
           </Card>
           </Grid>
           <Grid item xs={2}>
           <Card className={classes.productbackground} style={{width: "230px", padding: "10px", borderRadius: "20px"}}>
               <CardActions>
               <CardContent>
               <Box style={{ width:"10rem", height: "5rem"}}>
                       <Link to="/productlist"><img src={wheelsimg} style={{width: "100%", height: "100%"}} alt="wheels"/></Link>
                       </Box>
                   <Typography className={classes.parts}>Wheels</Typography>
                   </CardContent>
               </CardActions>
           </Card>
           </Grid>
           </Grid>
           </Box></Box> : ""}</>} </>}

           {isMatch ?
             <Box style={{ width: 200, whiteSpace: 'nowrap' }}> 

             <Typography variant="h4" className={classes.searchcategory}>
                 Popular Car Makers
             </Typography>
             <Box>
                 <Box className={classes.brandbtn}  component="div" overflow="auto"> 
                     <Grid container>
                         <Grid item xs={1}>
                             <Link to="/brandlist">
                             <Button variant="outlined" className={classes.spacesmallscreen}>
                                 SUZUKI
                             </Button>
                             </Link>
                         </Grid>
                         <Grid item xs={1}>
                             <Button variant="outlined"   style={{margin: "15px 35px 15px 65px"}} className={classes.spacesmallscreen}>
                                 HYUNDAI
                             </Button>
                         </Grid>
                         <Grid item xs={1}>
                             <Button variant="outlined"   style={{margin: "15px 35px 15px 125px", backgroundColor: "white"}} className={classes.spacesmallscreen}>
                                 NISSAN
                             </Button>
                         </Grid>
                         <Grid item xs={1}>
                             <Button variant="outlined"   style={{margin: "15px 35px 15px 175px"}} className={classes.spacesmallscreen}>
                                 FORD
                             </Button>
                         </Grid>
                         <Grid item xs={1}>
                             <Button variant="outlined"   style={{margin: "15px 35px 15px 230px"}} className={classes.spacesmallscreen}>
                                 MAHINDRA
                             </Button>
                         </Grid>
                         <Grid item xs={1}>
                             <Button variant="outlined"   style={{margin: "15px 35px 15px 305px"}} className={classes.spacesmallscreen}>
                                 TATA
                             </Button>
                         </Grid>
                         <Grid item xs={1}>
                             <Button variant="outlined"   style={{margin: "15px 35px 15px 355px"}}className={classes.spacesmallscreen}>
                                 HONDA
                             </Button>
                         </Grid>
                         <Grid item xs={1}>
                             <Button variant="outlined"   style={{margin: "15px 35px 15px 425px"}} className={classes.spacesmallscreen}>
                                 RENAULT
                             </Button>
                         </Grid>
                       
                         
                         <Grid item xs={1}></Grid>
                     </Grid>
                 </Box>        </Box> </Box>     
                  : <>
                  {isMatchmediumscreen  ? <Box>

                    <Typography variant="h4" className={classes.searchcategory}>
                Popular Car Makers
            </Typography>
            <Box>
                <Box className={classes.brandbtn} >
                {/* component="div" overflow="auto"> */}
                    <Grid container>
                        <Grid item xs={1}>
                            <Link to="/brandlist">
                            <Button variant="outlined"  style={{margin: "15px", backgroundColor: "white", color: "black", padding: "20px 45px"}} className={classes.space}>
                                SUZUKI
                            </Button>
                            </Link>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="outlined"   style={{margin: "15px 35px 15px 105px",backgroundColor: "white", color: "black", padding: "20px 35px"}} className={classes.space}>
                                HYUNDAI
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="outlined"   style={{margin: "15px 35px 15px 145px",backgroundColor: "white", color: "black", padding: "20px 35px"}} className={classes.space}>
                                NISSAN
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="outlined"   style={{margin: "15px 35px 15px 195px",backgroundColor: "white", color: "black", padding: "20px 35px"}} className={classes.space}>
                                FORD
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="outlined"   style={{margin: "15px 35px 15px 230px", backgroundColor: "white", color: "black", padding: "20px 35px"}} className={classes.space}>
                                MAHINDRA
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="outlined"   style={{margin: "15px 35px 15px 305px",backgroundColor: "white", color: "black", padding: "20px 65px"}} className={classes.space}>
                                TATA
                            </Button>
                        </Grid>


                      
                        
                        <Grid item xs={1}></Grid>
                    </Grid>
                </Box>          
                <Box className={classes.brandbtn}>
                    <Grid container>

                    <Grid item xs={1}>
                            <Button variant="outlined"   style={{margin: "15px" , backgroundColor: "white", color: "black", padding: "20px 20px"}}  className={classes.space}>
                                VOLKSWAGEN
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="outlined"   style={{margin: "15px 35px 15px 85px" ,backgroundColor: "white", color: "black", padding: "20px 18px"}}  className={classes.space}>
                                CHEVEROLET
                            </Button>
                        </Grid>

                        <Grid item xs={1}>
                            <Button variant="outlined"   style={{margin: "15px 35px 15px 145px", backgroundColor: "white", color: "black", padding: "20px 46px"}}  className={classes.space}>
                                MAN
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="outlined"   style={{margin: "15px 35px 15px 195px",backgroundColor: "white", color: "black", padding: "20px 23px"}} className={classes.space}>
                                RENAULT
                            </Button>
                        </Grid> 

                        <Grid item xs={1}>
                            <Button variant="outlined"   style={{margin: "15px 35px 15px 235px", backgroundColor: "white", color: "black", padding: "8px 38px"}}  className={classes.space}>
                                ASHOK LEYLAND
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="outlined"   style={{margin: "15px 35px 15px 305px",backgroundColor: "white", color: "black", padding: "20px 58px"}}className={classes.space}>
                                HONDA
                            </Button>
                        </Grid>                                            
                        <Grid item xs={1}></Grid>
                    </Grid>
                </Box>
                </Box>


                  </Box>: 
                  
                  <>
            {isMatchlargescreen  ?
 
 <Box>
            <Typography variant="h4" className={classes.searchcategory}>
                Popular Car Makers
            </Typography>
            <Box>
                <Box className={classes.brandbtn} >
                {/* component="div" overflow="auto"> */}
                    <Grid container>
                        <Grid item xs={1}>
                            <Link to="/brandlist">
                            <Button variant="outlined"  style={{margin: "15px", backgroundColor: "white", color: "black", padding: "20px 85px"}} className={classes.space}>
                                SUZUKI
                            </Button>
                            </Link>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="outlined"   style={{margin: "15px 35px 15px 95px",backgroundColor: "white", color: "black", padding: "20px 85px"}} className={classes.space}>
                                HYUNDAI
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="outlined"   style={{margin: "15px 35px 15px 125px",backgroundColor: "white", color: "black", padding: "20px 55px"}} className={classes.space}>
                                NISSAN
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="outlined"   style={{margin: "15px 35px 15px 175px",backgroundColor: "white", color: "black", padding: "20px 55px"}} className={classes.space}>
                                FORD
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="outlined"   style={{margin: "15px 35px 15px 210px", backgroundColor: "white", color: "black", padding: "20px 65px"}} className={classes.space}>
                                MAHINDRA
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="outlined"   style={{margin: "15px 35px 15px 305px",backgroundColor: "white", color: "black", padding: "20px 65px"}} className={classes.space}>
                                TATA
                            </Button>
                        </Grid>


                      
                        
                        <Grid item xs={1}></Grid>
                    </Grid>
                </Box>          
                <Box className={classes.brandbtn}>
                    <Grid container>

                    <Grid item xs={1}>
                            <Button variant="outlined"   style={{margin: "15px" , backgroundColor: "white", color: "black", padding: "20px 30px"}}  className={classes.space}>
                                VOLKSWAGEN
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="outlined"   style={{margin: "15px 35px 15px 65px" ,backgroundColor: "white", color: "black", padding: "20px 38px"}}  className={classes.space}>
                                CHEVEROLET
                            </Button>
                        </Grid>

                        <Grid item xs={1}>
                            <Button variant="outlined"   style={{margin: "15px 35px 15px 125px", backgroundColor: "white", color: "black", padding: "20px 65px"}}  className={classes.space}>
                                MAN
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="outlined"   style={{margin: "15px 35px 15px 175px",backgroundColor: "white", color: "black", padding: "20px 45px"}} className={classes.space}>
                                RENAULT
                            </Button>
                        </Grid> 

                        <Grid item xs={1}>
                            <Button variant="outlined"   style={{margin: "15px 35px 15px 215px", backgroundColor: "white", color: "black", padding: "8px 68px"}}  className={classes.space}>
                                ASHOK LEYLAND
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="outlined"   style={{margin: "15px 35px 15px 305px",backgroundColor: "white", color: "black", padding: "20px 58px"}}className={classes.space}>
                                HONDA
                            </Button>
                        </Grid>                                            
                        <Grid item xs={1}></Grid>
                    </Grid>
                </Box>
                </Box></Box>














            : "" }</>     }</>     }
   
                {
    isMatch ? (
        <Box>
            <Box style={{ width: 200, whiteSpace: "nowrap" }}>
                <Typography variant="h4" className={classes.articleheading}>
                    Why Choose AfterMarket Products?
                </Typography>
            </Box>
            <Box component="div" overflow="auto">
                <Grid container>
                    <Grid item xs={4}>
                        <Card className={classes.whyprod} >
                            <CardActionArea style={{ alignItems: "center" }}>
                                <Box style={{ width: "55px", height: "35px", marginLeft: "20px", marginTop: "0.5rem" }}>
                                    <img src={originalprodimg} style={{width: "100%", height: "100%"}} alt="Original Products"/>
                                </Box>

                                <CardContent>
                                    <Typography align="center" gutterBottom variant="body2" component="p">
                                        Original Products
                                    </Typography>

                                    <Typography align="center" style={{ paddingBottom: "40px" }} variant="body2" component="p">
                                        Only reliable parts from trusted Aftermarket brands
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card className={classes.whyprod} >
                            <CardActionArea style={{ alignItems: "center" }}>
                                <Box style={{ width: "55px", height: "35px", marginLeft: "20px", marginTop: "0.5rem" }}>
                                    <img src={affordableratesimg} style={{width: "100%", height: "100%"}} alt="Affordable rates" />
                                </Box>

                                <CardContent>
                                    <Typography align="left" gutterBottom variant="body2" component="p">
                                        Affordable Rates
                                    </Typography>

                                    <Typography align="left" variant="body2" component="p">
                                        Repairing a damaged vehicle can be expensive. Using the aftermrket products is a good situation if you're on a budget.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card className={classes.whyprod} >
                            <CardActionArea style={{ alignItems: "left" }}>
                                <Box style={{ width: "55px", height: "35px", marginLeft: "20px", marginTop: "0.5rem" }}>
                                    <img src={widevarietyimg} style={{width: "100%", height: "100%"}} alt="Wide variety"/>
                                </Box>
                                <CardContent>
                                    <Typography align="left" gutterBottom variant="body2" component="p" style={{paddingLeft: "8px"}}>
                                        Wide Variety
                                    </Typography>

                                    <Typography align="left" variant="body2" component="p">
                                        We have something for everyone when it comes to after market products. Just apply the "Aftermarket" filter in the catalogue and check the offers.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    ) 
:
<>{isMatchtabletscreen ? <Box>    <Typography variant="h4" className={classes.articleheading}>
        Why Choose AfterMarket Products?
    </Typography>

<Grid container>
    <Grid item xs={4}>
        <Card className={classes.whyprod} style={{ display: "flex" }}>
            <CardActionArea style={{ alignItems: "center" }}>
                <Box style={{ width: "115px", height: "115px", marginLeft: "95px", marginTop: "50px" }}>
                    <img src={originalprodimg} width="100%" height="100%" alt="Original products" />
                </Box>

                <CardContent>
                    <Typography align="center" gutterBottom variant="h5" component="h2">
                        Original Products
                    </Typography>

                    <Typography align="center" style={{ paddingBottom: "40px" }} variant="body2" component="p">
                        Only reliable parts from trusted Aftermarket brands
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </Grid>
    <Grid item xs={4}>
        <Card className={classes.whyprod} style={{ display: "flex" }}>
            <CardActionArea style={{ alignItems: "center" }}>
                <Box style={{ width: "115px", height: "135px", marginLeft: "95px", marginTop: "50px" }}>
                    <img src={affordableratesimg} width="100%" height="100%" alt="affordable rates"/>
                </Box>

                <CardContent>
                    <Typography align="left" gutterBottom variant="h5" component="h2">
                        Affordable Rates
                    </Typography>

                    <Typography align="left" variant="body2" component="p">
                        Repairing a damaged vehicle can be expensive. Using the aftermrket products is a good situation if you're on a budget.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </Grid>
    <Grid item xs={4}>
        <Card className={classes.whyprod} style={{ display: "flex", marginRight: "30px" }}>
            <CardActionArea style={{ alignItems: "left" }}>
                <Box style={{ width: "115px", height: "115px", marginLeft: "95px", marginTop: "50px" }}>
                    <img src={widevarietyimg} width="100%" height="100%" alt="wide variety"/>
                </Box>
                <CardContent>
                    <Typography align="left" gutterBottom variant="h5" component="h2">
                        Wide variety
                    </Typography>

                    <Typography align="left" variant="body2" component="p">
                        We have something for everyone when it comes to after market products. Just apply the "Aftermarket" filter in the catalogue and check the offers.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </Grid>
</Grid>
    </Box> :

<>{isMatchmediumscreen ? <Box>
<Box>
    <Typography variant="h4" className={classes.articleheading}>
        Why Choose AfterMarket Products?
    </Typography>
</Box>
<Grid container>
    <Grid item xs={4}>
        <Card className={classes.whyprod} style={{ display: "flex" }}>
            <CardActionArea style={{ alignItems: "center" }}>
                <Box style={{ width: "115px", height: "115px", marginLeft: "95px", marginTop: "50px" }}>
                    <img src={originalprodimg} width="100%" height="100%" alt="Original products" />
                </Box>

                <CardContent>
                    <Typography align="center" gutterBottom variant="h5" component="h2">
                        Original Products
                    </Typography>

                    <Typography align="center" style={{ paddingBottom: "40px" }} variant="body2" component="p">
                        Only reliable parts from trusted Aftermarket brands
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </Grid>
    <Grid item xs={4}>
        <Card className={classes.whyprod} style={{ display: "flex" }}>
            <CardActionArea style={{ alignItems: "center" }}>
                <Box style={{ width: "115px", height: "135px", marginLeft: "95px", marginTop: "50px" }}>
                    <img src={affordableratesimg} width="100%" height="100%" alt="affordable rates"/>
                </Box>

                <CardContent>
                    <Typography align="left" gutterBottom variant="h5" component="h2">
                        Affordable Rates
                    </Typography>

                    <Typography align="left" variant="body2" component="p">
                        Repairing a damaged vehicle can be expensive. Using the aftermrket products is a good situation if you're on a budget.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </Grid>
    <Grid item xs={4}>
        <Card className={classes.whyprod} style={{ display: "flex", marginRight: "30px" }}>
            <CardActionArea style={{ alignItems: "left" }}>
                <Box style={{ width: "115px", height: "115px", marginLeft: "95px", marginTop: "50px" }}>
                    <img src={widevarietyimg} width="100%" height="100%" alt="wide variety"/>
                </Box>
                <CardContent>
                    <Typography align="left" gutterBottom variant="h5" component="h2">
                        Wide variety
                    </Typography>

                    <Typography align="left" variant="body2" component="p">
                        We have something for everyone when it comes to after market products. Just apply the "Aftermarket" filter in the catalogue and check the offers.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </Grid>
</Grid>
    
     
</Box> :


<>{isMatchlargescreen ? <Box>
<Box>
    <Typography variant="h4" className={classes.articleheading}>
        Why Choose AfterMarket Products?
    </Typography>
</Box>
<Grid container>
    <Grid item xs={4}>
        <Card className={classes.whyprod} style={{ display: "flex", marginLeft: " 25px", marginRight: "55px" }}>
            <CardActionArea style={{ alignItems: "center" }}>
                <Box style={{ width: "115px", height: "115px", marginLeft: "135px", marginTop: "50px" }}>
                    <img src={originalprodimg} width="100%" height="100%" alt="Original products" />
                </Box>

                <CardContent>
                    <Typography align="center" gutterBottom variant="h5" component="h2">
                        Original Products
                    </Typography>

                    <Typography align="center" style={{ paddingBottom: "40px" }} variant="body2" component="p">
                        Only reliable parts from trusted Aftermarket brands
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </Grid>
    <Grid item xs={4}>
        <Card className={classes.whyprod} style={{ display: "flex" }}>
            <CardActionArea style={{ alignItems: "center" }}>
                <Box style={{ width: "115px", height: "115px", marginLeft: "135px", marginTop: "50px" }}>
                    <img src={affordableratesimg} width="100%" height="100%" alt="affordable rates"/>
                </Box>

                <CardContent>
                    <Typography align="left" gutterBottom variant="h5" component="h2">
                        Affordable Rates
                    </Typography>

                    <Typography align="left" variant="body2" component="p">
                        Repairing a damaged vehicle can be expensive. Using the aftermrket products is a good situation if you're on a budget.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </Grid>
    <Grid item xs={4}>
        <Card className={classes.whyprod} style={{ display: "flex", marginRight: "30px" }}>
            <CardActionArea style={{ alignItems: "left" }}>
                <Box style={{ width: "115px", height: "115px", marginLeft: "135px", marginTop: "50px" }}>
                    <img src={widevarietyimg} width="100%" height="100%" alt="wide variety"/>
                </Box>
                <CardContent>
                    <Typography align="left" gutterBottom variant="h5" component="h2">
                        Wide variety
                    </Typography>

                    <Typography align="left" variant="body2" component="p">
                        We have something for everyone when it comes to after market products. Just apply the "Aftermarket" filter in the catalogue and check the offers.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </Grid>
</Grid>
</Box>: ""}</>}</>}</>}


{
    isMatch ? (

<Box style={{ width: 309, whiteSpace: "nowrap" }}>
            <Typography variant="h4" className={classes.articleheading}>
                Article & Reviews
            </Typography>
            <Box component="div" overflow="auto">
            <Grid container>
                <Grid item xs={4}>
                <Card className={classes.article} style={{display: "flex", width: "185px", height: "155px",marginLeft: " 25px", marginRight: "65px"}}>
                        <CardActionArea style={{alignItems: "center"}}>
                            <CardMedia className={classes.articleimage} image={articleoneimage} style={{width: "100%", height: "100%"}} title="Contemplative Reptile" />
                            <CardContent>
                                <Typography align="left" gutterBottom variant="h6" component="h2">
                                    Original Products
                                </Typography>
    
                                <Typography align="left" style={{paddingBottom: "40px", fontSize: 12}} variant="body2" color="textSecondary" component="p">
                                   Only reliable parts from trusted Aftermarket brands
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card className={classes.article} style={{display: "flex", width: "185px", height: "155px", marginLeft: "125px"}}>
                        <CardActionArea style={{alignItems: "center"}}>
                            <CardMedia className={classes.articleimage} image={articletwoimage} style={{width: "100%", height: "100%"}}title="Contemplative Reptile" />
                            <CardContent>
                                <Typography align="left" gutterBottom variant="h6" component="h2">
                                    Affordable Rates
                                </Typography>
    
                                <Typography align="left" variant="body2" color="textSecondary"  component="p" style={{fontSize: 12}}>
                                    Repairing a damaged vehicle can be expensive. Using the aftermrket products is a good situation if you're on a budget.
                                 </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card className={classes.article} style={{display: "flex", width: "185px", height: "155px", marginLeft: "225px"}}>
                        <CardActionArea style={{alignItems: "left"}}>
                            <CardMedia className={classes.articleimage} image={articlethreeimage} style={{width: "100%", height: "100%"}} title="Contemplative Reptile" />
                            <CardContent>
                                <Typography align="left" gutterBottom variant="h6" component="h2">
                                    Wide variety
                                </Typography>
    {/* Date  */}
                                <Typography align="left" variant="body2" color="textSecondary" component="p" style={{fontSize: 12}}>
                                    We have something for everyone when it comes to after market products. Just apply the "Aftermarket" filter in the catalogue and check the offers.
                                 </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
        </Grid>
        </Box>
        </Box>
        ) : 
        
        <>{isMatchmediumscreen ? <Box>
            <Typography variant="h4" className={classes.articleheading}>
            Article & Reviews
        </Typography>
        <Grid container >
            <Grid item xs={4}>
                <Card className={classes.article} style={{display: "flex"}}>
                    <CardActionArea style={{alignItems: "center"}}>
                        <CardMedia className={classes.articleimage} onClick={collapsecontent} image={articleoneimage} title="Contemplative Reptile" />
                      {iscollapsed ? 
                        <CardContent>
                        <Typography align="left" gutterBottom variant="h6" component="p" style={{fontSize: 18}}>
                                <strong>Did you know the facts about Mahindra Spare Parts!!</strong>
                            </Typography>
                            <Typography align="left" variant="body2" color="textSecondary" component="p" style={{fontSize: 12}}>
                            Now, automotive spare parts are something that most of us hardly don’t care about. As a matter of fact, not many car owners hardly understand the difference between a genuine and a fake spare part.
                          </Typography>
                        </CardContent> : "" }
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card className={classes.article} style={{display: "flex"}}>
                    <CardActionArea style={{alignItems: "center"}}>
                        <CardMedia className={classes.articleimage} onClick={collapsecontenttwo} image={articletwoimage} title="Contemplative Reptile" />
                        {articletwocollapsed ? 
                        <CardContent>
                        <Typography align="left" gutterBottom variant="h6" component="p" style={{fontSize: 18}}>
                                <strong>Fake Spare Parts OR Genuine Spare Parts? Choice is yours.</strong>
                            </Typography>
                            <Typography align="left" variant="body2" color="textSecondary" component="p" style={{fontSize: 12}}>
                            Fake has become a new reality, be it technology, accessories or clothing, everything in this world has a fake counterpart. Even the automobile spare parts industry is also flooded with fake spare parts and accessories.                          </Typography>
                        </CardContent> : "" }
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card className={classes.article} style={{display: "flex", marginRight: "30px"}}>
                    <CardActionArea style={{alignItems: "left"}}>
                        <CardMedia className={classes.articleimage} onClick={collapsecontentthree} image={articlethreeimage} title="Contemplative Reptile" />
                        {articlethreecollapsed ? 
                        <CardContent>
                            <Typography align="left" gutterBottom variant="h6" component="p" style={{fontSize: 18}}>
                                <strong>Benefits of buying TATA Genuine spares parts from the leading brand!</strong>
                        
                            </Typography>
{/* Date  */}
                            <Typography align="left" variant="body2" color="textSecondary" component="p" style={{fontSize: 12}}>
                            Smart Parts Export is the largest provider of automobile Genuine spare parts all over the world that has already created wonders in the market.                          </Typography>
                        </CardContent> : ""}
                    </CardActionArea>
                </Card>
            </Grid>
    </Grid>
        </Box> :
        
        <>{isMatchlargescreen ? <Box>
        <Typography variant="h4" className={classes.articleheading}>
            Article & Reviews
        </Typography>
        <Grid container >
            <Grid item xs={4}>
            <Card className={classes.article} style={{display: "flex", marginLeft: " 25px", marginRight: "55px"}}>
                    <CardActionArea style={{alignItems: "center"}}>
                        <CardMedia className={classes.articleimage} onClick={clickedtwice ? togglecontent : collapsecontent} image={articleoneimage} title="Contemplative Reptile" />
                      {iscollapsed ? " " :
                        <CardContent>
                        <Typography align="left" gutterBottom variant="h6" component="p" style={{fontSize: 18}}>
                                <strong>Did you know the facts about Mahindra Spare Parts!!</strong>
                            </Typography>
                            <Typography align="left" variant="body2" color="textSecondary" component="p" style={{fontSize: 12}}>
                            Now, automotive spare parts are something that most of us hardly don’t care about. As a matter of fact, not many car owners hardly understand the difference between a genuine and a fake spare part.
                          </Typography>
                        </CardContent>  }
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card className={classes.article} style={{display: "flex"}}>
                    <CardActionArea style={{alignItems: "center"}}>
                        <CardMedia className={classes.articleimage} onClick={clickedtwicetwo ? togglecontenttwo : collapsecontenttwo} image={articletwoimage} title="Contemplative Reptile" />
                        {articletwocollapsed ? " " :
                        <CardContent>
                         <Typography align="left" gutterBottom variant="h6" component="p" style={{fontSize: 18}}>
                                <strong>Fake Spare Parts OR Genuine Spare Parts? Choice is yours.</strong>
                            </Typography>
{/* Date  */}
                            <Typography align="left" variant="body2" color="textSecondary" component="p" style={{fontSize: 12}}>
                              Fake has become a new reality, be it technology, accessories or clothing, everything in this world has a fake counterpart. Even the automobile spare parts industry is also flooded with fake spare parts and accessories.
                          </Typography>
                        </CardContent>  }
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card className={classes.article} style={{display: "flex", marginRight: "30px"}}>
                    <CardActionArea style={{alignItems: "left"}}>
                        <CardMedia className={classes.articleimage} onClick={clickedtwicethree ? togglecontentthree : collapsecontentthree} image={articlethreeimage} title="Contemplative Reptile" />
                        {articlethreecollapsed ? " " :
                        <CardContent>
                          
                        <Typography align="left" gutterBottom variant="h6" component="p" style={{fontSize: 18}}>
                                <strong>Benefits of buying TATA Genuine spares parts from the leading brand!</strong>
                            </Typography>
                            <Typography align="left" variant="body2" color="textSecondary" component="p" style={{fontSize: 12}}>
                            Smart Parts Export is the largest provider of automobile Genuine spare parts all over the world that has already created wonders in the market.
                          </Typography>
                        </CardContent>}
                    </CardActionArea>
                </Card>
            </Grid>
    </Grid>
    </Box>: ""}</>}</>
}


        <Box>
        {isMatchlargescreen ? <Box>  <Grid container>
                <Grid item xs={12}>
                    <Card className={classes.border} style={{marginLeft: "20px",  marginTop: "20px ", marginBottom: "5px "}}>
                        <CardActions style={{ display: "flex", justifyContent: "flex-start" }}>
                            <CardContent>
                                <Typography variant="h4" align="center" style={{ fontSize: 23,
        fontFamily: 'nano-sans'}}><strong>
                                    Smart Parts Exports | Genuine Automotive Spare Parts 
                                      (Online Marketplace to Buy Original Car Parts)
                                    </strong>
                                </Typography>
                                <CardActions>
                                    <Typography style={{fontSize: 15}} align="center">
                                    Smart Parts Export is a leading exporter of auto spare parts for passenger and commercial vehicles in India. We strive to give world-class service to all our esteemed clients.
                                    Our sheer professionalism has enabled us to make our presence felt in more than 80 countries spread over 5 continents. 
                                    </Typography>
                                </CardActions>
                                <CardActions>
                                    <Box>
                                        {readmoredisappear ? " " :
                                        <Grid container>
                                           
                                        <Grid item lg={12}>
                                            <Box style={{display: "flex", flexDirection: "row"}}>
                                        <Typography  style={{ marginLeft: " 620px"}}>Read More</Typography>
                                        <KeyboardArrowDownOutlinedIcon onClick={aboutusparagraph} >
                                        </KeyboardArrowDownOutlinedIcon>
                                        </Box>
                                            </Grid>
                                            
                                        </Grid>
                                            }
                                        {displaytext === false ? ""
                                        : <Grid container>
                                        <Grid item xs={1}>
                                            
                                            </Grid>
                                        <Grid item xs={10}>
                                        <Typography  style={{fontSize: 15 }}>     
                                                    {smartexportparagraph}
                                                   </Typography>
                                                   <Grid container>
                                        <Grid item lg={12}>
                                            <Box style={{display: "flex", flexDirection: "row"}}>
                                        <Typography  style={{ marginLeft: " 620px"}}>Read Less</Typography>
                                        <KeyboardArrowUpOutlinedIcon onClick={hideaboutusparagraph} >
                                        </KeyboardArrowUpOutlinedIcon>
                                        </Box>
                                            </Grid>
                                            </Grid>           
                                            </Grid>
                                        <Grid item xs={1}>

                                        </Grid>
                                        </Grid>}
                                        
                                        {/* <Box style={{display: "flex", flexDirection: "column", margin: "0px 6px"}}>
                                    <Typography align="center" style={{ marginRight: " 10px"}}     >Wanna Know More?</Typography>
                                    

                                        <ShowMoreText lines={1} more={<ExpandMore />} less={<ExpandLess />} onClick={onClick} expanded={expand} width={30}>
                                        <Box style={{display: "flex", flexDirection: "row"}}>
                                                <Typography  style={{fontSize: 15 }}>     
                                                    {smartexportparagraph}
                                                   </Typography>
                                                   </Box >  
                                        </ShowMoreText>
                                        
                                        </Box> */}
                                    </Box>
                                </CardActions>
                            </CardContent>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
</Box>:            
            <Grid container>
                <Grid item xs={12}>
                    <Card className={classes.border} style={{marginLeft: "20px",  marginTop: "20px ", marginBottom: "5px "}}>
                        <CardActions style={{ display: "flex", justifyContent: "flex-start" }}>
                            <CardContent>
                                <Typography variant="h4" align="center" style={{ fontSize: 32,
        fontFamily: 'nano-sans'}}>
                                    Smartpartsexports.com – #1 Online Marketplace to Sell or Buy Car Parts
                                </Typography>
                                <CardActions>
                                    <Typography style={{fontSize: 15}} align="center">
                                        Using your own car gives you an independence from external circumstances and the opportunity to plan your day exactly how you want. No rush to miss urban transport and even be late for work, because of
                                        outside factors.With an own car, you feel free, have the ability to address business and pleasure travel, as you want. All these reasons have a huge influence on the number of vehicles, on the road. Among
                                        them are passenger cars, lorries, buses, etc.Bringing this into focus: in 1986 there were only 500 million cars in the whole world. And in 2010 the number increased to 1 billion vehicles. Researchers with
                                        the International Energy Agency suggest that by the year 2035 nearly 25 percent of the world population will own a car. According to research, the current number is going to increase to 1,7 billion.
                                        That's why auto car spare parts are in demand among car owners. Smartpartsexports.com is a car parts marketplace in India, which pursues the aim to organize the replacement parts market and make the
                                        shopping process easier and more convenient.The offer from Smartpartsexports.com -
                                    </Typography>
                                </CardActions>
                                <CardActions>
                                    <Box component="span" >
                                        <Box style={{display: "flex", flexDirection: "row"}}>
                                    <Typography >Learn More</Typography>
                                        <ShowMoreText lines={2} more={<ExpandMore />} less={<ExpandLess />} onClick={onClick} expanded={expand} width={30}>
                                        
                                                <Typography align="center" style={{fontSize: 15 }}>     
                                                    {text}
                                                   </Typography>

                                        </ShowMoreText>
                                        </Box>
                                    </Box>
                                </CardActions>
                            </CardContent>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
}

{isMatch ? "" : <>{isMatchmediumscreen ? "" : <>{isMatchlargescreen ? 
              <Box> 
                        
                         <Box className={classes.workflowsection}  style={{margin: "18px", borderRadius: "25px"}}>
                        
                         <Box >
                    <Grid container>
                        <Grid item xs={5} >

                        </Grid>
                      

                        <Grid item xs={1} alignItems="center" style={{marginTop: "50px",marginLeft: "80px"}} >
                        <TextOnlyTooltip title="Confirmed Order" aria-label="add" >
                        <Avatar className={classes.avatarremaining}>
                            <img src={confirmedorderimg} alt="confirmed order"/>
                        </Avatar>
                        </TextOnlyTooltip>
                        </Grid>
                        
                        <Grid item xs={6}>
                            
                            </Grid>
                       </Grid> 
                     
                    <Grid container style={{marginTop: "15px"}}>
                    
                        <Grid item xs={2} style={{display: "flex", marginLeft: "45px", marginTop: "50px"}} justify="flex-start">
                        <TextOnlyTooltip title="Requirement" aria-label="add" >                       
                                                    <Avatar className={classes.avatar}>
                            <img src={requirenmentimg} alt="requirenment"/>
                            
                        </Avatar>
                        </TextOnlyTooltip>
                        </Grid>

                        
                        <Grid item xs={2} style={{display: "flex"}} justify="flex-start">
                        <TextOnlyTooltip title="Smart Parts Export" aria-label="add" >
                        <Avatar className={classes.avatarremaining}>
                        <img src={workflowlogo} style={{width: "55px", height: "55px"}} alt="logo"/>
                        </Avatar>
                        </TextOnlyTooltip>
                        </Grid>
                        
                        <Grid item xs={2} style={{display: "flex"}} justify="flex-end">
                        <TextOnlyTooltip title="Generate Invoice" aria-label="add" >
                        <Avatar className={classes.avatarremaining} >
                        <img src={invoiceimg} alt="invoice"/>
                        </Avatar>
                        </TextOnlyTooltip>
                        </Grid>
                        

                        <Grid item xs={3} style={{display: "flex", marginLeft: "15px"}} justify="flex-end">
                        <TextOnlyTooltip title="Shipped" aria-label="add" >
                        <Avatar className={classes.avatarremaining} style={{ marginLeft: "-20px"}}>
                        <img src={Shippedimg} alt="shipped" />
                        </Avatar>
                        </TextOnlyTooltip>
                        </Grid>
                        
                        
                        <Grid item xs={2} style={{display: "flex", marginLeft: "35px"}} justify="flex-end">
                        <TextOnlyTooltip title="Delivered" aria-label="add" >
                        <Avatar className={classes.avatarremaining}style={{ marginLeft: "6px"}}>
                        <img src={deliveredimg} alt="delivered" />
                        </Avatar>
                        </TextOnlyTooltip>
                        {/* <Grid item xs={1} style={{marginTop: "85px"}}>
                        <LinearProgress variant="buffer" className={classes.MuiLinearProgressRoot} value={progress} style={{color: "white"}} valueBuffer={buffer} />
                        </Grid> */}
                     </Grid>
                    </Grid>
                    <Grid container  >
                        <Grid item xs={5}>

                        </Grid>
                        
                        <Grid item xs={4} alignItems="center" style={{marginLeft: "85px", marginTop: "40px"}}>
                        <TextOnlyTooltip title="Payment & Dispatch Order" aria-label="add" >
                        <Avatar className={classes.avatarremaining} >
                            <img src={Paymentimg} alt="payment"/>
                        </Avatar>
                        </TextOnlyTooltip>
                        </Grid>
                        <Grid item xs={3}>

                        </Grid>

                       </Grid> 
                    </Box>
                      
             
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                         {/* <Box>
                    <Typography variant="h4" style={{paddingTop: "40px", color: "white"}} align="center">Workflow of Order Management</Typography>
                    </Box>
                    <Box style={{marginLeft: "160px"}}>
                    <Grid container>
                        <Grid item xs={4} style={{maxWidth: "29.33%"}}>

                        </Grid>
                      
                        <Grid item xs={1} style={{marginTop: "85px", maxWidth: "12.33%", marginBottom: "0px"}} >
                        <LinearProgress variant="buffer" className={classes.MuiLinearProgressRoot} value={progress} style={{color: "white"}} valueBuffer={buffer} />
                        </Grid>
                        <Grid item xs={1} alignItems="center" style={{maxWidth: "6.33%"}}>
                        <Avatar className={classes.avatarremaining}>
                            <img src={confirmedorderimg} alt="confirmed order"/>
                        </Avatar>
                        </Grid>
                        <Grid item xs={1} style={{marginTop: "85px"}}>
                        <LinearProgress variant="buffer" className={classes.MuiLinearProgressRoot} value={progress} style={{color: "white"}} valueBuffer={buffer} />
                        </Grid>
                        <Grid item xs={5}>
                            
                            </Grid>
                       </Grid> 
                     
                    <Grid container >
                    
                        <Grid item xs={2} style={{display: "flex"}} justify="flex-end">
                       
                                                    <Avatar className={classes.avatar}>
                            <img src={requirenmentimg} alt="requirenment"/>
                            
                        </Avatar>
                        </Grid>
                        <Grid item xs={1} style={{marginTop: "85px"}}>
                        <LinearProgress variant="buffer" className={classes.MuiLinearProgressRoot} value={progress} style={{color: "white"}} valueBuffer={buffer} />
                        </Grid>
                        
                   
                     
                        
                        <Grid item xs={2} style={{display: "flex", maxWidth: "6.33%"}} justify="flex-start">
                        <Box style={{ width: "1.5px",position: "absolute", left: "562px", marginTop: "-91px", backgroundColor: "#3f51b5"}}>
                     <LinearProgress   value={progress} style={{backgroundColor: "#3f51b5"}} /> 
                    <BorderLinearProgress variant="determinate" value={50} />
                     </Box> 
                        <Avatar className={classes.avatarremaining}>
                        <img src={logo} style={{width: "55px", height: "55px"}} alt="logo"/>
                        </Avatar>
                        </Grid>
                        <Grid item xs={1} style={{marginTop: "85px"}}>
                        <LinearProgress variant="buffer" className={classes.MuiLinearProgressRoot} value={progress} style={{color: "white", width: "80%"}} valueBuffer={buffer} />
                        </Grid>
                        <Grid item xs={1} style={{display: "flex",  maxWidth: "6.33%"}} justify="flex-start">
                        <Avatar className={classes.avatarremaining} style={{ marginLeft: "-20px"}}>
                        <img src={invoiceimg} alt="invoice"/>
                        </Avatar>
                        </Grid>
                        <Grid item xs={1} style={{marginTop: "85px",marginLeft: "-20px"}}>
                        <LinearProgress variant="buffer" className={classes.MuiLinearProgressRoot} value={progress} style={{color: "white", width: "80%"}} valueBuffer={buffer} />
                        </Grid>

                        <Grid item xs={2} style={{display: "flex", maxWidth: "6.33%"}} justify="flex-start">
                        <Box style={{ width: "1.5px",position: "absolute",  marginTop: "-91px", backgroundColor: "#3f51b5"}}>
                     <LinearProgress   value={progress}  style={{backgroundColor: "#3f51b5"}}   /> 
                    <BorderLinearProgress variant="determinate" value={50} />
                     </Box> 
                        <Avatar className={classes.avatarremaining} style={{ marginLeft: "-20px"}}>
                        <img src={Shippedimg} alt="shipped" />
                        </Avatar>
                        </Grid>
                        <Grid item xs={1} style={{marginTop: "85px", marginLeft: "-20px"}}>
                        <LinearProgress variant="buffer" className={classes.MuiLinearProgressRoot} value={progress} style={{color: "white"}} valueBuffer={buffer} />
                        </Grid>
                        
                        <Grid item xs={2} style={{display: "flex"}} justify="flex-start">
                        <Avatar className={classes.avatarremaining}style={{ marginLeft: "6px"}}>
                        <img src={deliveredimg} alt="delivered" />
                        </Avatar>
                        {/* <Grid item xs={1} style={{marginTop: "85px"}}>
                        <LinearProgress variant="buffer" className={classes.MuiLinearProgressRoot} value={progress} style={{color: "white"}} valueBuffer={buffer} />
                        </Grid> */}
                        {/* </Grid>
                    </Grid>
                    <Grid container  >
                        <Grid item xs={4} style={{maxWidth: "29.33%"}}>

                        </Grid>
                        <Grid item xs={1} style={{marginTop: "85px",  maxWidth: "12.33%"}}>
                        <LinearProgress variant="buffer" className={classes.MuiLinearProgressRoot} value={progress} style={{color: "white"}} valueBuffer={buffer} />
                        </Grid>
                        <Grid item xs={1} alignItems="center" style={{maxWidth: "6.33%"}}>
                        <Avatar className={classes.avatarremaining} >
                            <img src={Paymentimg} alt="payment"/>
                        </Avatar>
                        </Grid>
                        <Grid item xs={1} style={{marginTop: "85px"}}>
                        <LinearProgress variant="buffer" className={classes.MuiLinearProgressRoot} value={progress} style={{color: "white"}} valueBuffer={buffer} />
                        </Grid>
                        <Grid item xs={5}>
                            
                            </Grid>
                       </Grid> 
                    </Box>
                     */}
                    </Box> 

 </Box> 
 : " "  }</>}</> }
  {/* article and reviews   instead of switch i want on click on image*/}
 {/* <Box>
 <div className={classes.root}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handlingChange} />}
        label="Show"
      />
      <div className={classes.container}>
        <Collapse in={checked}>
          <Paper elevation={4} className={classes.paper}>
            <svg className={classes.svg}>
              <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
            </svg>
          </Paper>
        </Collapse>
        
      </div>
    </div>
 </Box> */}
 <Box>
 <Typography variant="h4" className={classes.articleheading}>
            FAQ
        </Typography>
        <Box style={{margin: "25px"}}>
            
     <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What is this website about? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Smart Parts Export is a leading Indian exporter of automotive spare parts mainly for passenger and commercial vehicles. We are here to provide world-class service to all our esteemed clients. Our sheer professionalism and dedication towards our services has enabled us to make our presence felt in more than 80 countries spread over 5 continents.
            We take pride in being among the top most preferred genuine automotive spare parts exporters in India. We specialize in the supply of genuine and aftermarket spare parts for passenger and commercial vehicles manufactured by Tata Motors, Mahindra, Ashok Leyland, Maruti Suzuki, Hyundai, Ford, Honda, EICHER, MAN and other Indian manufactured vehicles.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Box style={{marginTop: "25px"}}>
      <Accordion>
      
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Do you provide genuine automotive spare parts?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes we deal in 100% genuine quality of  automotive spare parts, as we are directly associated with all the Top brands in India.
          </Typography>
        </AccordionDetails>
      </Accordion>
   </Box>
   <Box style={{marginTop: "25px"}}>
      <Accordion>
      
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography> In how many countries do you deliver your automotive spare parts?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We are already serving our best products and services in more than 80 countries.
          For Genuine automotive spare parts, we also have a very large product range and can undertake any customizations as per consumer or market requirements.

          </Typography>
        </AccordionDetails>
      </Accordion>
   </Box>
   <Box style={{marginTop: "25px"}}>
      <Accordion>
      
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography> In which brands do you deal in?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We deal in all the top brands of India and also we are directly associated with all these brands which are mentioned below. 
            Genuine automotive spare parts component exporter from India specializing in complete product range like following :-
            • Suzuki Spare parts
            •Tata Motors Spare parts
            •Ashok Leyland Spare parts
            •Mahindra Spare parts
            •Chevrolet Spare Parts
            •Ford Spare Parts
            •Nissan Spare Parts
            •Man Spare parts for CLA
            • Ford Spare parts
            •Hyundai spare parts (aftermarket)



          </Typography>
        </AccordionDetails>
      </Accordion>
   </Box>
      </Box>
      </Box>
 <Box className={classes.chatbox}>
   <Popper  open={openpopper} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
            <ChatBot />
              
              
            </Paper>
          </Fade>
        )}
      </Popper>
  <Fab  onClick={handleClick('bottom-end')} className={classes.fab} style={{position: "fixed", backgroundColor: "#8C00DB "}} aria-label="add">
           <ChatIcon  style={{color: "white", marginTop: "5px"}}/>

          </Fab>
          </Box>
            <Footer />
           
        {/* <Box className={classes.slider}>
         {/* <Carousel breakPoints={breakPoints}>
          <Item>One</Item>
          <Item>Two</Item>
          <Item>Three</Item>
          <Item>Four</Item>
          <Item>Five</Item>
          <Item>Six</Item>
          <Item>Seven</Item>
          <Item>Eight</Item>
        </Carousel>  </Box>*/} 
          
        



</Box>
 {/* <Box style={{marginBottom: "60px"}}>
            <Box style={{ display: "flex", justifyContent: "center" }}>
                <Button variant="outlined" style={{ width: "45%" }} onClick={handleOpen}>
                    Help and support
                </Button>
            </Box>
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
        </Box>   */}
        </Box>

        
               )
}
